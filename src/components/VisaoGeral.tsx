import { motion } from 'framer-motion';

interface Props {
  activeLens: 'PADRÃO' | 'QA' | 'DEV' | 'DADOS';
}

export function VisaoGeral({ activeLens }: Props) {
  
  // Função para controlar a opacidade e o destaque baseado na lente ativa
  const getLensStyle = (targetLens: 'QA' | 'DEV' | 'DADOS', colorHex: string) => {
    if (activeLens === 'PADRÃO') return { opacity: 1, borderColor: '#1A1A1E', color: '#888888' };
    if (activeLens === targetLens) return { opacity: 1, borderColor: colorHex, color: colorHex, backgroundColor: `${colorHex}10` };
    return { opacity: 0.2, filter: 'grayscale(100%)' };
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-full max-w-5xl"
    >
      <div className="border-b border-[#1A1A1E] pb-6 mb-8">
        <h1 className="font-display text-3xl font-medium text-[#EDEDED] mb-2 tracking-tight">
          Registro de Operador // Matheus Rodrigues
        </h1>
        <p className="font-mono text-xs text-[#666666]">
          LAST_UPDATE: {new Date().toISOString().split('T')[0]} | STATUS: ESTÁVEL
        </p>
      </div>

      {/* GRID DE INFORMAÇÃO DENSA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLUNA 1: Formação e Infraestrutura (Espaço menor) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div>
            <span className="font-mono text-[10px] text-[#555555] block mb-3 uppercase tracking-widest">
              Infraestrutura_Acadêmica
            </span>
            <div className="border border-[#1A1A1E] p-4 bg-[#0A0A0C]">
              <h3 className="font-sans font-medium text-[#EDEDED] text-sm mb-1">Universidade Católica de Brasília (UCB)</h3>
              <p className="font-mono text-xs text-[#888888] mb-3">Bacharelado em Ciência da Computação</p>
              <div className="flex justify-between items-center border-t border-[#1A1A1E] pt-3 mt-3">
                <span className="font-mono text-[10px] text-[#666666]">PROGRESSO</span>
                <span className="font-mono text-xs text-[#EDEDED]">6º Semestre</span>
              </div>
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] text-[#555555] block mb-3 uppercase tracking-widest">
              Core_Stack_Registrada
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['Python', 'Java', 'Kotlin', 'React', 'SQL', 'Git'].map(tech => (
                <span key={tech} style={getLensStyle('DEV', '#3B82F6')} className="font-mono text-[10px] border px-2 py-1 transition-all duration-500">
                  {tech}
                </span>
              ))}
              {['Power BI', 'Power Query', 'DAX', 'Excel'].map(tech => (
                <span key={tech} style={getLensStyle('DADOS', '#8B5CF6')} className="font-mono text-[10px] border px-2 py-1 transition-all duration-500">
                  {tech}
                </span>
              ))}
              {['Postman', 'Jira', 'BDD/Gherkin', 'Casos de Teste'].map(tech => (
                <span key={tech} style={getLensStyle('QA', '#10B981')} className="font-mono text-[10px] border px-2 py-1 transition-all duration-500">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* COLUNA 2: Log de Execução Profissional (Histórico) */}
        <div className="lg:col-span-8">
          <span className="font-mono text-[10px] text-[#555555] block mb-3 uppercase tracking-widest">
            Log_de_Execução (Experiência)
          </span>
          
          <div className="flex flex-col border-l border-[#1A1A1E] ml-2">
            
            {/* ENGESOFTWARE */}
            <div 
              className="relative pl-6 pb-8 transition-all duration-500"
              style={getLensStyle('QA', '#10B981')}
            >
              <div className="absolute w-2 h-2 rounded-full bg-[#1A1A1E] -left-[4.5px] top-1" />
              <div className="flex flex-wrap justify-between items-baseline mb-2 gap-4">
                <h3 className="font-sans font-medium text-[#EDEDED] text-base">Engesoftware Tecnologia S.A.</h3>
                <span className="font-mono text-[10px]">2026 - PRESENTE</span>
              </div>
              <h4 className="font-mono text-xs mb-3 font-bold">ESTAGIÁRIO DE QUALIDADE DE SOFTWARE (QA)</h4>
              <p className="font-sans text-sm font-light leading-relaxed mb-4">
                Foco estrito em garantia de qualidade corporativa. Execução de testes manuais e de API, modelagem de cenários utilizando metodologia BDD/Gherkin e rastreamento de defeitos de software. 
              </p>
              <div className="font-mono text-[10px] flex gap-3 opacity-70">
                <span>[ API_TESTING ]</span>
                <span>[ BUG_TRACKING ]</span>
                <span>[ BACKEND_VALIDATION ]</span>
              </div>
            </div>

            {/* CASSI */}
            <div 
              className="relative pl-6 pb-8 transition-all duration-500"
              style={getLensStyle('DADOS', '#8B5CF6')}
            >
              <div className="absolute w-2 h-2 rounded-full bg-[#1A1A1E] -left-[4.5px] top-1" />
              <div className="flex flex-wrap justify-between items-baseline mb-2 gap-4">
                <h3 className="font-sans font-medium text-[#EDEDED] text-base">CASSI</h3>
                <span className="font-mono text-[10px]">2025</span>
              </div>
              <h4 className="font-mono text-xs mb-3 font-bold">ESTAGIÁRIO DE DADOS E AUTOMAÇÃO</h4>
              <p className="font-sans text-sm font-light leading-relaxed mb-4">
                Transição da gestão de processos para a inteligência analítica. Desenvolvimento de relatórios gerenciais, dashboards e automação de extração de dados institucionais utilizando linguagem de consulta e ferramentas de BI.
              </p>
              <div className="font-mono text-[10px] flex gap-3 opacity-70">
                <span>[ DATA_MODELING ]</span>
                <span>[ ETL ]</span>
                <span>[ DASHBOARDS ]</span>
              </div>
            </div>

            {/* PROSEGUR */}
            <div className="relative pl-6 transition-all duration-500 opacity-60 hover:opacity-100">
              <div className="absolute w-2 h-2 rounded-full bg-[#1A1A1E] -left-[4.5px] top-1" />
              <div className="flex flex-wrap justify-between items-baseline mb-2 gap-4">
                <h3 className="font-sans font-medium text-[#EDEDED] text-base">Prosegur</h3>
                <span className="font-mono text-[10px]">2024</span>
              </div>
              <h4 className="font-mono text-xs mb-3 font-bold">JOVEM APRENDIZ ADMINISTRATIVO</h4>
              <p className="font-sans text-sm font-light leading-relaxed">
                Fundação profissional baseada na organização de rotinas administrativas e estruturação de documentação, preparando o terreno lógico para a futura migração técnica.
              </p>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}