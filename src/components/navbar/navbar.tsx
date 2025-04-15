"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Home, Mic } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils/utils";
import type { JSX } from "react";
import { MobileMenuButton } from "./mobile-menu-button";
import { MobileNavLinks } from "./mobile-nav-links";
import { NavbarLinks } from "./navbar-links";
import type { Session } from "next-auth";

export const navLinks = [
  { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
  {
    href: "/recordings",
    label: "Recordings",
    icon: <Mic className="h-5 w-5" />,
  },
];

export function Navbar({ session }: { session: Session | null }): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 px-4 transition-all duration-300 md:px-6",
        scrolled
          ? "bg-white py-2 shadow-md dark:bg-[#121212]"
          : "bg-white/80 py-4 backdrop-blur-sm dark:bg-[#121212]/80",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Visionyze
          </motion.div>
        </Link>
        <section className="hidden items-center space-x-8 md:flex">
          <NavbarLinks session={session} />
          <ThemeToggle />
        </section>
        <section className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </section>
      </div>
      <MobileNavLinks
        session={session}
        closeMenu={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </motion.nav>
  );
}
