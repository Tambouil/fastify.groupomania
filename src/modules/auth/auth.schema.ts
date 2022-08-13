import { z } from "zod";

const CreateUserSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email(),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }),
  username: z.string(),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
