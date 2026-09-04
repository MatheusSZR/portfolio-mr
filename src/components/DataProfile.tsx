import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ecosystems = [
  {
    id: "DEV",
    title: "ENGINEERING",
    accent: "text-[#3B82F6]",
    bgAccent: "bg-[#3B82F6]",
    borderAccent: "border-[#3B82F6]",
    philosophy: "O código deve ser tão intencional quanto o design visual. Arquiteturas escaláveis e front-ends de alta performance construídos para suportar operações reais.",
    stack: ["React", "TypeScript", "Python", "Java", "Kotlin", "Tailwind CSS", "Git"],
    appliedIn: ["TeDeum", "B&M Cookies", "Serralheria"]
  },
  {
    id: "QA",
    title: "QUALITY ASSURANCE",
    accent: "text-[#10B981]",
    bgAccent: "bg-[#10B981]",
    borderAccent: "border-[#10B981]",
    philosophy: "Testar não é procurar falhas, é blindar a resiliência do sistema antes do deploy. Criação de cenários preditivos, automação e validação estrita de APIs.",
    stack: ["Postman", "BDD / Gherkin", "Jira", "Confluence", "Casos de Teste"],
    appliedIn: ["Ecossistemas Corporativos", "Validação de Backend"]
  },
  {
    id: "DATA",
    title: "DATA INTELLIGENCE",
    accent: "text-[#8B5CF6]",
    bgAccent: "bg-[#8B5CF6]",
    borderAccent: "border-[#8B5CF6]",
    philosophy: "Dados brutos não tomam decisões. O foco é modelar, extrair e visualizar informações complexas para transformar relatórios estáticos em narrativas acionáveis.",
    stack: ["SQL", "Power BI", "DAX", "Power Query", "Excel Avançado"],
    appliedIn: ["Automação de Indicadores", "Curadoria TeDeum"]
  }
];

export function DataProfile() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="data" className="min-h-screen px-8 md:px-24 py-32 border-t border-[#1A1A1E] bg-[#050507] relative overflow-hidden">
      
      {/* Background Decorativo Baseado na Tab Ativa */}
      <div className={`absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] -z-10 opacity-5 transition-colors duration-1000 ${ecosystems[activeTab].bgAccent}`} />

      <span className="font-mono text-[#666666] text-xs tracking-widest uppercase mb-16 flex items-center gap-4">
        <span className="w-8 h-px bg-[#333333]"></span>
        Ecosystem & Tech Stack Map
      </span>

      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-16 xl:gap-8 items-center">
        
        {/* Lado Esquerdo: Menu Tipográfico Gigante */}
        <div className="w-full xl:w-1/2 flex flex-col gap-2">
          {ecosystems.map((eco, index) => {
            const isActive = activeTab === index;
            return (
              <div 
                key={eco.id}
                onMouseEnter={() => setActiveTab(index)}
                onClick={() => setActiveTab(index)}
                className="cursor-pointer group relative"
              >
                {/* Linha indicadora lateral */}
                <div className={`absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-px transition-all duration-300 ${isActive ? eco.bgAccent : 'bg-transparent'}`} />
                
                <h2 
                  className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter transition-all duration-500 
                  ${isActive 
                    ? `text-[#EDEDED]` 
                    : `text-transparent opacity-30 style-stroke hover:opacity-70`
                  }`}
                  style={!isActive ? { WebkitTextStroke: '1px #666666' } : {}}
                >
                  {eco.title}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Lado Direito: O Painel de Inspeção da Stack */}
        <div className="w-full xl:w-1/2">
          <div className="bg-[#0A0A0C] border border-[#1A1A1E] p-8 md:p-12 relative min-h-[420px] flex flex-col">
            
            {/* Corner Accent */}
            <div className={`absolute top-0 right-0 w-16 h-1 transition-colors duration-500 ${ecosystems[activeTab].bgAccent}`} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-2 h-2 ${ecosystems[activeTab].bgAccent} animate-pulse`} />
                  <span className={`font-mono text-xs tracking-widest ${ecosystems[activeTab].accent}`}>
                    // {ecosystems[activeTab].id}_DOMAIN
                  </span>
                </div>

                <p className="font-sans text-[#888888] font-light leading-relaxed text-lg mb-10 max-w-lg">
                  "{ecosystems[activeTab].philosophy}"
                </p>

                <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#1A1A1E] pt-8">
                  
                  {/* Ferramentas / Tecnologias */}
                  <div>
                    <span className="font-mono text-[10px] text-[#666666] tracking-widest block mb-4 uppercase">
                      Core_Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ecosystems[activeTab].stack.map(tech => (
                        <span key={tech} className="font-mono text-xs text-[#EDEDED] border border-[#333333] px-3 py-1.5 bg-[#111113]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Aplicação Prática */}
                  <div>
                    <span className="font-mono text-[10px] text-[#666666] tracking-widest block mb-4 uppercase">
                      Applied_In
                    </span>
                    <ul className="flex flex-col gap-2">
                      {ecosystems[activeTab].appliedIn.map(project => (
                        <li key={project} className="font-sans text-sm text-[#A0A0A0] flex items-center gap-2">
                          <span className={`w-1 h-1 rounded-full ${ecosystems[activeTab].bgAccent}`} />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}