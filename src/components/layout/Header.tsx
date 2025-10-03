"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [hidden, setHidden] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
      >
        <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-lg font-semibold tracking-tight"
          >
            <motion.span
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SS
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors hover:text-foreground/80",
                  "rounded-md hover:bg-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side - Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden h-9 w-9 rounded-md border border-border bg-background/50 backdrop-blur-sm hover:bg-accent transition-colors flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-40 bg-background md:hidden"
        style={{ top: "4rem" }}
      >
        <nav className="flex flex-col gap-2 p-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={
                mobileMenuOpen
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 20 }
              }
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-lg font-medium hover:bg-accent transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          style={{ top: "4rem" }}
        />
      )}
    </>
  );
}
