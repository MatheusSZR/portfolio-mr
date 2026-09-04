import { motion } from 'framer-motion';
import bmCookiesImg from '../assets/bm-cookies.png';
import serralheriaImg from '../assets/serralheria.png';
import tedeumImg from '../assets/tedeum.png';

const projects = [
  {
    id: "PROJ_01",
    title: "TeDeum",
    category: "SYS.PLATFORM // CURATION",
    description: "Plataforma inteligente de curadoria que filtra o ruído da internet para expor os menores preços. Arquitetura focada em agilidade de busca e descoberta de produtos.",
    tech: ["Deploy (Vercel)", "Data Curation", "Git", "UX"],
    github: "https://github.com/MatheusSZR/tedeum",
    live: "https://tedeum-jade.vercel.app/",
    image: tedeumImg,
    accentHover: "group-hover:text-[#8B5CF6]", // Roxo
    borderHover: "hover:border-[#8B5CF6]/30",
  },
  {
    id: "PROJ_02",
    title: "B&M Cookies",
    category: "SYS.ECOMMERCE // EDITORIAL",
    description: "A tecnologia a serviço da experiência de marca. Funcionalidades comerciais envolvidas por uma UI que prioriza o desejo, a estética visual e a conversão direta.",
    tech: ["Web Development", "UI/UX", "Branding Digital"],
    github: "https://github.com/MatheusSZR/bm-cookies",
    live: "https://matheusszr.github.io/bm-cookies/",
    image: bmCookiesImg,
    accentHover: "group-hover:text-[#3B82F6]", // Azul
    borderHover: "hover:border-[#3B82F6]/30",
  },
  {
    id: "PROJ_03",
    title: "Serralheria Rodrigues",
    category: "SYS.BUSINESS // B2C",
    description: "Engenharia front-end aplicada para tracionar um negócio real, criando uma ponte clara, brutalista e responsiva entre os serviços de aço e o cliente final.",
    tech: ["Design Responsivo", "Comunicação Comercial", "Frontend"],
    github: "https://github.com/MatheusSZR/SerralheriaFrontEnd",
    live: "https://matheusszr.github.io/SerralheriaFrontEnd/",
    image: serralheriaImg,
    accentHover: "group-hover:text-[#10B981]", // Verde
    borderHover: "hover:border-[#10B981]/30",
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 md:px-24 py-32 border-t border-[#1A1A1E] relative">
      
      <div className="max-w-6xl mx-auto w-full">
        
        <span className="font-mono text-[#666666] text-xs tracking-widest uppercase mb-16 flex items-center gap-4">
          <span className="w-8 h-px bg-[#333333]"></span>
          Digital Products Archive
        </span>

        {/* Container da Lista de Projetos */}
        <div className="flex flex-col gap-8">
          
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group flex flex-col md:flex-row w-full bg-[#0A0A0C] border border-[#1A1A1E] overflow-hidden transition-colors duration-500 ${project.borderHover}`}
            >
              
              {/* Lado Esquerdo: Imagem Compacta */}
              <div className="w-full md:w-5/12 h-[220px] md:h-[320px] relative overflow-hidden bg-[#111113] border-b md:border-b-0 md:border-r border-[#1A1A1E]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top opacity-60 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay técnico por cima da imagem */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-[#EDEDED] bg-[#0A0A0C]/80 px-2 py-1 backdrop-blur-sm border border-[#1A1A1E]">
                  {project.id}
                </div>
              </div>

              {/* Lado Direito: Informações */}
              <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-between">
                
                <div>
                  <span className={`font-mono text-[10px] tracking-widest text-[#666666] mb-3 block transition-colors duration-300 ${project.accentHover}`}>
                    {project.category}
                  </span>
                  <h3 className="font-display text-3xl font-semibold text-[#EDEDED] tracking-tight mb-4 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[#888888] font-light leading-relaxed text-sm md:text-base mb-6 max-w-lg">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(tech => (
                      <span key={tech} className="font-mono text-[10px] text-[#A0A0A0] border border-[#1A1A1E] px-2.5 py-1 rounded-sm bg-[#111113]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 font-mono text-xs">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#888888] hover:text-[#EDEDED] transition-colors flex items-center gap-2"
                    >
                      [ INSPECIONAR CÓDIGO ]
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#888888] hover:text-[#EDEDED] transition-colors flex items-center gap-2"
                    >
                      [ ACESSAR APLICAÇÃO ]
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}