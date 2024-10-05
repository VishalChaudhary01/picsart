import { z } from "zod";

export const signinSchema = z.object({
     email: z.string().email("Email is invalid").min(1, "Email is required").trim(),
     password: z.string().min(1, "Password is required").trim()
});

export const signupSchema = z.object({
     name: z.string().min(1, "Name is required").trim(),
     email: z.string().email("Email is invalid").min(1, "Email is required").trim(),
     password: z.string().min(1, "Password is required").trim()     
});

export type SignupType = z.infer<typeof signupSchema>;
export type SigninType = z.infer<typeof signinSchema>;