
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    business: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      business: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-akogen-green-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-akogen-black mb-4">Get in Touch</h2>
            <p className="text-akogen-gray text-lg mb-8">
              Ready to transform your kitchen's food waste into clean, sustainable energy? Contact us today to discuss how we can help your business.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-akogen-green rounded-full flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-akogen-black">Phone</h4>
                  <p className="text-akogen-gray">+91 99583 75277</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-akogen-green rounded-full flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-akogen-black">Email</h4>
                  <p className="text-akogen-gray">akhil1999bhatt@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-akogen-green rounded-full flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-akogen-black">Office</h4>
                  <p className="text-akogen-gray">
                    Sony world signal, 80ft road,<br />
                    Koramangala, Bangalore 560034
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-akogen-black mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-akogen-gray mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akogen-green"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-akogen-gray mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akogen-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-akogen-gray mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akogen-green"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-akogen-gray mb-1">
                  Business Type
                </label>
                <select
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akogen-green"
                >
                  <option value="">Select business type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cloud_kitchen">Cloud Kitchen</option>
                  <option value="corporate_canteen">Corporate Canteen</option>
                  <option value="hotel">Hotel</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-akogen-gray mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akogen-green"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-akogen-green hover:bg-akogen-green-dark text-white py-3 px-6 rounded-md font-medium transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
