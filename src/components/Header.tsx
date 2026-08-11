"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    children: [
      { name: "Our Story", href: "/our-story" },
      { name: "Meet the Team", href: "/meet-the-team" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "All Services", href: "/services" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Pelvic Health", href: "/services/pelvic-health" },
      { name: "Personal Training & Running", href: "/services/personal-training-running" },
      { name: "Recovery & Red Light", href: "/services/recovery-red-light-therapy" },
    ],
  },
  { name: "Why Self-Pay", href: "/why-self-pay" },
  { name: "Our Process", href: "/our-process" },
  { name: "Mobile & Telehealth", href: "/mobile-and-telehealth" },
  { name: "Testimonials", href: "/testimonials" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-secondary/10 py-3"
          : "bg-cream py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-8 h-8 text-secondary transition-transform duration-300 group-hover:rotate-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18M12 3C9.5 7.5 5 10 5 12c0 3.866 3.134 7 7 7s7-3.134 7-7c0-2-4.5-4.5-7-9z"
              />
            </svg>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-primary leading-none">
                PROSPER
              </span>
              <span className="font-sans text-[10px] md:text-xs tracking-[0.15em] text-secondary font-medium">
                PT & WELLNESS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-secondary ${
                      pathname.startsWith(item.href || "") && item.href !== "/"
                        ? "text-secondary"
                        : "text-primary"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`font-sans text-sm font-medium transition-colors hover:text-secondary ${
                      pathname === item.href ? "text-secondary font-semibold" : "text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-primary/5 py-2 z-50 border border-cream"
                      >
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-cream hover:text-secondary ${
                              pathname === subItem.href ? "text-secondary bg-cream/50" : "text-primary"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent text-white font-sans text-sm font-semibold shadow-sm hover:bg-accent/90 hover:shadow transition-all duration-300 hover:scale-[1.02]"
            >
              Start Here
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-primary hover:bg-secondary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-cream border-b border-secondary/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-primary/5 last:border-0 py-2">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        }
                        className="flex items-center justify-between w-full text-left font-sans text-base font-semibold text-primary py-1"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`mt-2 pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.name ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block font-sans text-sm font-medium py-1.5 transition-colors ${
                              pathname === subItem.href ? "text-secondary font-semibold" : "text-primary/80"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={`block font-sans text-base font-semibold py-1 transition-colors ${
                        pathname === item.href ? "text-secondary" : "text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-accent text-white font-sans text-base font-semibold shadow-sm hover:bg-accent/90 transition-colors"
                >
                  Start Here
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
