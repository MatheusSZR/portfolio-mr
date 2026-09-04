import { motion } from 'framer-motion';
import bmCookiesImg from '../assets/bm-cookies.png';
import serralheriaImg from '../assets/serralheria.png';
import tedeumImg from '../assets/tedeum.png';

type Path = 'tedeum' | 'bm-cookies' | 'serralheria';
type Lens = 'PADRÃO' | 'QA' | 'DEV' | 'DADOS';

interface Props {
  projetoId: Path;
  activeLens: Lens;
}

// Banco de dados interno dos projetos
const projetos = {
  'tedeum': {
    nome: 'TeDeum',
    categoria: 'PLATAFORMA_DE_CURADORIA',
    status: 'PRODUÇÃO',
    imagem: tedeumImg,
    problema: 'A fragmentação de ofertas na internet cria ruído e dificulta a descoberta do menor preço real entre grandes marketplaces (Amazon, Shopee, Mercado Livre).',
    solucao: 'Desenvolvimento de uma plataforma agregadora de alta performance que filtra, organiza e expõe dados de precificação com links diretos, priorizando velocidade de busca.',
    stack: ['React', 'Vercel', 'Data Curation', 'Git', 'UX/UI'],
    links: { github: 'https://github.com/MatheusSZR/tedeum', live: 'https://tedeum-jade.vercel.app/' },
    diagnosticos: {
      QA: 'Foco na validação de integridade de links externos e testes de front-end para garantir que a renderização do catálogo não quebre sob alto volume de imagens.',
      DEV: 'Arquitetura baseada em componentes reutilizáveis, gerenciamento de estado otimizado para respostas rápidas e deploy contínuo via Vercel.',
      DADOS: 'Modelagem de curadoria: extração, limpeza e normalização de metadados de precificação oriundos de fontes distintas para padronização na interface.'
    }
  },
  'bm-cookies': {
    nome: 'B&M Cookies',
    categoria: 'ECOMMERCE_EDITORIAL',
    status: 'PRODUÇÃO',
    imagem: bmCookiesImg,
    problema: 'Marcas artesanais premium frequentemente perdem valor percebido ao utilizarem templates de e-commerce genéricos e engessados.',
    solucao: 'Engenharia de uma interface customizada onde a tecnologia serve à experiência de marca, com UI/UX voltada para o desejo visual e fluxo de conversão direto.',
    stack: ['Web Development', 'UI/UX', 'Branding Digital', 'Frontend'],
    links: { github: 'https://github.com/MatheusSZR/bm-cookies', live: 'https://matheusszr.github.io/bm-cookies/' },
    diagnosticos: {
      QA: 'Testes rigorosos de fluxo de usuário (User Flow), garantindo que a jornada desde a vitrine até a simulação de checkout ocorra sem atritos ou links quebrados.',
      DEV: 'Desenvolvimento front-end focado em fidelidade de design (Pixel Perfect), animações fluidas e responsividade absoluta em dispositivos móveis.',
      DADOS: 'Estruturação de interface preparada para tagueamento e rastreamento de eventos de conversão (Click-tracking no catálogo de produtos).'
    }
  },
  'serralheria': {
    nome: 'Serralheria Rodrigues',
    categoria: 'SISTEMA_B2C',
    status: 'PRODUÇÃO',
    imagem: serralheriaImg,
    problema: 'Negócios tradicionais locais enfrentam barreiras de comunicação digital com clientes, dependendo exclusivamente de orçamentos via telefone ou WhatsApp sem catálogo prévio.',
    solucao: 'Construção de uma ponte digital brutalista, clara e responsiva, automatizando a apresentação de serviços de aço e facilitando a solicitação de orçamentos.',
    stack: ['Design Responsivo', 'Frontend', 'Comunicação Comercial'],
    links: { github: 'https://github.com/MatheusSZR/SerralheriaFrontEnd', live: 'https://matheusszr.github.io/SerralheriaFrontEnd/' },
    diagnosticos: {
      QA: 'Validação de formulários e inputs, testes de cross-browser (compatibilidade entre navegadores distintos) e auditoria de performance mobile.',
      DEV: 'Código focado em leveza e carregamento rápido para conexões móveis (Mobile-First), garantindo acessibilidade e contraste visual.',
      DADOS: 'Otimização de arquitetura de informação focada em captação de Leads (Lead Generation), direcionando o tráfego visual para os canais de contato.'
    }
  }
};

