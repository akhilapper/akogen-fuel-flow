
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-white to-akogen-green-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal" ref={sectionRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-akogen-black mb-6 leading-tight">
              Turning Food Waste Into <span className="text-akogen-green">Clean Energy</span>
            </h1>
            <p className="text-akogen-gray text-lg mb-8 leading-relaxed">
              Akogen converts kitchen food waste into high-quality compressed biogas (CBG), 
              delivering a hyperlocal, sustainable energy solution for Bangalore's commercial kitchens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#process" 
                className="bg-akogen-green hover:bg-akogen-green-dark text-white py-3 px-6 rounded-md font-medium transition duration-200 text-center"
              >
                How It Works
              </a>
              <a 
                href="#contact" 
                className="border-2 border-akogen-green text-akogen-green hover:bg-akogen-green-light py-3 px-6 rounded-md font-medium transition duration-200 flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="relative p-4 reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-white rounded-2xl shadow-lg p-6 relative">
              <div className="absolute -top-4 -right-4 bg-akogen-green text-white py-2 px-4 rounded-md font-medium">
                Circular Economy
              </div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Food waste to energy cycle" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center justify-between mb-4">
                <div className="bg-akogen-green-light text-akogen-green-dark py-1 px-3 rounded-full text-sm">
                  Sustainable Solution
                </div>
                <div className="text-akogen-gray text-sm">For Bangalore's Commercial Kitchens</div>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex flex-col">
                  <span className="text-sm text-akogen-gray">Reduced Carbon Footprint</span>
                  <span className="font-semibold">Up to 90% Less Emissions</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-akogen-gray">Cost Savings</span>
                  <span className="font-semibold">15-20% on Energy Bills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
