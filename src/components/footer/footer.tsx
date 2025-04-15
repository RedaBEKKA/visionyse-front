"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import type { JSX } from "react";
import { SocialLinks } from "./social-links";
import { FooterLinkGroupsMobile } from "./footer-link-groups-mobile";
import { FooterLinkGroups } from "./footer-link-groups";
import { containerVariants, itemVariants } from "./animation-variants";

export function Footer(): JSX.Element {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {},
  );

  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const contactInfo = [
    { icon: <Mail size={16} />, text: "contact@visionyze.com" },
    { icon: <MapPin size={16} />, text: "612 SIDI AHMED, bejaia, Algeria" },
    { icon: <Phone size={16} />, text: "+213 666666666" },
  ];

  return (
    <footer className="bg-[#ffffff] pt-12 pb-6 text-black transition-all duration-200 dark:bg-[#121212] dark:text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        <motion.div
          className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <Link href="/" className="mb-4 inline-flex items-center">
              <span className="text-xl font-bold">Visionyze</span>
            </Link>
            <p className="mb-6 max-w-md text-gray-600 dark:text-gray-400">
              Empowering your digital journey with innovative solutions and
              exceptional experiences.
            </p>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-400"
                >
                  <span className="mr-2">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <FooterLinkGroups />
          <FooterLinkGroupsMobile
            expandedGroups={expandedGroups}
            toggleGroup={toggleGroup}
          />
        </motion.div>
        <SocialLinks />
      </div>
    </footer>
  );
}
