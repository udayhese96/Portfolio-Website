
import { MapPin, Mail } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

const Contact = () => {
  const { portfolioData } = usePortfolio();
  const { contact } = portfolioData;
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Get in touch</p>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Get in Touch</h3>
          <p className="text-portfolio-gray mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-portfolio-light flex items-center justify-center rounded-lg">
                <MapPin className="text-portfolio-blue" />
              </div>
              <div>
                <p className="font-medium text-portfolio-dark">Location</p>
                <p className="text-portfolio-gray">{contact.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-portfolio-light flex items-center justify-center rounded-lg">
                <Mail className="text-portfolio-blue" />
              </div>
              <div>
                <p className="font-medium text-portfolio-dark">Email</p>
                <p className="text-portfolio-gray">udayhese0101@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
