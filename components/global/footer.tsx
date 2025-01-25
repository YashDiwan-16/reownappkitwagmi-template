"use client";

import { motion } from "framer-motion";
import { Youtube, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Twitter, href: "https://twitter.com" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background border-t"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* App Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary"
          >
            AppName
          </motion.div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Copyright Notice */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} AppName. All rights reserved.
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
