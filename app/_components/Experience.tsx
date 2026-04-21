"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('Experience');

  const experienceItems = [
    {
      title: t('higherEd'),
      date: "2023-Presente",
      institution: "Universidad Cooperativa de Colombia (UCC)",
      details: [
        t('higherEdDegree'),
        t('higherEdDesc')
      ]
    },
    {
      title: t('techEd'),
      date: "2020-2023",
      institution: "Universidad de Nariño (UDENAR)",
      details: [
        t('techEdDegree'),
        t('techEdDesc')
      ]
    },
    {
      title: t('highSchool'),
      date: "2007-2020",
      institution: "Escuela Normal Superior de Pasto (ENSUP)",
      details: [
        t('highSchoolDegree'),
        t('highSchoolDesc')
      ]
    },
    {
      title: t('certifications'),
      date: "2023-Presente",
      institution: "Talento Tech",
      details: [
        t('certificationsDegree'),
        t('certificationsDesc')
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-foreground">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>

        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-10 bg-accent/20 text-accent rounded-lg flex items-center justify-center">
            <GraduationCap size={20} />
          </div>
          <h3 className="text-xl font-bold text-foreground">{t('academicTitle')}</h3>
        </div>

        <div className="relative border-l-2 border-violet-200 ml-5 space-y-12 pb-12">
          {experienceItems.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* Dot */}
              <div className="absolute top-0 -left-[11px] w-5 h-5 bg-violet-500 rounded-full border-4 border-background shadow-sm" />
              
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-violet-600">{item.title}</h4>
                  <span className="text-sm font-medium text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-card-foreground font-bold mb-4">{item.institution}</p>
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (idx * 0.1) + 0.3 }}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/30 flex-shrink-0" />
                       {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
