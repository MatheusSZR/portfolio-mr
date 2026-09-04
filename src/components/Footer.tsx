import { useState } from 'react';

export function Footer() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactData = {
    email: "matheusdesouzarodrigues34@gmail.com",
    github: "https://github.com/MatheusSZR",
    linkedin: "https://www.linkedin.com/in/matheus-rodrigues-601930231"
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <footer id="contact" className="px-8 md:px-24 py-24 border-t border-[#1A1A1E] bg-[#0A0A0C]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        <div>
          <span className="font-mono text-[#888888] text-sm tracking-widest uppercase mb-4 block">
            (06) // Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#EDEDED] mb-4">
            Vamos construir algo juntos?
          </h2>
          <p className="font-sans text-[#888888] max-w-md font-light">
            Estou sempre aberto a novos desafios em desenvolvimento, garantia de qualidade (QA) e análise de dados. Sinta-se à vontade para entrar em contato.
          </p>
        </div>

        {/* Links de Redes e Botões de Cópia */}
        <div className="flex flex-col gap-4 font-mono text-sm w-full md:w-auto">
          
          {/* Email */}
          <div className="flex items-center justify-between md:justify-start gap-4 border-b border-[#1A1A1E] pb-3">
            <a 
              href={`mailto:${contactData.email}`} 
              className="text-[#EDEDED] hover:text-[#10B981] transition-colors truncate max-w-[220px] md:max-w-none"
            >
              _email: {contactData.email}
            </a>
            <button 
              onClick={() => handleCopy(contactData.email, 'email')}
              className="text-xs px-2.5 py-1 rounded bg-[#1A1A1E] text-[#888888] hover:text-[#EDEDED] hover:bg-[#2A2A2E] transition-all cursor-pointer"
            >
              {copiedField === 'email' ? '✓ Copiado!' : 'Copiar'}
            </button>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-between md:justify-start gap-4 border-b border-[#1A1A1E] pb-3">
            <a 
              href={contactData.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#EDEDED] hover:text-[#3B82F6] transition-colors truncate max-w-[220px] md:max-w-none"
            >
              _github: /MatheusSZR
            </a>
            <button 
              onClick={() => handleCopy(contactData.github, 'github')}
              className="text-xs px-2.5 py-1 rounded bg-[#1A1A1E] text-[#888888] hover:text-[#EDEDED] hover:bg-[#2A2A2E] transition-all cursor-pointer"
            >
              {copiedField === 'github' ? '✓ Copiado!' : 'Copiar'}
            </button>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-between md:justify-start gap-4 border-b border-[#1A1A1E] pb-3">
            <a 
              href={contactData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#EDEDED] hover:text-[#8B5CF6] transition-colors truncate max-w-[220px] md:max-w-none"
            >
              _linkedin: matheus-rodrigues
            </a>
            <button 
              onClick={() => handleCopy(contactData.linkedin, 'linkedin')}
              className="text-xs px-2.5 py-1 rounded bg-[#1A1A1E] text-[#888888] hover:text-[#EDEDED] hover:bg-[#2A2A2E] transition-all cursor-pointer"
            >
              {copiedField === 'linkedin' ? '✓ Copiado!' : 'Copiar'}
            </button>
          </div>

        </div>

      </div>

      {/* Copyright e Assinatura */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[#1A1A1E] flex flex-col md:flex-row justify-between items-center text-xs font-mono text-[#555555]">
        <span>© 2026 Matheus Rodrigues. Todos os direitos reservados.</span>
        <span>Desenvolvido com React, Tailwind CSS & Framer Motion</span>
      </div>
    </footer>
  );
}