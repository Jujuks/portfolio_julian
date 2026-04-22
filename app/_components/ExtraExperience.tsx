"use client";

import { motion } from "framer-motion";
import { 
  MonitorSmartphone, Zap, Accessibility, Search, 
  Boxes, Share2, Radio, Smartphone, 
  Server, Code2, BrainCircuit, FileText 
} from "lucide-react";
import { useTranslations } from 'next-intl';

const extraSkills = [
  { name: "Responsive Design", icon: MonitorSmartphone },
  { name: "Performance Optimization", icon: Zap },
  { name: "Accessibility (a11y)", icon: Accessibility },
  { name: "SEO Best Practices", icon: Search },
  { name: "Microservices", icon: Boxes },
  { name: "GraphQL", icon: Share2 },
  { name: "WebSocket", icon: Radio },
  { name: "Progressive Web Apps", icon: Smartphone },
  { name: "Server-Side Rendering", icon: Server },
  { name: "API Design", icon: Code2 },
  { name: "IA", icon: BrainCircuit },
  { name: "Technical Documentation", icon: FileText }
];

export default function ExtraExperience() {
  const t = useTranslations('ExtraExperience');

  return (
    <section id="extra" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto bg-card rounded-[32px] border border-border p-8 md:p-12 shadow-sm">
        <h2 className="text-3xl font-extrabold text-center mb-16 text-foreground">{t('title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {extraSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              className="bg-muted/30 border border-border p-5 rounded-2xl flex items-center gap-4 text-sm font-bold text-muted-foreground hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all cursor-default group"
            >
              <div className="p-2 bg-background rounded-xl text-muted-foreground group-hover:text-accent group-hover:scale-110 transition-all shadow-sm">
                <skill.icon size={20} />
              </div>
              <span className="flex-1">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
