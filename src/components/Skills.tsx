import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Software Quality / QA",
    skills: ["Testes automatizados", "Jira", "Confluence", "BDD/Gherkin", "Postman"]
  },
  {
    title: "Development",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "React", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Data & Analytics",
    skills: ["SQL", "Power BI", "DAX", "Excel", "Data Modeling"]
  },
  {
    title: "Tools & Engineering",
    skills: ["Git", "GitHub", "Power Apps", "Scrum", "VS Code"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen px-8 md:px-24 py-24 flex flex-col justify-center border-t border-[#1A1A1E]">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <span className="font-mono text-[#888888] text-sm tracking-widest uppercase mb-16 block">
          (03) // Competências
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col">
              
              <h3 className="font-display text-xl font-medium text-[#EDEDED] mb-6 border-b border-[#1A1A1E] pb-4">
                {category.title}
              </h3>
              
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="font-sans text-[#888888] flex items-center gap-3 group cursor-default">
                    <span className="w-1.5 h-1.5 bg-[#333333] group-hover:bg-[#EDEDED] transition-colors" />
                    <span className="group-hover:text-[#EDEDED] transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}