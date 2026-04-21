"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Acerca de Mi", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "Tecnologías y Habilidades", href: "#skills" },
  { name: "Experiencia Adicional", href: "#extra" },
  { name: "Contactame", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        <Link href="/" className="lg:absolute lg:left-6 text-3xl font-black text-accent uppercase tracking-tighter">
          JM
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] font-bold text-foreground/80 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="lg:absolute lg:right-6 p-2 rounded-full bg-muted text-foreground hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center shadow-soft"
          aria-label="Toggle Theme"
        >
          {!mounted ? (
            <div className="w-5 h-5" />
          ) : theme === "dark" ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>
      </div>
    </nav>
  );
}
