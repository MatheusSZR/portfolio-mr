import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig, useScroll, useSpring } from 'framer-motion';
import avatarImg from './assets/avatar.png';
import tedeumImg from './assets/tedeum.png';
import bmCookiesImg from './assets/bm-cookies.png';
import serralheriaImg from './assets/serralheria.png';

interface Project {
  id: string;
  title: string;
  cat: string;
  catColor: string;
  desc: string;
  img: string;
  repo: string;
  live: string;
  stack: string[];
}

interface SkillNode {
  id: string;
  name: string;
  category: 'QA' | 'DEV' | 'DATA';
  categoryLabel: string;
  metric: string;
  desc: string;
}

const projetos: Project[] = [
  {
    id: '01',
    title: 'TeDeum',
    cat: 'PLATAFORMA DE CURADORIA',
    catColor: 'text-[#8B5CF6]',
    desc: 'Agregador inteligente de preços que filtra marketplaces para expor ofertas reais com links diretos.',
    img: tedeumImg,
    repo: 'https://github.com/MatheusSZR/tedeum',
    live: 'https://tedeum-jade.vercel.app/',
    stack: ['React', 'Data Curation', 'Vercel']
  },
  {
    id: '02',
    title: 'B&M Cookies',
    cat: 'ECOMMERCE EDITORIAL',
    catColor: 'text-[#3B82F6]',
    desc: 'E-commerce focado em experiência de marca e conversão visual refinada.',
    img: bmCookiesImg,
    repo: 'https://github.com/MatheusSZR/bm-cookies',
    live: 'https://matheusszr.github.io/bm-cookies/',
    stack: ['Frontend', 'UI/UX', 'Branding']
  },
  {
    id: '03',
    title: 'Serralheria Rodrigues',
    cat: 'SOLUÇÃO B2C',
    catColor: 'text-[#10B981]',
    desc: 'Plataforma front-end responsiva criada para tracionar serviços físicos em aço.',
    img: serralheriaImg,
    repo: 'https://github.com/MatheusSZR/SerralheriaFrontEnd',
    live: 'https://matheusszr.github.io/SerralheriaFrontEnd/',
    stack: ['Responsive', 'UI Design', 'Commercial']
  }
];

