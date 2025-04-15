import type { JSX } from "react";
import { ThemeProvider } from "./theme-provider";
import { Navbar } from "@/components/navbar/navbar";
import NextTopLoader from "nextjs-toploader";
import { Footer } from "@/components/footer/footer";
import { LenisProvider } from "./lenis-provider";
import { auth } from "@/auth";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";

export async function Providers({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await auth();

  return (
    <ThemeProvider>
      <SessionProvider>
        <NextTopLoader />
        <LenisProvider />
        <Navbar session={session} />
        <Toaster position="top-right" richColors closeButton />
        <main className="mx-auto max-w-7xl px-4 pt-24">{children}</main>
        <Footer />
      </SessionProvider>
    </ThemeProvider>
  );
}
