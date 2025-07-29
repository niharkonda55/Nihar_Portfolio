export default function FloatingNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 floating-nav rounded-full px-8 py-4 z-50">
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 
  px-8 py-4 z-50 text-white rounded-full backdrop-blur-md 
  bg-slate-dark/70 border border-neon-green/40 shadow-[0_0_15px_#39ff14]">

      <ul className="flex space-x-8 text-sm font-medium">
        <li>
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-[var(--cyber-green)] transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[var(--cyber-green)] hover:after:w-full after:transition-all after:duration-300">
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-[var(--cyber-green)] transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[var(--cyber-green)] hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('skills')}
            className="hover:text-[var(--cyber-green)] transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[var(--cyber-green)] hover:after:w-full after:transition-all after:duration-300"
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-[var(--cyber-green)] transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[var(--cyber-green)] hover:after:w-full after:transition-all after:duration-300"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('achievements')}
            className="hover:text-[var(--cyber-green)] transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[var(--cyber-green)] hover:after:w-full after:transition-all after:duration-300"
          >
            Achievements
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-[var(--cyber-green)] transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[var(--cyber-green)] hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
