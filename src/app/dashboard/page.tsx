import { auth } from "@/auth";
import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { redirect } from "next/navigation";
import type { JSX } from "react";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default async function page(): Promise<JSX.Element> {
  const session = await auth();
  if (!session) redirect("/login");

  return <DashboardPage session={session} />;
}
