import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="font-display text-xl md:text-2xl font-semibold text-gray-900 tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <img 
            src="/logo.png" 
            alt="Techexa Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          TECHEXA<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-blue-600" />
            </a>
          ))}
        <Button
        onClick={scrollToContact}
        className="ml-4 px-6 py-5 text-base font-medium bg-gradient-to-r from-[#385C97] to-blue-500 hover:from-[#2a4573] hover:to-[#385C97] text-white border-0 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-[#385C97]/30 transition-all duration-300">
  Become A Partner
</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 mx-6 p-6 rounded-xl bg-white/95 backdrop-blur-xl border border-gray-200 animate-fade-in shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-blue-600 transition-colors duration-200 text-base font-medium py-2 border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="mt-4 py-5 text-base font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0 shadow-md shadow-blue-200 hover:shadow-blue-300" onClick={() => setIsMobileMenuOpen(false)}>
              Start Project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;