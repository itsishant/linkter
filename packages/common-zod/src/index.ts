import z from "zod";

export const SignupZod = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const SigninZod = z.object({
  email: z.string().email(),
  password: z.string(),
});
