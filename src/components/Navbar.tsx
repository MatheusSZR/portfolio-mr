import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full border-b border-[#1A1A1E] bg-[#0A0A0C]/90 backdrop-blur-md z-50">
      <div className="flex items-center justify-between px-8 md:px-24 h-20">
        
        {/* Monograma com translate="no" para blindar contra tradutores */}
        <a 
          href="#home" 
          onClick={closeMenu} 
          translate="no" 
          className="notranslate font-display font-semibold text-xl tracking-widest text-[#EDEDED] hover:text-white transition-colors"
        >
          M/R
        </a>

        {/* Links do Menu para Desktop */}
        <nav className="hidden md:flex gap-8 font-mono text-sm text-[#888888]">
          <a href="#profile" className="hover:text-[#EDEDED] transition-colors">_profile</a>
          <a href="#experience" className="hover:text-[#EDEDED] transition-colors">_experience</a>
          <a href="#projects" className="hover:text-[#EDEDED] transition-colors">_projects</a>
          <a href="#data" className="hover:text-[#EDEDED] transition-colors">_data</a>
          <a href="#contact" className="hover:text-[#10B981] transition-colors">_contact</a>
        </nav>

        {/* Botão do Menu Hamburguer para Mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-[#EDEDED] focus:outline-none p-2 cursor-pointer"
          aria-label="Abrir Menu"
        >
          <div className="space-y-1.5 w-6">
            <span className={`block h-0.5 w-full bg-[#EDEDED] transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full bg-[#EDEDED] transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-[#EDEDED] transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
        
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0C] border-b border-[#1A1A1E] px-8 py-6 flex flex-col gap-6 font-mono text-sm text-[#888888]">
          <a href="#profile" onClick={closeMenu} className="hover:text-[#EDEDED] transition-colors">_profile</a>
          <a href="#experience" onClick={closeMenu} className="hover:text-[#EDEDED] transition-colors">_experience</a>
          <a href="#projects" onClick={closeMenu} className="hover:text-[#EDEDED] transition-colors">_projects</a>
          <a href="#data" onClick={closeMenu} className="hover:text-[#EDEDED] transition-colors">_data</a>
          <a href="#contact" onClick={closeMenu} className="text-[#10B981] transition-colors">_contact</a>
        </div>
      )}
    </header>
  );
}