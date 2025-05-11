
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Reveal animation on scroll
    const revealElements = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.1,
    });
    
    revealElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <div id="about" className="bg-akogen-green-light py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 reveal">
                <h2 className="text-3xl md:text-4xl font-bold text-akogen-black mb-6">About Akogen</h2>
                <p className="text-akogen-gray text-lg mb-6">
                  Akogen is pioneering a circular economy solution for Bangalore's commercial kitchens by converting food waste into clean, sustainable energy.
                </p>
                <p className="text-akogen-gray text-lg mb-6">
                  We source organic waste from restaurants, cloud kitchens, and corporate canteens, process it through anaerobic digestion to produce methane, and supply compressed biogas (CBG) back to those same kitchens as a clean, cost-effective alternative to LPG.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-akogen-green text-3xl font-bold mb-2">15-20%</h3>
                    <p className="text-akogen-gray">Cost Savings</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-akogen-green text-3xl font-bold mb-2">90%</h3>
                    <p className="text-akogen-gray">Reduced Emissions</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative reveal" style={{ transitionDelay: "0.2s" }}>
                <div className="bg-white p-3 rounded-2xl shadow-lg relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                    alt="Akogen biogas plant" 
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute top-8 -right-8 w-24 h-24 bg-akogen-green rounded-full z-0"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-akogen-green-light rounded-full z-0"></div>
              </div>
            </div>
          </div>
        </div>
        <ProcessSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
