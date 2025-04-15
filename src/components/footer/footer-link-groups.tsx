import type { JSX } from "react";
import { footerLinks } from "./footer-links";
import Link from "next/link";
import { motion } from "motion/react";
import { itemVariants } from "./animation-variants";

export function FooterLinkGroups(): JSX.Element {
  return (
    <div className="hidden md:col-span-3 md:grid md:grid-cols-4 md:gap-8">
      {footerLinks.map((group) => (
        <motion.div key={group.title} variants={itemVariants}>
          <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
            {group.title}
          </h3>
          <ul className="space-y-2">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
