"use client";

import { motion } from "framer-motion";
import { Download, Mail, Terminal, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <section id="home" className="pt-20 pb-8 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      {/* 1. Tech Banner Container */}
      <div className="w-full h-[180px] mb-8 overflow-hidden bg-muted border-b border-border relative">
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
          alt="Tech Banner"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
      </div>

      {/* 2. Profile Section */}
      <div id="about" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold mb-2 text-foreground">{t('greeting')}</h1>
          <h2 className="text-xl font-bold text-foreground mb-6">{t('subtitle')}</h2>

          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <span className="text-sm">📍 {t('location')}</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg text-justify">
            {t('description')}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg flex items-center gap-2 hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
              <Download size={18} /> {t('downloadCV')}
            </button>
            <button className="px-6 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all">
              {t('contact')}
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://github.com/Jujuks" className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Terminal size={20} />
            </a>
            <a href="https://www.linkedin.com/feed/" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <LinkIcon size={20} />
            </a>
            <a href="#contact" className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden border-8 border-background shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
              alt="Portrait"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
