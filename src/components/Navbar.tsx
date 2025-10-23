import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#testimonials" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      {/* Main pill-shaped container with 3D sticker effect */}
      <div className="bg-white rounded-full border-[3px] border-[#1a1a1a] shadow-[0_6px_0_0_#1a1a1a] hover:shadow-[0_8px_0_0_#1a1a1a] transition-all duration-200">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14 sm:h-16">
          {/* Logo - Circular with orange center */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#");
            }}
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[3px] border-[#1a1a1a] bg-[hsl(var(--primary))] hover:scale-110 transition-transform duration-200"
            aria-label="Home"
          />

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-['Outfit'] font-medium text-[#4a4a4a] hover:text-[hsl(var(--primary))] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Button - Right */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden lg:block px-6 py-2 bg-[hsl(var(--primary))] text-white rounded-full font-['Outfit'] font-medium text-sm hover:opacity-90 transition-opacity duration-200"
          >
            Contact me
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1a1a1a] hover:text-[hsl(var(--primary))] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-3xl border-[3px] border-[#1a1a1a] shadow-[0_6px_0_0_#1a1a1a] animate-fadeIn overflow-hidden">
          <div className="flex flex-col py-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-6 py-3 text-sm font-['Outfit'] font-medium text-[#4a4a4a] hover:text-[hsl(var(--primary))] hover:bg-gray-50 transition-colors duration-200 ${
                  index !== navItems.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="mx-6 mt-4 px-6 py-2 bg-[hsl(var(--primary))] text-white rounded-full font-['Outfit'] font-medium text-sm hover:opacity-90 transition-opacity duration-200"
            >
              Contact me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
