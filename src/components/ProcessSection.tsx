
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLLIElement | null)[]>([]);
  const localImages = [
  'waste_img1.jpg',
  'waste_img2.jpg',
  'waste_img3.jpg',
  'waste_img4.jpg',
  'waste_img5.jpg'
];

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

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const processSteps = [
    {
      title: "Collection",
      description: "We collect food waste from restaurants, cloud kitchens, and corporate canteens across Bangalore.",
      delay: "0s",
      icon: "🥙"
    },
    {
      title: "Sorting",
      description: "Organic waste is carefully sorted and prepared for the digestion process.",
      delay: "0.2s",
      icon: "♻️"
    },
    {
      title: "Anaerobic Digestion",
      description: "Food waste undergoes anaerobic digestion, producing methane and nutrient-rich digestate.",
      delay: "0.4s",
      icon: "🧪"
    },
    {
      title: "Purification",
      description: "The biogas is purified and compressed to create high-quality CBG fuel.",
      delay: "0.6s",
      icon: "💨"
    },
    {
      title: "Distribution",
      description: "CBG is supplied back to the same kitchens as a clean alternative to LPG.",
      delay: "0.8s",
      icon: "🚚"
    },
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-akogen-black mb-4">How It Works</h2>
          <p className="text-akogen-gray text-lg max-w-2xl mx-auto">
            Our circular process converts kitchen waste into clean, usable energy that goes right back to where it came from.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-akogen-green-light -translate-x-1/2"></div>
          <ul className="space-y-12 relative">
            {processSteps.map((step, index) => (
              <li 
                key={index}
                className="reveal flex flex-col lg:flex-row items-center gap-8"
                style={{ transitionDelay: step.delay }}
                ref={el => stepsRef.current[index] = el}
              >
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-3 lg:text-right'} lg:w-5/12`}>
                  <h3 className="text-2xl font-semibold text-akogen-black mb-3 flex items-center gap-4">
                    <span className="text-3xl">{step.icon}</span>
                    {step.title}
                  </h3>
                  <p className="text-akogen-gray">{step.description}</p>
                </div>
                
                <div className="order-2 lg:w-2/12 flex items-center justify-center">
                  <div className="w-12 h-12 bg-akogen-green rounded-full flex items-center justify-center text-white shadow-lg">
                    <Check size={20} />
                  </div>
                </div>
                
                <div className={`order-3 ${index % 2 === 0 ? 'lg:order-3' : 'lg:order-1'} lg:w-5/12`}>
                  <div className="bg-akogen-green-light rounded-lg overflow-hidden shadow-md">
                     <img 
                      src={`/lovable-uploads/${localImages[index]}`} 
                      alt={step.title} 
                      className="w-full h-60 object-cover"
                      />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
