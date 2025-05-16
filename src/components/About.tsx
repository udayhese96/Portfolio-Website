
const About = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My introduction</p>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="About me" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-portfolio-gray mb-6">
              I'm a Computer Science student passionate about creating robust, user-friendly web applications. With a strong foundation in both frontend and backend technologies, I enjoy the full process of bringing ideas to life through code.
            </p>
            
            <p className="text-portfolio-gray mb-8">
              My journey in programming began during my first year of college, and since then, I've been constantly learning and expanding my skillset. I'm particularly interested in React, Node.js, and exploring the potential of AI integration in web applications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-portfolio-dark font-bold text-xl mb-1">2+</h3>
                <p className="text-portfolio-gray text-sm">Years of Experience</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-portfolio-dark font-bold text-xl mb-1">10+</h3>
                <p className="text-portfolio-gray text-sm">Completed Projects</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-portfolio-dark font-bold text-xl mb-1">3+</h3>
                <p className="text-portfolio-gray text-sm">Companies Worked</p>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
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
