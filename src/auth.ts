import {
  PRIVATE_SENDGRID_API_KEY,
  PRIVATE_AUTH_SECRET,
  PRIVATE_SENDGRID_TEMPLATE_ID
} from '$env/static/private';
import {
  accounts,
  authenticators,
  sessions,
  users,
  verificationTokens
} from '$lib/database/schemas';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import Sendgrid from '@auth/sveltekit/providers/sendgrid';

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => ({
  adapter: DrizzleAdapter(event.locals.db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    authenticatorsTable: authenticators,
    verificationTokensTable: verificationTokens
  }),
  providers: [
    Sendgrid({
      id: 'sendgrid',
      apiKey: PRIVATE_SENDGRID_API_KEY,
      from: 'Cécile Langlois <authentication@cecile-langlois.com>',
      maxAge: 60 * 15,
      sendVerificationRequest: async (params) => {
        const { identifier: to, provider, url, expires } = params;
        const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${provider.apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: to }],
                dynamic_template_data: {
                  magic_link: url,
                  expiration_date: expires.toLocaleString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                  })
                }
              }
            ],
            from: { email: 'authentication@cecile-langlois.com', name: 'Cécile Langlois' },
            subject: 'Your Example Order Confirmation',
            template_id: PRIVATE_SENDGRID_TEMPLATE_ID
          })
        });

        if (!res.ok) throw new Error('Sendgrid error: ' + (await res.text()));
      }
    })
  ],
  secret: PRIVATE_AUTH_SECRET,
  trustHost: true,
  pages: {
    verifyRequest: '/mail-auth'
  }
}));
