import { auth } from "@/auth";
import { LoginPage } from "@/components/auth/login-page";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Login | Visionyze",
  description: "Login page",
};

export default async function page(): Promise<JSX.Element> {
  const session = await auth();
  if (session) redirect("/recordings");

  return <LoginPage />;
}
