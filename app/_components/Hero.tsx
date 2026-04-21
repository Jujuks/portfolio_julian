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
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="home" className="pt-20 pb-8 min-h-[calc(100vh-80px)] flex flex-col justify-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

      {/* 1. Tech Banner Container */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-[180px] mb-8 overflow-hidden bg-muted border-b border-border relative"
      >
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
          alt="Tech Banner"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
      </motion.div>

      {/* 2. Profile Section */}
      <motion.div
        id="about"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
      >
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              Welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-2 text-foreground tracking-tighter">
              {t('greeting')}
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-foreground/60">{t('subtitle')}</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted-foreground">
            <span className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-xs font-medium">
              📍 {t('location')}
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed max-w-lg text-justify text-lg">
            {t('description')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Link href={`/${locale}/cv`} className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl flex items-center gap-2 hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:-translate-y-1">
              <Download size={18} /> {t('downloadCV')}
            </Link>
            <a href="#contact" className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-xl hover:bg-accent/10 transition-all hover:-translate-y-1">
              {t('contact')}
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            <a href="https://github.com/Jujuks" className="w-12 h-12 bg-foreground text-background rounded-2xl flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all shadow-lg">
              <Terminal size={24} />
            </a>
            <a href="https://www.linkedin.com/feed/" className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-lg">
              <LinkIcon size={24} />
            </a>
            <a href="#contact" className="w-12 h-12 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all shadow-lg">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-[40px] overflow-hidden border-8 border-background shadow-2xl z-10"
            >
              <Image
                src="/images/profile.jpeg"
                alt="Portrait"
                fill
                className="object-cover hover:scale-105 transition-all duration-700"
              />
            </motion.div>
            {/* Background Shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-accent rounded-[40px] -z-0" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
