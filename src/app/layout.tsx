import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visionyze",
  description:
    "Visionyze builds custom software solutions tailored to client needs. As part of our services, we collect and analyze sales meetings through audio and video recordings, providing automatic transcriptions and AI-powered summaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#ffffff] text-black antialiased transition-colors duration-200 dark:bg-[#121212] dark:text-gray-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
