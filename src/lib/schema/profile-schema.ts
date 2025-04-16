import { z } from "zod";

export const profileSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    pseudo: z.string().min(2, "Username must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    oldPassword: z.string().optional(),
    newPassword: z
      .string()
      .optional()
      .refine(
        (val) => !val || val.length >= 6,
        "Password must be at least 6 characters",
      ),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (
        data.newPassword &&
        data.newPassword.length > 0 &&
        !data.oldPassword
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Old password is required when setting a new password",
      path: ["oldPassword"],
    },
  )
  .refine(
    (data) => {
      if (data.newPassword && data.newPassword.length > 0) {
        return data.newPassword === data.confirmPassword;
      }
      return true;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    },
  );

export type ProfileFormValues = z.infer<typeof profileSchema>;
