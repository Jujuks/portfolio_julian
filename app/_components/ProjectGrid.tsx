"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ProjectGrid() {
  const t = useTranslations('ProjectGrid');
  const projectsData = t.raw('projects');

  const projectUI = [
    {
      tags: ["React", "CSS", "E-commerce", "JavaScript", "Responsive"],
      image: "/images/projects/mercadolibre.png",
      headerColor: "bg-yellow-50",
    },
    {
      tags: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Marketplace"],
      image: "/images/projects/unishop.png",
      headerColor: "bg-purple-50",
    },
    {
      tags: ["React", "Charts.js", "Statistics", "Mathematics", "UI/UX"],
      image: "/images/projects/calculator.png",
      headerColor: "bg-green-50",
    },
    {
      tags: ["GitHub Actions", "Docker", "DevOps", "Node.js", "CI/CD"],
      image: "/images/projects/ci_cd.png",
      headerColor: "bg-blue-50",
    },
  ];

  const projects = projectsData.map((project: any, index: number) => ({
    ...project,
    ...projectUI[index]
  }));

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 text-foreground">{t('title')}</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project: any, index: number) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-card rounded-[32px] overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Image Header */}
            <div className={`relative h-48 md:h-64 overflow-hidden ${project.headerColor}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
            </div>
            
            <div className="p-10">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: string, tagIdx: number) => (
                  <motion.span 
                    key={tag} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (tagIdx * 0.05) + 0.3 }}
                    className="text-[11px] font-bold text-violet-500 bg-accent/10 px-3 py-1.5 rounded-full uppercase tracking-wider hover:bg-accent hover:text-white transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-foreground text-background font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors"
                >
                  <Code size={18} /> {t('github')}
                </a>
                <a 
                  href={project.liveDemoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-accent text-accent-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
                >
                  <ExternalLink size={18} /> {t('demo')}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
