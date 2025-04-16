"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import type { JSX } from "react";
import { navLinks } from "./navbar";
import type { Session } from "next-auth";
import { LogIn, Settings, User } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";

export function NavbarLinks({
  session,
}: {
  session: Session | null;
}): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link key={link.href} href={link.href}>
            <motion.div
              className={cn(
                "relative flex items-center space-x-1",
                isActive
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
              <span>{link.label}</span>

              {isActive && (
                <motion.div
                  className="absolute right-0 bottom-0 left-0 -mb-2 h-0.5 bg-gray-900 dark:bg-white"
                  layoutId="navbar-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </motion.div>
          </Link>
        );
      })}
      {session?.user ? (
        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
          <User />
          <h2>{session.user.fullName}</h2>
        </div>
      ) : null}
      {session?.user ? (
        <motion.button
          onClick={() => router.push("/dashboard")}
          className="relative flex cursor-pointer items-center space-x-1 text-gray-600 duration-200 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Settings className="h-5 w-5" />
          <span>Dashboard</span>
        </motion.button>
      ) : (
        <Link href="/login">
          <motion.div
            className={cn(
              "relative flex items-center space-x-1",
              pathname === "/login"
                ? "text-gray-900 dark:text-white"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogIn className="h-5 w-5" />
            <span>Login</span>

            {pathname === "/login" && (
              <motion.div
                className="absolute right-0 bottom-0 left-0 -mb-2 h-0.5 bg-gray-900 dark:bg-white"
                layoutId="navbar-indicator"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </motion.div>
        </Link>
      )}
    </>
  );
}
