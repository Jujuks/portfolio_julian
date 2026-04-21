import { Mail, Link, ExternalLink, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Hablamos?</h2>
        <p className="text-muted-foreground max-w-xl mb-12 text-lg">
          Actualmente estoy buscando prácticas profesionales o proyectos freelance. 
          Si tienes una idea o simplemente quieres saludar, mi buzón está abierto.
        </p>
        
        <a 
          href="mailto:julian@example.com" 
          className="px-10 py-5 bg-accent text-accent-foreground font-bold rounded-2xl hover:scale-105 transition-transform mb-16 shadow-lg shadow-accent/20"
        >
          Enviar Mensaje
        </a>

        <div className="flex gap-8 mb-16">
          {[
            { icon: ExternalLink, href: "#" },
            { icon: Link, href: "#" },
            { icon: Mail, href: "#" },
            { icon: Camera, href: "#" },
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              className="p-3 glass rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Julián. Hecho con Next.js y mucho café.
        </p>
      </div>
    </footer>
  );
}
