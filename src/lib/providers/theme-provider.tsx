"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { JSX } from "react";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
