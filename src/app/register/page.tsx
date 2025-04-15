import { auth } from "@/auth";
import { RegisterPage } from "@/components/auth/register-page";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Register | Visionyze",
  description: "Register page",
};

export default async function page(): Promise<JSX.Element> {
  const session = await auth();
  if (session) redirect("/recordings");

  return <RegisterPage />;
}
