import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: "Engesoftware Tecnologia",
    role: "QA / Estagiário de Testes de Software",
    period: "07/2026 — Atual",
    description: "Atuação direta com garantia de qualidade (QA) e engenharia de testes. Execução de casos de teste, documentação de bugs, acompanhamento de atividades no Jira/Confluence e utilização da metodologia BDD/Gherkin para cenários de testes manuais e de API (Postman).",
    tech: ["QA", "Jira", "Postman", "BDD/Gherkin", "Testes Manuais"],
    color: "bg-[#10B981]"
  },
  {
    id: 2,
    company: "CASSI",
    role: "Estagiário em Dados e Automação",
    period: "Duração: ~1 ano",
    description: "Imersão em análise de dados corporativos e tecnologia. Foco na criação, organização e análise de indicadores de negócios. Desenvolvimento de automações e relatórios para otimizar processos internos.",
    tech: ["Power BI", "SQL", "Excel", "Power Apps", "Data Analysis"],
    color: "bg-[#8B5CF6]"
  },
  {
    id: 3,
    company: "Prosegur",
    role: "Jovem Aprendiz Administrativo",
    period: "2024",
    description: "Desenvolvimento de base profissional em ambiente corporativo. Responsável por processos administrativos, organização de documentação e suporte às rotinas do setor, estabelecendo fundamentos de organização essenciais para a área de tecnologia.",
    tech: ["Rotina Corporativa", "Processos", "Organização"],
    color: "bg-[#52525B]"
  }
];

export function Experience() {
  return (
    <section id="experience" className="min-h-screen px-8 md:px-24 py-24 flex flex-col justify-center border-t border-[#1A1A1E]">
      
      <span className="font-mono text-[#888888] text-sm tracking-widest uppercase mb-16 block">
        (02) // Experiência
      </span>

      <div className="max-w-4xl border-l border-[#1A1A1E] ml-2 md:ml-4">
        
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12 mb-16 last:mb-0 group"
          >
            
            <div className={`absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full ${exp.color} transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
              <h3 className="font-display text-2xl font-medium text-[#EDEDED]">
                {exp.company}
              </h3>
              <span className="font-mono text-sm text-[#666666]">
                {exp.period}
              </span>
            </div>

            <h4 className="font-sans text-lg text-[#A0A0A0] mb-4">
              {exp.role}
            </h4>
            
            <p className="font-sans text-[#888888] font-light leading-relaxed mb-6">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {exp.tech.map((tag, i) => (
                <span key={i} className="font-mono text-xs text-[#666666] border border-[#1A1A1E] px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}