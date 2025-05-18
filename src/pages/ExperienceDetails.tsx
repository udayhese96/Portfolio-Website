
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { experienceData } from "../components/Experience";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const experience = experienceData.find(exp => exp.id === Number(id));
  
  if (!experience) {
    return (
      <>
        <Navbar />
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-portfolio-dark mb-4">Experience Not Found</h1>
          <p className="text-portfolio-gray mb-6">The experience you are looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <Link to="/#experience" className="inline-flex items-center gap-2 text-portfolio-gray hover:text-portfolio-blue mb-8">
            <ArrowLeft size={18} />
            Back to Experience
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-sm text-portfolio-gray">{experience.startDate} – {experience.endDate}</span>
              <h1 className="text-4xl font-bold text-portfolio-dark mb-2">{experience.title}</h1>
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-medium text-portfolio-blue">{experience.company}</h2>
                <span className="mx-2 text-portfolio-gray">•</span>
                <span className="text-portfolio-gray">{experience.location}</span>
              </div>
            </div>
            
            <div className="mb-12 whitespace-pre-line text-portfolio-gray">
              {experience.fullDescription}
            </div>
            
            {/* Certificate of Completion */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Certificate of Completion</h2>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/9fc19932-8adb-4164-a706-a8ce2bd215d0.png" 
                    alt="Certificate of Completion from SV Krishi Nature" 
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-sm bg-portfolio-light text-portfolio-dark px-4 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project Images */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Project Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experience.images.map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={image} 
                      alt={`${experience.company} project ${index + 1}`} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* System Architecture and UI Samples */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">System Architecture & UI Samples</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-portfolio-dark mb-4">Company Website</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/cafe72a6-1930-4252-b97e-3d1a3d276622.png" 
                        alt="SV Krishi Nature Website Homepage" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/9895fcee-eefa-4a9c-9b60-1e1c3e178934.png" 
                        alt="SV Krishi Nature Product Page" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/cb14bca7-2834-40f3-b3f7-1657b696ac7d.png" 
                        alt="SV Krishi Nature Contact Page" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-portfolio-dark mb-4">Staff Web Application</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/56328818-6e5e-4d86-82e1-c71024d79b57.png" 
                        alt="Staff Customer Management Dashboard" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/03b8f2e2-d77d-4eca-a345-c2cece2229a1.png" 
                        alt="New Customers Management Page" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/5d79d65e-e8b3-4d40-87d3-456a6761b7fe.png" 
                        alt="Document Upload System" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-portfolio-dark mb-4">Android Application for Directors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/18f10993-e4f5-43da-bc62-9bb8b91c831b.png" 
                        alt="Android App Login Screen" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/7af257a6-b1c8-4acd-a9ae-5d35e88502a1.png" 
                        alt="Android App Navigation Menu" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-portfolio-dark mb-4">System Architecture Diagrams</h3>
                <div className="grid grid-cols-1 gap-6">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/c605b10f-3c43-4811-a494-34d00588b3a6.png" 
                        alt="System Architecture Diagram" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/75035d8a-81dd-4e9b-8c53-e5a2a137d14b.png" 
                        alt="Use Case Diagram" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Key Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-3 text-portfolio-gray">
                {experience.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExperienceDetails;
