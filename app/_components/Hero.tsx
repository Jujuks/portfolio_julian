"use client";

import { motion } from "framer-motion";
import { Download, Mail, Terminal, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";

export default function Hero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="home" className="pt-28 pb-12 min-h-screen flex flex-col justify-center relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

      {/* 2. Profile Section */}
      <motion.div
        id="about"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-widest mb-3">
              {t('welcome')}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-foreground tracking-tighter leading-tight">
              {t('greeting')}
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-foreground/60">{t('subtitle')}</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted-foreground">
            <span className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full text-xs font-medium">
              📍 {t('location')}
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed max-w-lg text-justify text-sm md:text-base opacity-80">
            {t('description')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <Link href={`/${locale}/cv`} className="px-6 py-3.5 bg-accent text-accent-foreground font-bold rounded-xl flex items-center gap-2 hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:-translate-y-1 text-sm">
              <Download size={18} /> {t('downloadCV')}
            </Link>
            <a href="#contact" className="px-6 py-3.5 border-2 border-accent text-accent font-bold rounded-xl hover:bg-accent/10 transition-all hover:-translate-y-1 text-sm">
              {t('contact')}
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-3 pt-4">
            <a href="https://github.com/Jujuks" className="w-12 h-12 bg-foreground text-background rounded-2xl flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/feed/" className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] rounded-[60px] overflow-hidden border-8 border-background shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-10"
            >
              <Image
                src="/images/profile3.jpeg"
                alt="Portrait"
                fill
                className="object-cover hover:scale-105 transition-all duration-1000"
              />
            </motion.div>
            {/* Background Shape */}
            <div className="absolute -bottom-8 -right-8 w-full h-full border-4 border-accent rounded-[60px] opacity-20 -z-0" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
