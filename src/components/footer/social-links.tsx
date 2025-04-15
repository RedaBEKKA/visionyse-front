"use client";
import { motion } from "motion/react";
import type { JSX } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function SocialLinks(): JSX.Element {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#facebook", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#twitter", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#instagram", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#linkedin", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "#github", label: "GitHub" },
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row dark:border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <div className="mb-4 flex space-x-4 md:mb-0">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            aria-label={link.label}
            className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p className="text-center text-sm text-gray-600 md:text-right dark:text-gray-400">
        © {currentYear} Visionyze. All rights reserved.
      </p>
    </motion.div>
  );
}
