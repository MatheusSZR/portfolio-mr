import { motion } from 'framer-motion';
import avatarImg from '../assets/avatar.png';

export function Profile() {
  return (
    <section id="profile" className="min-h-screen px-8 md:px-24 py-32 border-t border-[#1A1A1E] relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#10B981]/5 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 opacity-50" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Lado Esquerdo: Avatar Reduzido (Formato Badge) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-48 md:w-[260px] shrink-0 relative group mt-2"
        >
          <div className="absolute -inset-3 border border-[#1A1A1E] bg-[#0A0A0C]/50 -z-10 transition-colors duration-500 group-hover:border-[#333333]" />
          
          <div className="absolute -top-3 -left-3 w-3 h-3 border-t-2 border-l-2 border-[#10B981]" />
          <div className="absolute -bottom-3 -right-3 w-3 h-3 border-b-2 border-r-2 border-[#10B981]" />
          
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#111113]">
            <img 
              src={avatarImg} 
              alt="Matheus Rodrigues"
              className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-30" />
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[9px] text-[#10B981] bg-[#050507]/90 backdrop-blur-sm p-1.5 border border-[#10B981]/20">
            <span>ID:M-ROD</span>
            <span>ACTIVE</span>
          </div>
        </motion.div>

        {/* Lado Direito: Área expandida para o texto */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col"
        >
          <span className="font-mono text-[#666666] text-xs tracking-widest uppercase mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-[#333333]"></span>
            System Operator Bio
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-[#EDEDED] mb-8 leading-tight">
            A precisão técnica encontra o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#3B82F6] italic">design de arquitetura</span>.
          </h2>

          <div className="space-y-6 font-sans text-lg text-[#888888] font-light leading-relaxed max-w-3xl">
            <p>
              Operando a partir de Brasília, curso o sexto semestre de Ciência da Computação na Universidade Católica de Brasília (UCB). Minha trajetória é intencionalmente desenhada para entender o ciclo de vida do software por inteiro.
            </p>
            <p>
              Comecei otimizando processos administrativos, migrei para a modelagem e análise profunda de dados, e hoje aplico essa visão sistêmica e analítica na garantia de qualidade corporativa (QA) e engenharia de software. 
            </p>
            <p>
              Não me contento apenas com código que "funciona". Procuro <strong className="text-[#EDEDED] font-normal">interfaces que impactam, dados que conversam e sistemas que não falham</strong>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}