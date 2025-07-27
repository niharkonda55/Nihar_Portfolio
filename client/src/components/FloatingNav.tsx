export default function FloatingNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 floating-nav rounded-full px-8 py-4 z-50">
      <ul className="flex space-x-8 text-sm font-medium">
        <li>
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:text-[var(--cyber-green)] transition-colors magnetic-hover"
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:text-[var(--cyber-green)] transition-colors magnetic-hover"
          >
            About
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('skills')}
            className="hover:text-[var(--cyber-green)] transition-colors magnetic-hover"
          >
            Skills
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('projects')}
            className="hover:text-[var(--cyber-green)] transition-colors magnetic-hover"
          >
            Projects
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:text-[var(--cyber-green)] transition-colors magnetic-hover"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