export function ProjetoDossie({ projetoId, activeLens }: Props) {
  const projeto = projetos[projetoId];

  return (
    <motion.div 
      key={projetoId} // Força re-renderização ao trocar de projeto
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full max-w-5xl"
    >
      
      {/* CABEÇALHO DO PROJETO */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1E] pb-6 mb-8 gap-4">
        <div>
          <span className="font-mono text-[10px] text-[#555555] block mb-2 uppercase tracking-widest">
            ID: {projeto.categoria}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-[#EDEDED] tracking-tight">
            {projeto.nome}
          </h1>
        </div>
        
        <div className="flex gap-4 font-mono text-[10px]">
          <a 
            href={projeto.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-[#333333] px-4 py-2 text-[#888888] hover:text-[#EDEDED] hover:border-[#EDEDED] transition-colors bg-[#0A0A0C]"
          >
            [ REPOSITÓRIO ]
          </a>
          <a 
            href={projeto.links.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-[#10B981] px-4 py-2 text-[#10B981] hover:bg-[#10B981] hover:text-[#050507] transition-colors bg-[#10B981]/10 font-bold"
          >
            [ INICIAR_SISTEMA ]
          </a>
        </div>
      </div>

      {/* GRID DE DETALHAMENTO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* COLUNA ESQUERDA: Documentação Técnica */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          
          <div>
            <span className="font-mono text-[10px] text-[#555555] block mb-3 uppercase tracking-widest">
              Declaração_do_Problema
            </span>
            <p className="font-sans text-sm md:text-base text-[#888888] font-light leading-relaxed border-l border-[#1A1A1E] pl-4">
              {projeto.problema}
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] text-[#555555] block mb-3 uppercase tracking-widest">
              Arquitetura_da_Solução
            </span>
            <p className="font-sans text-sm md:text-base text-[#EDEDED] font-light leading-relaxed border-l border-[#3B82F6] pl-4">
              {projeto.solucao}
            </p>
          </div>

          {/* REAÇÃO À LENTE GLOBAL */}
          {activeLens !== 'PADRÃO' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className={`p-4 border bg-opacity-10 mt-4 
                ${activeLens === 'QA' ? 'border-[#10B981] bg-[#10B981] text-[#10B981]' : ''}
                ${activeLens === 'DEV' ? 'border-[#3B82F6] bg-[#3B82F6] text-[#3B82F6]' : ''}
                ${activeLens === 'DADOS' ? 'border-[#8B5CF6] bg-[#8B5CF6] text-[#8B5CF6]' : ''}
              `}
            >
              <span className="font-mono text-[10px] uppercase font-bold block mb-2">
                &gt; DIAGNÓSTICO_{activeLens}_APLICADO:
              </span>
              <p className="font-mono text-xs leading-relaxed opacity-90">
                {projeto.diagnosticos[activeLens]}
              </p>
            </motion.div>
          )}

        </div>

        {/* COLUNA DIREITA: Visual e Metadados */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="border border-[#1A1A1E] bg-[#111113] p-2 aspect-[4/3] relative group overflow-hidden">
            <img 
              src={projeto.imagem} 
              alt={projeto.nome} 
              className="w-full h-full object-cover object-top opacity-80 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute top-4 right-4 bg-[#050507]/90 border border-[#1A1A1E] backdrop-blur-md px-2 py-1 font-mono text-[9px] text-[#10B981]">
              STATUS: {projeto.status}
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] text-[#555555] block mb-3 uppercase tracking-widest">
              Stack_Utilizada
            </span>
            <div className="flex flex-wrap gap-1.5">
              {projeto.stack.map(tech => (
                <span key={tech} className="font-mono text-[10px] border border-[#333333] px-2 py-1 text-[#A0A0A0] bg-[#0A0A0C]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </motion.div>
  );
}