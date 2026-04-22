"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../i18n/routing';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const changeLanguage = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setIsLangOpen(false);
    setIsMenuOpen(false);
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
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <Link href="/" className="text-3xl font-black text-accent uppercase tracking-tighter">
          JM
        </Link>

        {/* Desktop Navigation */}
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
        
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 bg-muted rounded-full px-3 md:px-4 py-2 shadow-soft hover:bg-accent hover:text-accent-foreground transition-all group"
            >
              <Globe size={16} className="text-muted-foreground group-hover:text-inherit" />
              <span className="text-sm font-bold uppercase">{locale}</span>
            </button>

            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-[-1]" onClick={() => setIsLangOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute right-0 mt-3 w-32 bg-white dark:bg-slate-900 border border-border rounded-2xl shadow-2xl overflow-hidden z-50"
                >
                  {['en', 'es', 'zh'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`w-full px-5 py-3 text-left text-xs font-bold transition-colors flex items-center justify-between group ${
                        locale === lang 
                          ? 'bg-accent text-accent-foreground' 
                          : 'text-foreground/80 hover:bg-muted dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="uppercase tracking-widest">{lang === 'en' ? 'English' : lang === 'es' ? 'Español' : '中文'}</span>
                      {locale === lang && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-muted text-foreground hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center shadow-soft group"
            aria-label="Toggle Theme"
          >
            {!mounted ? (
              <div className="w-5 h-5" />
            ) : theme === "dark" ? (
              <Sun size={20} className="group-hover:rotate-45 transition-transform" />
            ) : (
              <Moon size={20} className="group-hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all shadow-soft"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden mt-4 bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col p-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-4 text-sm font-bold text-foreground/80 hover:bg-accent hover:text-white rounded-2xl transition-all"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
