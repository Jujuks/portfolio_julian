"use client";

import { motion } from "framer-motion";
import { Download, Globe, Mail, Phone, MapPin, Printer } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";

export default function CVPage() {
  const t = useTranslations();
  const locale = useLocale();

  const handlePrint = () => {
    window.print();
  };

  const skillCategories = [
    { name: "Frontend", level: 85, icon: "Ps" },
    { name: "UI/UX", level: 80, icon: "Ai" },
    { name: "Backend", level: 75, icon: "Pr" },
    { name: "DevOps", level: 85, icon: "Id" },
    { name: "Data", level: 80, icon: "Lr" },
    { name: "Systems", level: 75, icon: "Ae" },
  ];

  const experienceItems = [
    {
      title: t('Experience.higherEd'),
      date: "2023-Present",
      institution: "UCC",
      desc: t('Experience.higherEdDesc')
    },
    {
      title: t('Experience.techEd'),
      date: "2020-2023",
      institution: "UDENAR",
      desc: t('Experience.techEdDesc')
    },
    {
      title: t('Experience.certifications'),
      date: "2023-Present",
      institution: "Talento Tech",
      desc: t('Experience.certificationsDesc')
    }
  ];

  return (
    <div className="min-h-screen noise-bg text-black font-sans selection:bg-red-500 selection:text-white p-4 sm:p-10 md:p-20 relative overflow-hidden">
      {/* Print/Download Button */}
      <button
        onClick={handlePrint}
        className="no-print fixed top-6 right-6 z-[100] bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all hover:scale-110 flex items-center gap-2 font-bold uppercase tracking-tighter"
      >
        <Printer size={20} />
        <span className="hidden sm:inline">Descargar PDF</span>
      </button>

      <Link href="/" className="no-print fixed top-6 left-6 z-[100] text-sm font-black uppercase tracking-tighter hover:text-red-600 transition-colors">
        ← Volver
      </Link>

      <div className="max-w-[1000px] mx-auto bg-white/50 backdrop-blur-sm border-2 border-black/10 relative z-20 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)] p-10 md:p-16">

        {/* Header Section */}
        <header className="mb-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-[0.5em] mb-2 opacity-50">Resumen / Hoja de Vida</span>
            <h1 className="text-6xl md:text-9xl font-black uppercase leading-none tracking-tighter text-black/90">
              Curriculum
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column (Main Info) */}
          <div className="lg:col-span-7 space-y-16">

            <section className="relative">
              {/* Large Background Initials */}
              <div className="absolute -top-10 -left-10 text-[200px] font-black opacity-[0.03] select-none z-0">
                JM
              </div>

              <div className="relative z-10 flex flex-col items-center md:items-start md:flex-row gap-8">
                <div className="w-48 h-64 bg-slate-200 border-4 border-black shrink-0 relative overflow-hidden contrast-125">
                  <Image
                    src="/images/profile3.jpeg"
                    alt="Julian Mera"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <span className="text-red-600 font-serif text-6xl md:text-8xl -mb-4 -ml-2 drop-shadow-md transform -rotate-3 z-20">
                    Julián
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                    {t('Hero.greeting').replace('Hola soy ', '')}
                  </h2>
                  <p className="text-lg font-bold uppercase tracking-tight opacity-60 mt-2">
                    {t('Hero.subtitle')}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-wider">
                <div className="flex items-center gap-2"><MapPin size={12} className="text-red-600" /> {t('Hero.location')}</div>
                <div className="flex items-center gap-2"><Mail size={12} className="text-red-600" /> julian.mera@example.com</div>
                <div className="flex items-center gap-2"><Phone size={12} className="text-red-600" /> +57 300 000 0000</div>
                <div className="flex items-center gap-2"><Globe size={12} className="text-red-600" /> github.com/Jujuks</div>
              </div>
            </section>

            <section>
              <p className="text-base leading-relaxed text-justify opacity-80 font-medium border-l-4 border-red-600 pl-6 py-2">
                {t('Hero.description')}
              </p>
            </section>

            <section>
              <h3 className="text-3xl font-black uppercase mb-8 border-b-2 border-black/10 pb-4">Exp. Académica</h3>
              <div className="space-y-10">
                {experienceItems.map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-black uppercase tracking-tighter group-hover:text-red-600 transition-colors">{item.title}</h4>
                      <span className="text-xs font-black bg-black text-white px-2 py-1 uppercase">{item.date}</span>
                    </div>
                    <p className="text-sm font-bold uppercase opacity-50 mb-4">{item.institution}</p>
                    <p className="text-sm opacity-70 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Side Info) */}
          <div className="lg:col-span-5 space-y-16">

            <section>
              <h3 className="text-3xl font-black uppercase mb-8 border-b-2 border-black/10 pb-4">Educación</h3>
              <div className="space-y-8">
                {experienceItems.slice(0, 2).map((item, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-red-600">
                    <span className="text-red-600 font-black text-lg block leading-none">{item.date.slice(0, 2)}</span>
                    <span className="text-xs font-black uppercase opacity-40">{item.date.slice(5)}</span>
                    <h4 className="text-sm font-black uppercase tracking-tight mt-2">{item.title}</h4>
                    <p className="text-[10px] uppercase font-bold opacity-50">{item.institution}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-black uppercase mb-10 border-b-2 border-black/10 pb-4">Habilidades</h3>
              <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                {skillCategories.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center text-center relative group">
                    <div className="text-5xl font-black uppercase mb-1 flex items-baseline gap-1 group-hover:text-red-600 transition-colors">
                      {skill.icon}
                      <span className="text-[10px] -rotate-90 origin-left text-red-600 translate-y-2">{skill.level}%</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{skill.name}</span>

                    {/* Visual Meter */}
                    <div className="w-full h-1 bg-black/5 mt-3 overflow-hidden">
                      <div
                        className="h-full bg-red-600 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-black text-white p-8 rounded-tr-[50px]">
              <h3 className="text-2xl font-black uppercase mb-6 text-red-600">Proyectos</h3>
              <div className="space-y-4">
                <p className="text-xs font-bold leading-relaxed opacity-80">
                  Desarrollo de clones de alta complejidad como Mercado Libre y plataformas educativas con Next.js y TypeScript.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Python', 'IoT'].map(tag => (
                    <span key={tag} className="text-[8px] font-black border border-white/20 px-2 py-1 uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer / Signature */}
        <footer className="mt-20 pt-10 border-t-2 border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
          <div className="text-[10px] font-black uppercase tracking-widest">
            Julian Mera / Portafolio 2024
          </div>
          <div className="text-red-600 font-serif text-3xl transform -rotate-3">
            Julián Mera
          </div>
        </footer>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 border-t-2 border-r-2 border-black/5 no-print" />
      <div className="absolute bottom-10 left-10 w-40 h-40 border-b-2 border-l-2 border-black/5 no-print" />
      <div className="fixed inset-0 pointer-events-none border-[20px] border-black/5 z-[100] no-print" />
    </div>
  );
}
