import { text, real, sqliteTable, int, primaryKey } from 'drizzle-orm/sqlite-core';
import type { AdapterAccountType } from '@auth/core/adapters';

export const activities = sqliteTable('activities', {
  id: int('id').primaryKey().notNull(),
  label: text('label', { length: 256 }).notNull(),
  description: text('description'),
  date: int('timestamp', {
    mode: 'timestamp'
  }),
  retired: int('retired', { mode: 'boolean' }).default(false),
  pricing: real('pricing'),
  pictures: text('pictures', {
    mode: 'json'
  })
    .$type<{ label: string; link: string }[]>()
    .default([])
});

export const users = sqliteTable('users', {
  id: text('id').primaryKey().notNull(),
  name: text('name'),
  email: text('email').notNull().unique(),
  emailVerified: int('emailVerified', { mode: 'timestamp_ms' }),
  image: text('image')
});

export const accounts = sqliteTable(
  'accounts',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: int('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state')
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId]
    })
  })
);

export const sessions = sqliteTable('sessions', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: int('expires', { mode: 'timestamp_ms' }).notNull()
});

export const verificationTokens = sqliteTable(
  'verificationTokens',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: int('expires', { mode: 'timestamp_ms' }).notNull()
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token]
    })
  })
);

export const authenticators = sqliteTable(
  'authenticators',
  {
    credentialID: text('credentialID').notNull().unique(),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    providerAccountId: text('providerAccountId').notNull(),
    credentialPublicKey: text('credentialPublicKey').notNull(),
    counter: int('counter').notNull(),
    credentialDeviceType: text('credentialDeviceType').notNull(),
    credentialBackedUp: int('credentialBackedUp', {
      mode: 'boolean'
    }).notNull(),
    transports: text('transports')
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID]
    })
  })
);
