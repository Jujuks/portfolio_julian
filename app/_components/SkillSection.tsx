"use client";

import { motion } from "framer-motion";
import { Laptop, Palette, Database, Cloud, BarChart, Settings } from "lucide-react";

const skillCategories = [
  { 
    title: "Frontend", 
    icon: Laptop, 
    skills: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 }
    ]
  },
  { 
    title: "Styling & UI/UX", 
    icon: Palette, 
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "CSS3/SASS", level: 85 },
      { name: "UI/UX Design", level: 80 }
    ]
  },
  { 
    title: "Backend & Languages", 
    icon: Database, 
    skills: [
      { name: "Python", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 75 }
    ]
  },
  { 
    title: "Cloud & DevOps", 
    icon: Cloud, 
    skills: [
      { name: "AWS Lambda", level: 75 },
      { name: "AWS IAM", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "Git/GitHub", level: 90 }
    ]
  },
  { 
    title: "Data & Analysis", 
    icon: BarChart, 
    skills: [
      { name: "Statistical Analysis", level: 85 },
      { name: "Data Visualization", level: 80 },
      { name: "Linear Algebra", level: 85 }
    ]
  },
  { 
    title: "Tools & Architecture", 
    icon: Settings, 
    skills: [
      { name: "ArchiMate", level: 80 },
      { name: "System Architecture", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 }
    ]
  },
];

export default function SkillSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-[#1E293B]">Tecnologías y Habilidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            Tecnologías y herramientas que utilizo para dar vida a las ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-violet-50 text-violet-600 rounded-lg">
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B]">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-700">{skill.name}</span>
                      <span className="text-[10px] font-bold text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-[#7C3AED] rounded-full"
                      />
                    </div>
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
