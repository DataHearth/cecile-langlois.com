import { z } from 'zod';

export const login = z.object({
  email: z.string().email({ message: 'Le champs e-mail doit être une adresse e-mail valide.' })
});

export const activity = {
  add: z.object({
    title: z
      .string({ required_error: "Un titre pour l'activité est obligatoire" })
      .max(256, { message: "Le titre de l'activité doit faire maximum 256 caractères" }),
    quickDescription: z
      .string({ required_error: 'Une description succinte est obligatoire' })
      .max(500, 'La description succinte doit faire maximum 500 caractères'),
    description: z.string({ required_error: 'La description est obligatoire' }),
    price: z.number().gt(0).optional(),
    images: z
      .instanceof(Array<File>)
      .refine((f) => f.length < 1, 'Au moins 1 image doit être utilisée'),
    startDate: z.string({ required_error: 'Une date de début est obligatoire' }).datetime(),
    endDate: z.string({ required_error: 'Une date de fin est obligatoire' }).datetime()
  })
};
