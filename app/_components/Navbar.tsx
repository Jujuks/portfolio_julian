"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-black text-accent uppercase tracking-tighter">
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
      </div>
    </nav>
  );
}
