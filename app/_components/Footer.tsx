"use client";

import { motion } from "framer-motion";
import { Terminal, Link as LinkIcon, Mail, Heart, ArrowUp } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const navT = useTranslations('Navbar');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-black tracking-tighter text-foreground">
              JM<span className="text-accent">.</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {t('madeWith')}
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://github.com/Jujuks" 
                target="_blank" 
                className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/feed/" 
                target="_blank" 
                className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">{t('links')}</h3>
            <ul className="space-y-4">
              {['home', 'experience', 'projects', 'contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link}`} 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {navT(link)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Back to top */}
          <div className="flex flex-col items-start md:items-end">
             <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all mb-8"
            >
            <ArrowUp size={24} />
          </motion.button>
        </div>
      </div>

      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          {currentYear} © {t('rights')}
        </p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          {t('madeWith')} <Heart size={12} className="text-red-500 fill-red-500" />
        </div>
      </div>
    </div>
  </footer>
  );
}
