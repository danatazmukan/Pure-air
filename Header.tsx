import { Link } from "wouter";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  handleMobileMenuClick: (e: React.MouseEvent) => void;
}

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen, handleMobileMenuClick }: HeaderProps) {
  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-primary mr-2">
            <i className="ri-leaf-line text-3xl"></i>
          </div>
          <h1 className="font-heading font-bold text-2xl text-dark">
            Pure<span className="text-primary">Air</span>
          </h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="text-dark hover:text-primary transition-colors">About</a></li>
            <li><a href="#solution" className="text-dark hover:text-primary transition-colors">Our Solution</a></li>
            <li><a href="#benefits" className="text-dark hover:text-primary transition-colors">Benefits</a></li>
            <li><a href="#contact" className="text-dark hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-dark" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white w-full pb-4 px-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        onClick={handleMobileMenuClick}
      >
        <ul className="space-y-3">
          <li><a href="#about" className="block py-2 text-dark hover:text-primary transition-colors">About</a></li>
          <li><a href="#solution" className="block py-2 text-dark hover:text-primary transition-colors">Our Solution</a></li>
          <li><a href="#benefits" className="block py-2 text-dark hover:text-primary transition-colors">Benefits</a></li>
          <li><a href="#contact" className="block py-2 text-dark hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
