import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.") // tradução: nome deve ter pelo menos 2 caracteres
    .max(50, "Name must be at most 50 characters."), // tradução: nome deve ter no máximo 50 caracteres
  email: z.string().email("Invalid email."), // tradução: e-mail inválido
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number."),
});
