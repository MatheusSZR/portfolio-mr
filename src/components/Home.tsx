import { motion } from 'framer-motion';
import { LogoMR } from './LogoMR';

export function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-between px-8 md:px-24 pt-32 pb-16 relative overflow-hidden">
      
      {/* Topo com o novo selo M/R e Telemetria (Agora com espaço para a Navbar) */}
      <div className="flex justify-between items-center w-full z-10">
        <LogoMR />
        <div className="hidden md:flex items-center gap-6 font-mono text-xs text-[#666666]">
          <span>LOC: BRASÍLIA, BR</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            SYSTEM_ONLINE
          </span>
        </div>
      </div>

      {/* Centro: Título Monumental */}
      <div className="my-auto max-w-5xl z-10 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs md:text-sm text-[#10B981] tracking-[0.3em] uppercase mb-6 block">
            // Engineering, QA & Data Architecture
          </span>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold text-[#EDEDED] tracking-tight leading-[0.95] mb-8">
            MATHEUS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDEDED] via-[#888888] to-[#333333]">
              RODRIGUES
            </span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-[#888888] max-w-2xl font-light leading-relaxed">
            Desenvolvendo ecossistemas digitais de alta precisão técnica. Especialista na intersecção entre <strong className="text-[#EDEDED] font-normal">garantia de qualidade, engenharia de software e inteligência de dados</strong>.
          </p>
        </motion.div>
      </div>

      {/* Rodapé da Dobra Inicial */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-10 border-t border-[#1A1A1E] pt-8">
        <div className="font-mono text-xs text-[#666666]">
          SCROLL TO EXPLORE <span className="text-[#10B981] animate-bounce inline-block ml-1">↓</span>
        </div>
        <div className="font-mono text-xs text-[#666666]">
          STACK: REACT // TS // PYTHON // POSTMAN // POWER BI
        </div>
      </div>

    </section>
  );
}