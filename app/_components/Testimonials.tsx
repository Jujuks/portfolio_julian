"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    initials: "DR",
    name: "Diego Rodriguez",
    role: "Fullstack Developer",
    content: "Excelente compañero de equipo, siempre dispuesto a ayudar y con una gran capacidad para resolver problemas técnicos complejos.",
    rating: 5,
  },
  {
    initials: "CM",
    name: "Carolina Martinez",
    role: "UX Designer",
    content: "Su habilidad para transformar diseños estáticos en interfaces dinámicas y precisas es impresionante. Muy detallista.",
    rating: 5,
  },
  {
    initials: "SH",
    name: "Santiago Hernandez",
    role: "Project Manager",
    content: "Julian es un profesional comprometido con la calidad y los tiempos de entrega. Gran aporte para cualquier proyecto.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-[#1E293B]">Testimonios</h2>
          <p className="text-muted-foreground">Lo que dicen mis compañeros y clientes sobre trabajar conmigo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-8 text-violet-100 group-hover:text-violet-200 transition-colors" size={60} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-violet-100 text-[#7C3AED] rounded-full flex items-center justify-center font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B]">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-slate-500 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
