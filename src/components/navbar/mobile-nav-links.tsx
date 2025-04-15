"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import type { JSX } from "react";
import { navLinks } from "./navbar";
import type { Session } from "next-auth";
import { LogIn, LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";

type MobileNavLinksProps = {
  closeMenu: () => void;
  isOpen: boolean;
  session: Session | null;
};

export function MobileNavLinks({
  closeMenu,
  isOpen,
  session,
}: MobileNavLinksProps): JSX.Element {
  const pathname = usePathname();

  return (
    <motion.div
      className="md:hidden"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        display: isOpen ? "block" : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-4 py-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link key={link.href} href={link.href}>
              <motion.div
                className={cn(
                  "flex items-center space-x-3 rounded-md px-4 py-2",
                  isActive
                    ? "bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-white"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-[#121212]/50 dark:hover:text-white",
                )}
                whileHover={{ x: 5 }}
                onClick={closeMenu}
              >
                {link.icon}
                <span>{link.label}</span>
              </motion.div>
            </Link>
          );
        })}
        {session?.user ? (
          <div className="mt-2 flex items-center gap-3 px-4 text-gray-600 dark:text-gray-300">
            <User />
            <h2>{session.user.fullName}</h2>
          </div>
        ) : null}
        {session?.user ? (
          <motion.button
            onClick={() => signOut()}
            className="flex w-full cursor-pointer items-center space-x-3 rounded-md px-4 text-red-600 hover:bg-red-50 hover:text-red-500 dark:text-red-500 dark:hover:bg-[#121212]/50 dark:hover:text-red-700"
            whileHover={{ x: 5 }}
          >
            <LogOut className="h-5 w-5" />
            <span className="">Logout</span>
          </motion.button>
        ) : (
          <Link href="/login">
            <motion.div
              className={cn(
                "flex items-center space-x-3 rounded-md px-4 py-2",
                pathname === "/login"
                  ? "bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-white"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-[#121212]/50 dark:hover:text-white",
              )}
              whileHover={{ x: 5 }}
              onClick={closeMenu}
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </motion.div>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
