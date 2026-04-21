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
    <section id="home" className="pt-40 pb-20 min-h-screen flex flex-col justify-center relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

      {/* 2. Profile Section */}
      <motion.div
        id="about"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
      >
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              Welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold mb-4 text-foreground tracking-tighter leading-none">
              {t('greeting')}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground/60">{t('subtitle')}</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted-foreground">
            <span className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm font-medium">
              📍 {t('location')}
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed max-w-xl text-justify text-lg md:text-xl">
            {t('description')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Link href={`/${locale}/cv`} className="px-10 py-5 bg-accent text-accent-foreground font-bold rounded-2xl flex items-center gap-2 hover:bg-accent/90 transition-all shadow-2xl shadow-accent/20 hover:-translate-y-1">
              <Download size={20} /> {t('downloadCV')}
            </Link>
            <a href="#contact" className="px-10 py-5 border-2 border-accent text-accent font-bold rounded-2xl hover:bg-accent/10 transition-all hover:-translate-y-1">
              {t('contact')}
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4 pt-6">
            <a href="https://github.com/Jujuks" className="w-14 h-14 bg-foreground text-background rounded-2xl flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all shadow-xl">
              <Terminal size={28} />
            </a>
            <a href="https://www.linkedin.com/feed/" className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-xl">
              <LinkIcon size={28} />
            </a>
            <a href="#contact" className="w-14 h-14 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all shadow-xl">
              <Mail size={28} />
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
                src="/images/profile.jpeg"
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
