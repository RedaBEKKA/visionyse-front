"use client";

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import type { JSX } from "react";

type MobileMenuButtonProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export function MobileMenuButton({
  isOpen,
  toggleMenu,
}: MobileMenuButtonProps): JSX.Element {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMenu}
      className="cursor-pointer rounded-md p-2 text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-white"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </motion.button>
  );
}
