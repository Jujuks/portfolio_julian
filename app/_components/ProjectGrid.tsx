"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Sistema de Semaforo Inteligente",
    description: "Una muestra de mis trabajos recientes y proyectos personales que demuestran mi experiencia técnica y mis habilidades para la resolución de problemas.",
    tags: ["Python", "IoT", "Data Analysis", "Real-time Systems", "Urban Planning"],
    icon: "🚦",
    headerColor: "bg-green-50",
  },
  {
    title: "Marketplace para estudiantes",
    description: "Una plataforma para que los estudiantes compren y vendan libros, materiales y servicios dentro de la comunidad universitaria.",
    tags: ["ArchiMate", "AI/ML", "System Architecture", "Next.js", "TypeScript"],
    icon: "🤖",
    headerColor: "bg-purple-50",
  },
  {
    title: "Calculadora de variables",
    description: "Herramienta avanzada para el procesamiento de datos estadísticos y visualización de variables complejas.",
    tags: ["R", "Statistics", "Data Visualization", "ggplot2", "Data Science"],
    icon: "📊",
    headerColor: "bg-yellow-50",
  },
  {
    title: "Monitor de procesos",
    description: "Visualizador en tiempo real de los procesos del sistema y el uso de recursos, optimizando el rendimiento.",
    tags: ["Python", "Linear Algebra", "Differential Equations", "NumPy", "Matplotlib"],
    icon: "🔢",
    headerColor: "bg-blue-50",
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 text-[#1E293B]">Projectos Destacados</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Una muestra de mis trabajos recientes y proyectos personales que demuestran mi experiencia técnica y mis habilidades para la resolución de problemas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
          >
            {/* Colored Header */}
            <div className={`h-48 md:h-56 ${project.headerColor} flex items-center justify-center text-6xl`}>
              {project.icon}
            </div>
            
            <div className="p-10">
              <h3 className="text-2xl font-bold mb-4 text-[#1E293B]">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-bold text-violet-500 bg-violet-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 py-3.5 bg-[#1E293B] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors">
                  <Code size={18} /> GitHub
                </button>
                <button className="flex-1 py-3.5 bg-[#7C3AED] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#6D28D9] transition-colors">
                  <ExternalLink size={18} /> Live Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
