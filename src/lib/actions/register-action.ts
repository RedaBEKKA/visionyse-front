"use server";
import "server-only";
import { registerSchema } from "../schema/register-schema";
import { API_URL } from "../utils/constants";

type RegisterState = {
  error: string | null;
  success?: boolean;
};

type CredentialsData = {
  pseudo: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export async function registerUser(
  prevState: RegisterState,
  credentials: CredentialsData,
): Promise<RegisterState> {
  const validatedFields = registerSchema.safeParse(credentials);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.errors[0]?.message || "Invalid format",
      success: false,
    };
  }

  const { pseudo, fullName, email, password, confirmPassword } =
    validatedFields.data;

  try {
    const result = await fetch(`${API_URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pseudo,
        fullName,
        email,
        password,
        confirmPassword,
      }),
    });

    if (!result.ok) {
      const errorData = await result.json();
      return {
        error: errorData.message || "Failed to register",
        success: false,
      };
    }

    return { error: null, success: true };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred. Please try again.";

    return {
      error: errorMessage,
      success: false,
    };
  }
}
