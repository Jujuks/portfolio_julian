"use client";

import { motion } from "framer-motion";
import { 
  Laptop, Palette, Database, Cloud, BarChart, Settings, 
  Code2, Cpu, Layers, Layout, Box, Activity, 
  Server, Hash, Zap, Globe, Terminal, 
  LineChart, PieChart, Calculator, Wrench 
} from "lucide-react";
import { useTranslations } from 'next-intl';

const skillCategories = [
  { 
    title: "Frontend", 
    icon: Laptop, 
    skills: [
      { name: "Next.js", icon: Code2 },
      { name: "React", icon: Cpu },
      { name: "TypeScript", icon: Layers }
    ]
  },
  { 
    title: "Styling & UI", 
    icon: Palette, 
    skills: [
      { name: "Tailwind CSS", icon: Layout },
      { name: "CSS3/SASS", icon: Box },
      { name: "UI/UX Design", icon: Activity }
    ]
  },
  { 
    title: "Backend", 
    icon: Database, 
    skills: [
      { name: "Python", icon: Hash },
      { name: "Node.js", icon: Server },
      { name: "REST APIs", icon: Database }
    ]
  },
  { 
    title: "Cloud & DevOps", 
    icon: Cloud, 
    skills: [
      { name: "AWS Lambda", icon: Zap },
      { name: "Vercel", icon: Globe },
      { name: "Git/GitHub", icon: Terminal }
    ]
  },
  { 
    title: "Data & Analysis", 
    icon: BarChart, 
    skills: [
      { name: "Statistical Analysis", icon: LineChart },
      { name: "Data Visualization", icon: PieChart },
      { name: "Linear Algebra", icon: Calculator }
    ]
  },
  { 
    title: "Tools", 
    icon: Settings, 
    skills: [
      { name: "ArchiMate", icon: Wrench },
      { name: "System Architecture", icon: Settings },
      { name: "VS Code", icon: Code2 }
    ]
  },
];

export default function SkillSection() {
  const t = useTranslations('SkillSection');

  return (
    <section id="skills" className="py-24 px-6 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-foreground">{t('title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 bg-card rounded-[32px] border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-accent/10 text-accent rounded-lg">
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 rounded-2xl bg-muted/30 hover:bg-accent/5 transition-colors group">
                    <div className="p-2 bg-background rounded-xl text-accent group-hover:scale-110 transition-transform">
                      <skill.icon size={18} />
                    </div>
                    <span className="text-sm font-bold text-card-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
