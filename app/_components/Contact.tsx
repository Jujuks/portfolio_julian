"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Terminal, Link as LinkIcon, Share2, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-[#1E293B]">Contactame</h2>
          <p className="text-muted-foreground">¿Tienes algún proyecto en mente o te gustaría colaborar? ¡No dudes en contactarme</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#7C3AED] rounded-[32px] p-10 text-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-10">Informacion de Contacto</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold opacity-70 uppercase tracking-widest mb-1">Email</p>
                    <p className="font-medium">julianmera33@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold opacity-70 uppercase tracking-widest mb-1">Phone</p>
                    <p className="font-medium">+57 319-219-30-55</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold opacity-70 uppercase tracking-widest mb-1">Location</p>
                    <p className="font-medium">Pasto, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs font-bold opacity-70 uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                  <Terminal size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                  <LinkIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                  <Share2 size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tu Nombre</label>
                  <input 
                    type="text" 
                    placeholder="........." 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tu email</label>
                  <input 
                    type="email" 
                    placeholder="........." 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Proyecto</label>
                <input 
                  type="text" 
                  placeholder="........." 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mensaje</label>
                <textarea 
                  rows={6}
                  placeholder="........." 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="px-8 py-4 bg-[#7C3AED] text-white font-bold rounded-xl flex items-center gap-2 hover:bg-[#6D28D9] transition-all shadow-lg shadow-violet-200"
              >
                <Send size={18} /> Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
