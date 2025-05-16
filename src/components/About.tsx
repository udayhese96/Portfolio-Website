
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
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-portfolio-dark font-bold text-xl mb-1">{about.yearsExperience}</h3>
                <p className="text-portfolio-gray text-sm">Years of Experience</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-portfolio-dark font-bold text-xl mb-1">{about.projectsCompleted}</h3>
                <p className="text-portfolio-gray text-sm">Completed Projects</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-portfolio-dark font-bold text-xl mb-1">{about.companiesWorked}</h3>
                <p className="text-portfolio-gray text-sm">Companies Worked</p>
              </div>
            </div>
            
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
