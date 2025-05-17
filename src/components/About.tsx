
import { usePortfolio } from "@/context/PortfolioContext";

const About = () => {
  const { portfolioData } = usePortfolio();
  const { about } = portfolioData;
  
  return (
    <section id="about" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My introduction</p>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <img 
                src={about.aboutImage} 
                alt="About me" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-portfolio-gray mb-6">
              {about.aboutText1}
            </p>
            
            <p className="text-portfolio-gray mb-8">
              {about.aboutText2}
            </p>
            
            <a 
              href={about.resumeLink} 
              className="btn-primary inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
