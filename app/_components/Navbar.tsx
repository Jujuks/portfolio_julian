"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../i18n/routing';
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  const navItems = [
    { name: t('home'), href: "#home" },
    { name: t('experience'), href: "#experience" },
    { name: t('skills'), href: "#skills" },
    { name: t('projects'), href: "#projects" },
    { name: t('testimonials'), href: "#testimonials" },
    { name: t('extra'), href: "#extra" },
    { name: t('contact'), href: "#contact" },
  ];

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
        
        <div className="lg:absolute lg:right-6 flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative flex items-center bg-muted rounded-full px-3 py-1.5 shadow-soft">
            <Globe size={16} className="text-muted-foreground mr-2" />
            <select
              value={locale}
              onChange={changeLanguage}
              className="bg-transparent text-sm font-bold text-foreground outline-none cursor-pointer appearance-none pr-4"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="zh">ZH</option>
            </select>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-muted text-foreground hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center shadow-soft"
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
      </div>
    </nav>
  );
}
