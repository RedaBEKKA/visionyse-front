"use server";
import "server-only";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { loginSchema } from "../schema/login-schema";

type LoginState = {
  error: string | null;
  success?: boolean;
};

type CredentialsData = {
  email: string;
  password: string;
};

export async function loginUser(
  prevState: LoginState,
  credentials: CredentialsData,
): Promise<LoginState> {
  const validatedFields = loginSchema.safeParse(credentials);

  if (!validatedFields.success) {
    return {
      error: "Invalid email or password format",
      success: false,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return {
        error: "Invalid email or password",
        success: false,
      };
    }

    return { error: null, success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password", success: false };
        default:
          return {
            error: "Something went wrong. Please try again.",
            success: false,
          };
      }
    }

    return {
      error: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }
}
