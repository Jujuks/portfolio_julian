"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const extraSkills = [
  "Responsive Design", "Performance Optimization", "Accessibility (a11y)",
  "SEO Best Practices", "Microservices", "GraphQL",
  "WebSocket", "Progressive Web Apps", "Server-Side Rendering",
  "API Design", "Code Review", "Technical Documentation"
];

export default function ExtraExperience() {
  const t = useTranslations('ExtraExperience');

  return (
    <section id="extra" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto bg-card rounded-[32px] border border-border p-12 shadow-sm">
        <h2 className="text-3xl font-extrabold text-center mb-16 text-foreground">{t('title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {extraSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              className="bg-muted/50 border border-border p-6 rounded-2xl text-center text-sm font-bold text-muted-foreground hover:border-accent hover:text-accent transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
