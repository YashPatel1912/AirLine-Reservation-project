import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "Email must be at least of 3 character" })
    .max(255, { message: "Email must not be more than 255 character" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 7 character" })
    .max(255, { message: "Password must not be more than 255 character" }),
});

export const signUpSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 character" })
    .max(255, { message: "Name must not be more than 255 character" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 character" })
    .max(10, { message: "Phone must not be more than 10 character" }),
});
