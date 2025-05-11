
import { useEffect, useRef } from "react";
import { Leaf, Recycle, Database } from "lucide-react";
import Check from "./Check";

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const benefits = [
    {
      title: "Environmental Impact",
      description: "Reduce greenhouse gas emissions by diverting food waste from landfills and replacing fossil fuels with renewable biogas.",
      icon: <Leaf className="text-white" size={28} />,
      color: "bg-akogen-green",
      delay: "0s",
    },
    {
      title: "Economic Benefits",
      description: "Save 15-20% on energy costs while reducing waste disposal expenses. Hyperlocal supply chains minimize transportation costs.",
      icon: <Database className="text-white" size={28} />,
      color: "bg-akogen-green-dark",
      delay: "0.2s",
    },
    {
      title: "Circular Economy",
      description: "Close the loop by turning your kitchen's waste into the very fuel that powers it, creating a sustainable, circular system.",
      icon: <Recycle className="text-white" size={28} />,
      color: "bg-akogen-green",
      delay: "0.4s",
    },
  ];

  return (
    <section id="benefits" className="py-16 bg-akogen-green-light">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-akogen-black mb-4">Why Choose Akogen</h2>
          <p className="text-akogen-gray text-lg max-w-2xl mx-auto">
            Our solution offers multiple benefits for your business and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden reveal"
              style={{ transitionDelay: benefit.delay }}
              ref={el => cardsRef.current[index] = el}
            >
              <div className={`${benefit.color} p-4 flex justify-between items-center`}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <span className="text-white font-medium">{`0${index + 1}`}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-akogen-black mb-3">{benefit.title}</h3>
                <p className="text-akogen-gray">{benefit.description}</p>
              </div>
              <div className="px-6 pb-6">
                <a 
                  href="#contact" 
                  className="text-akogen-green font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-6 md:p-8 reveal" style={{ transitionDelay: "0.6s" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-akogen-black mb-4">Join the Sustainable Energy Revolution</h3>
              <p className="text-akogen-gray mb-6">
                By partnering with Akogen, your business becomes part of the solution to two critical problems: food waste management and clean energy production.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-6 h-6 bg-akogen-green rounded-full flex items-center justify-center text-white">
                    <Check size={14} />
                  </div>
                  <span>Comply with waste management regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-6 h-6 bg-akogen-green rounded-full flex items-center justify-center text-white">
                    <Check size={14} />
                  </div>
                  <span>Enhance your brand's sustainability credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-6 h-6 bg-akogen-green rounded-full flex items-center justify-center text-white">
                    <Check size={14} />
                  </div>
                  <span>Achieve ESG goals while reducing operational costs</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Sustainable energy solutions" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
