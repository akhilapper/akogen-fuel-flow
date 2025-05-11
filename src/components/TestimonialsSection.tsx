
import { useEffect, useRef } from "react";

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    testimonialsRef.current.forEach((testimonial) => {
      if (testimonial) observer.observe(testimonial);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      testimonialsRef.current.forEach((testimonial) => {
        if (testimonial) observer.unobserve(testimonial);
      });
    };
  }, []);

  const testimonials = [
    {
      quote: "Partnering with Akogen has reduced our monthly energy costs by 18% while helping us meet our sustainability goals. The transition was seamless.",
      name: "Priya Sharma",
      position: "Operations Manager",
      company: "Cloud Kitchen Hub",
      delay: "0s",
    },
    {
      quote: "Not only has Akogen simplified our waste management, but their biogas solution has provided a reliable alternative to our traditional LPG supply.",
      name: "Rahul Mehra",
      position: "Executive Chef",
      company: "Green Leaf Restaurant Group",
      delay: "0.2s",
    },
    {
      quote: "The circular economy model makes perfect sense for our operations. We've reduced our carbon footprint significantly while saving on monthly expenses.",
      name: "Ananya Patel",
      position: "Sustainability Director",
      company: "Corporate Food Services Inc.",
      delay: "0.4s",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-akogen-black mb-4">What Our Partners Say</h2>
          <p className="text-akogen-gray text-lg max-w-2xl mx-auto">
            See how our solution is making a difference for businesses across Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-akogen-green-light rounded-lg p-6 relative reveal"
              style={{ transitionDelay: testimonial.delay }}
              ref={el => testimonialsRef.current[index] = el}
            >
              <div className="absolute top-6 left-6 text-akogen-green text-6xl opacity-20 font-serif">
                &ldquo;
              </div>
              <div className="relative">
                <p className="text-akogen-gray mb-6 italic relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-akogen-green rounded-full flex items-center justify-center text-white font-medium text-lg">
                    {testimonial.name.substring(0, 1)}
                    {testimonial.position.substring(0, 1)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-akogen-black">{testimonial.name}</h4>
                    <p className="text-sm text-akogen-gray">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal" style={{ transitionDelay: "0.6s" }}>
          <h3 className="text-2xl font-semibold text-akogen-black mb-6">Trusted by Leading Food Businesses in Bangalore</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* These would be replaced with actual partner logos */}
            <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-akogen-gray">Partner 1</div>
            <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-akogen-gray">Partner 2</div>
            <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-akogen-gray">Partner 3</div>
            <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-akogen-gray">Partner 4</div>
            <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-akogen-gray">Partner 5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