const skillsData: SkillNode[] = [
  { id: 's1', name: 'Automação & Casos de Teste', category: 'QA', categoryLabel: 'ENGENHARIA_QA', metric: 'BDD / Gherkin', desc: 'Modelagem rigorosa de cenários, testes manuais e validação comportamental de sistemas corporativos.' },
  { id: 's2', name: 'Gestão de Defeitos & APIs', category: 'QA', categoryLabel: 'ENGENHARIA_QA', metric: 'Postman / Jira', desc: 'Inspeção de endpoints, rastreamento analítico de bugs e garantia de integridade de back-end.' },
  { id: 's3', name: 'Arquitetura Front-End', category: 'DEV', categoryLabel: 'DESENVOLVIMENTO', metric: 'React / TS / Tailwind', desc: 'Construção de interfaces componentizadas de alta performance, foco em UI/UX e tipagem estrita.' },
  { id: 's4', name: 'Desenvolvimento Mobile & Core', category: 'DEV', categoryLabel: 'DESENVOLVIMENTO', metric: 'Kotlin / Java / Python', desc: 'Criação de código-fonte estruturado, algoritmos e aplicativos mobile focados em ecossistema Android.' },
  { id: 's5', name: 'Modelagem & Business Intelligence', category: 'DATA', categoryLabel: 'DADOS & BI', metric: 'Power BI / DAX', desc: 'Construção de dashboards gerenciais, extração e tratamento de dados institucionais complexos.' },
  { id: 's6', name: 'Consultas e Processamento ETL', category: 'DATA', categoryLabel: 'DADOS & BI', metric: 'SQL / Power Query', desc: 'Extração, transformação e carga de dados relacionais para suporte à tomada de decisão.' }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-[#050507] text-[#EDEDED] font-sans selection:bg-[#333333] relative">
      
      {/* Barra de progresso sutil no topo */}
      <motion.div className="fixed top-0 left-0 right-0 h-px bg-[#EDEDED] origin-left z-[60]" style={{ scaleX }} />
      <div className="noise-bg" />

      {/* NAVBAR PADRÃO (Cursor Normal) */}
      <header className="fixed top-0 left-0 w-full min-h-20 bg-[#050507]/95 md:bg-[#050507]/80 backdrop-blur-md border-b border-[#1A1A1E] z-50 flex items-center justify-between px-5 sm:px-8 md:px-24">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#333333] bg-[#0A0A0C] flex items-center justify-center font-mono text-xs font-bold">
            M<span className="text-[#10B981]">/</span>R
          </div>
          <span className="font-mono text-xs text-[#888888] hidden sm:inline">MATHEUS RODRIGUES // QA & DEV</span>
        </div>
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-6 font-mono text-xs text-[#888888]">
          <a href="#experiencia" className="hover:text-[#EDEDED] focus-visible:text-[#EDEDED] transition-colors">[_trajetória]</a>
          <a href="#dados" className="hover:text-[#EDEDED] focus-visible:text-[#EDEDED] transition-colors">[_capacidades]</a>
          <a href="#projetos" className="hover:text-[#EDEDED] focus-visible:text-[#EDEDED] transition-colors">[_projetos]</a>
          <a href="https://github.com/MatheusSZR" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline focus-visible:underline">[GITHUB ↗]</a>
        </nav>
        <button type="button" className="md:hidden border border-[#333338] px-3 py-2 font-mono text-xs text-[#EDEDED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#10B981]" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setIsMenuOpen(open => !open)}>
          {isMenuOpen ? '[ FECHAR ]' : '[ MENU ]'}
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav id="mobile-navigation" aria-label="Navegação móvel" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }} className="absolute top-full left-0 right-0 flex flex-col gap-5 border-b border-[#1A1A1E] bg-[#08080A] px-6 py-6 font-mono text-sm text-[#A0A0A0] md:hidden">
              <a href="#experiencia" onClick={() => setIsMenuOpen(false)} className="hover:text-white focus-visible:text-white">[_trajetória]</a>
              <a href="#dados" onClick={() => setIsMenuOpen(false)} className="hover:text-white focus-visible:text-white">[_capacidades]</a>
              <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="hover:text-white focus-visible:text-white">[_projetos]</a>
              <a href="https://github.com/MatheusSZR" target="_blank" rel="noopener noreferrer" className="text-[#10B981]">[GITHUB ↗]</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
      {/* HERO CINEMATOGRÁFICO */}
      <section className="min-h-screen pt-40 pb-20 px-8 md:px-24 max-w-7xl mx-auto flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-4 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              BRASÍLIA, BRASIL // UCB_6º_SEM
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-6xl font-bold text-[#EDEDED] tracking-tight mb-6 leading-[1.1]"
            >
              Garantia de Qualidade, Engenharia & Dados.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base md:text-lg text-[#888888] font-light leading-relaxed mb-8"
            >
              Estudante de Ciência da Computação na Universidade Católica de Brasília e estagiário de QA na Engesoftware. Unindo a rigorosa validação de sistemas corporativos à engenharia de software e análise analítica.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-2 font-mono text-xs"
            >
              <span className="border border-[#222226] bg-[#0A0A0C] px-3 py-1.5 text-[#A0A0A0]">QA & Testes (BDD/Gherkin)</span>
              <span className="border border-[#222226] bg-[#0A0A0C] px-3 py-1.5 text-[#A0A0A0]">React & Python</span>
              <span className="border border-[#222226] bg-[#0A0A0C] px-3 py-1.5 text-[#A0A0A0]">Power BI & SQL</span>
            </motion.div>
          </div>

          {/* Avatar com Revelação Cinemática (Reverse Scale Masking) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 md:w-72 aspect-[3/4] border border-[#222226] bg-[#0A0A0C] p-3 shadow-2xl overflow-hidden group">
              <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-[#10B981] z-10" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-[#10B981] z-10" />
              <motion.img 
                src={avatarImg} 
                alt="Matheus Rodrigues" 
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover filter grayscale"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-[#050507]/90 backdrop-blur-sm border border-[#222226] p-2 flex justify-between font-mono text-[10px] z-10">
                <span className="text-[#EDEDED]">ID: M-RODRIGUES</span>
                <span className="text-[#10B981] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  OPERANDO
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SEÇÃO EXPERIÊNCIA COM SCROLL REVEAL SUAVE */}
      <section id="experiencia" className="py-24 px-8 md:px-24 border-t border-[#1A1A1E] bg-[#070709]">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-xs text-[#666666] tracking-widest uppercase block mb-12">
            // TRAJETÓRIA PROFISSIONAL
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: '2026 - PRESENTE', color: 'text-[#10B981]', company: 'Engesoftware', role: 'Estagiário de QA', desc: 'Testes manuais e de API, criação de cenários BDD/Gherkin, rastreamento de bugs e validação corporativa.' },
              { year: '2025', color: 'text-[#8B5CF6]', company: 'CASSI', role: 'Estagiário de Dados e Processos', desc: 'Modelagem de dados, automação de indicadores institucionais e dashboards gerenciais em Power BI.' },
              { year: '2024', color: 'text-[#666666]', company: 'Prosegur', role: 'Jovem Aprendiz Administrativo', desc: 'Organização de rotinas corporativas e gestão estruturada de fluxos documentais.' }
            ].map((item, index) => (
              <motion.div 
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="border border-[#1A1A1E] bg-[#0A0A0C] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className={`font-mono text-[10px] block mb-2 ${item.color}`}>{item.year}</span>
                  <h3 className="font-display text-lg font-bold text-[#EDEDED] mb-1">{item.company}</h3>
                  <h4 className="font-mono text-xs text-[#888888] mb-4">{item.role}</h4>
                  <p className="font-sans text-sm text-[#888888] font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: SISTEMA DE DADOS INTERATIVO COM F.L.I.P. ANIMATION */}
      <section id="dados" className="py-24 px-8 md:px-24 border-t border-[#1A1A1E] bg-[#050507]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-mono text-xs text-[#666666] tracking-widest uppercase block mb-2">
                // MATRIZ DE COMPETÊNCIAS & DADOS
              </span>
              <h2 className="font-display text-3xl font-bold text-[#EDEDED]">
                Arquitetura de Habilidades
              </h2>
            </div>
            
            <DataFilterTabs />
          </div>
        </div>
      </section>

      {/* SEÇÃO PROJETOS COM HOVER MULTI-ESTADO COORDENADO */}
      <section id="projetos" className="py-24 px-8 md:px-24 border-t border-[#1A1A1E]">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-xs text-[#666666] tracking-widest uppercase block mb-12">
            // PRODUTOS & APLICAÇÕES
          </span>

          <div className="flex flex-col gap-8">
            {projetos.map((proj) => (
              <ProjectCard key={proj.id} proj={proj} />
            ))}
          </div>
        </div>
      </section>

      </main>

      {/* RODAPÉ */}
      <footer className="py-12 px-8 md:px-24 border-t border-[#1A1A1E] bg-[#0A0A0C] flex flex-col sm:flex-row justify-between items-center font-mono text-xs text-[#666666] gap-4">
        <span>MATHEUS RODRIGUES // 2026</span>
        <span>BRASÍLIA, DF — BRASIL</span>
      </footer>

    </div>
    </MotionConfig>
  );
}

// ----------------------------------------------------
// COMPONENTE: SISTEMA DE DADOS COM F.L.I.P. ANIMATION
// ----------------------------------------------------
function DataFilterTabs() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'QA' | 'DEV' | 'DATA'>('ALL');

  const filteredSkills = activeFilter === 'ALL' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeFilter);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
        {[
          { id: 'ALL', label: 'TODOS_SISTEMAS' },
          { id: 'QA', label: 'ENGENHARIA_QA' },
          { id: 'DEV', label: 'DESENVOLVIMENTO' },
          { id: 'DATA', label: 'DADOS_&_BI' }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            aria-pressed={activeFilter === tab.id}
            onClick={() => setActiveFilter(tab.id as 'ALL' | 'QA' | 'DEV' | 'DATA')}
            className={`px-4 py-2 border transition-all relative ${
              activeFilter === tab.id 
                ? 'border-[#EDEDED] text-[#EDEDED] bg-[#111115]' 
                : 'border-[#1A1A1E] text-[#666666] hover:text-[#888888]'
            }`}
          >
            {tab.label}
            {activeFilter === tab.id && (
              <motion.div 
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#10B981]"
              />
            )}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key={skill.id}
              className="border border-[#1A1A1E] bg-[#0A0A0C] p-6 flex flex-col justify-between hover:border-[#333333] transition-colors"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[9px] text-[#10B981] border border-[#10B981]/20 bg-[#10B981]/5 px-2 py-0.5">
                    {skill.categoryLabel}
                  </span>
                  <span className="font-mono text-[10px] text-[#555555]">
                    {skill.metric}
                  </span>
                </div>
                <h3 className="font-sans font-medium text-[#EDEDED] text-base mb-2">
                  {skill.name}
                </h3>
                <p className="font-sans text-xs text-[#888888] font-light leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// ----------------------------------------------------
// COMPONENTE: PROJETO COM HOVER MULTI-ESTADO ORQUESTRADO
// ----------------------------------------------------
function ProjectCard({ proj }: { proj: Project }) {
  return (
    <motion.div 
      className="group border border-[#1A1A1E] bg-[#0A0A0C] grid grid-cols-1 md:grid-cols-12 overflow-hidden relative transition-colors duration-300 hover:border-[#333333] hover:bg-[#0C0C0F]"
    >
      <div className="md:col-span-5 h-[240px] md:h-auto overflow-hidden bg-[#111113] border-r border-[#1A1A1E] relative">
        <motion.img 
          src={proj.img} 
          alt={proj.title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top opacity-80 filter grayscale-0 transition-all duration-500 group-hover:scale-105 md:grayscale md:group-hover:grayscale-0"
        />
        <motion.div 
          className="absolute inset-0 bg-[#050507] opacity-15 pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
        />
      </div>

      <div className="md:col-span-7 p-8 flex flex-col justify-between relative">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className={`font-mono text-[10px] block ${proj.catColor}`}>{proj.cat}</span>
            <span className="font-mono text-[10px] text-[#444444]">{proj.id}</span>
          </div>

          <motion.h3 
            className="font-display text-2xl font-bold text-[#EDEDED] mb-3 transition-transform duration-300 group-hover:translate-x-1"
          >
            {proj.title}
          </motion.h3>

          <p className="font-sans text-sm text-[#888888] font-light leading-relaxed mb-6">
            {proj.desc}
          </p>

          <motion.div 
            className="flex flex-wrap gap-1.5 mb-6"
          >
            {proj.stack.map(tech => (
              <span key={tech} className="font-mono text-[9px] border border-[#222226] bg-[#050507] px-2 py-0.5 text-[#999999]">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#1A1A1E] font-mono text-xs">
          <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#EDEDED] transition-colors">[ Repositório ]</a>
          
          <motion.a 
            href={proj.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#10B981] hover:underline focus-visible:underline transition-all flex items-center gap-1"
          >
            <span>[ Acessar Sistema ]</span>
            <span>↗</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}