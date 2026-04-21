"use client";

import { motion } from "framer-motion";
import { Download, Mail, Terminal, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16">
      {/* 1. Tech Banner Container */}
      <div className="w-full h-[300px] mb-12 overflow-hidden bg-slate-100 border-b border-border relative">
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
          <h1 className="text-5xl font-extrabold mb-2 text-[#1E293B]">Hola soy Julian Mera</h1>
          <h2 className="text-xl font-bold text-[#1E293B] mb-6">Estudiante Ingenieria de Software</h2>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <span className="text-sm">📍 Pasto, Colombia</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Soy un desarrollador Frontend, enfocado en construir interfaces de usuario limpias y escalables. 
            Mi objetivo es cerrar la brecha entre el diseño visual en Figma y la implementación técnica en código real.
            Cuando no estoy programando en TypeScript o ajustando clases en Tailwind, disfruto investigar nuevas tendencias de UI/UX para asegurar que mis proyectos siempre se destaquen.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-6 py-3 bg-[#7C3AED] text-white font-bold rounded-lg flex items-center gap-2 hover:bg-[#6D28D9] transition-all shadow-lg shadow-violet-200">
              <Download size={18} /> Descargar CV
            </button>
            <button className="px-6 py-3 border-2 border-[#7C3AED] text-[#7C3AED] font-bold rounded-lg hover:bg-violet-50 transition-all">
              Ponte en Contacto
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-[#1E293B] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Terminal size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-[#4F46E5] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <LinkIcon size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-[#7C3AED] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
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
