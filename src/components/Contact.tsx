
import { MapPin, Mail, AlertTriangle } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

const Contact = () => {
  const { portfolioData } = usePortfolio();
  const { contact } = portfolioData;
  
  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Traffic-themed animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border-8 border-dashed border-red-500 animate-spin" style={{animationDuration: '60s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border-8 border-dashed border-green-500 animate-spin" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Get in touch</p>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg relative">
            {/* Traffic signal icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
              <div className="flex flex-col bg-gray-800 rounded-md p-2 w-8 h-20">
                <div className="w-4 h-4 rounded-full bg-red-500 mb-2"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500 mb-2"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            <div className="pt-6">
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
              
              <div className="mt-8 p-4 bg-portfolio-light rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center rounded-full">
                  <AlertTriangle className="text-yellow-600" />
                </div>
                <p className="text-sm text-portfolio-gray">
                  Response time: Usually within 24-48 hours. For urgent matters, please mention "URGENT" in the subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
