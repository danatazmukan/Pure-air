import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent click propagation inside the mobile menu
  const handleMobileMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="font-body text-dark bg-light">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleMobileMenuClick={handleMobileMenuClick}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionSection />
        <BenefitsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
