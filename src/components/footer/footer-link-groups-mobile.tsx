"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { footerLinks } from "./footer-links";
import { cn } from "@/lib/utils/utils";
import { itemVariants } from "./animation-variants";

type FooterLinkGroupsMobileProps = {
  expandedGroups: Record<string, boolean>;
  toggleGroup: (title: string) => void;
};

export function FooterLinkGroupsMobile({
  toggleGroup,
  expandedGroups,
}: FooterLinkGroupsMobileProps): JSX.Element {
  return (
    <div className="col-span-1 space-y-4 md:hidden">
      {footerLinks.map((group) => (
        <motion.div
          key={group.title}
          variants={itemVariants}
          className="border-b border-gray-200 pb-4 dark:border-gray-800"
        >
          <button
            onClick={() => toggleGroup(group.title)}
            className="flex w-full cursor-pointer items-center justify-between py-2 text-left font-semibold"
          >
            <span>{group.title}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform",
                expandedGroups[group.title] && "rotate-180",
              )}
            />
          </button>
          <motion.ul
            className="mt-2 space-y-2 overflow-hidden"
            initial="collapsed"
            animate={expandedGroups[group.title] ? "open" : "collapsed"}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.ul>
        </motion.div>
      ))}
    </div>
  );
}
