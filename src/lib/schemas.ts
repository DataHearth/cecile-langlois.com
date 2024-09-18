import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Le champs e-mail doit être une adresse e-mail valide.' })
});
