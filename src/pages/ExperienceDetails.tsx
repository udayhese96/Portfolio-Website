
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { experienceData } from "../components/Experience";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/9fc19932-8adb-4164-a706-a8ce2bd215d0.png" 
                        alt="Certificate of Completion from SV Krishi Nature" 
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="pt-2">
                    <img 
                      src="/lovable-uploads/9fc19932-8adb-4164-a706-a8ce2bd215d0.png" 
                      alt="Certificate of Completion from SV Krishi Nature"
                      className="w-full"
                    />
                  </div>
                </DialogContent>
              </Dialog>
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
            
            {/* Android Application for Directors */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Android Application for Directors</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Staff Management Screen */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/8158b868-6f54-4f56-9c8f-fe130039b5b0.png" 
                          alt="Staff Management Screen" 
                          className="w-full aspect-[9/16] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Staff Management</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-xl">
                    <img 
                      src="/lovable-uploads/8158b868-6f54-4f56-9c8f-fe130039b5b0.png" 
                      alt="Staff Management Screen"
                      className="w-full"
                    />
                  </DialogContent>
                </Dialog>
                
                {/* Sales Statistics Screen 1 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/91c69a73-2156-4772-9e10-138542e213ca.png" 
                          alt="Sales Statistics Screen" 
                          className="w-full aspect-[9/16] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Sales Analytics</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-xl">
                    <img 
                      src="/lovable-uploads/91c69a73-2156-4772-9e10-138542e213ca.png" 
                      alt="Sales Statistics Screen"
                      className="w-full"
                    />
                  </DialogContent>
                </Dialog>
                
                {/* Sales Statistics Screen 2 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/a20fa7a1-a1cf-4dc3-a3d6-e85792c8bb9f.png" 
                          alt="Sales Statistics Details Screen" 
                          className="w-full aspect-[9/16] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Regional Analytics</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-xl">
                    <img 
                      src="/lovable-uploads/a20fa7a1-a1cf-4dc3-a3d6-e85792c8bb9f.png" 
                      alt="Sales Statistics Details Screen"
                      className="w-full"
                    />
                  </DialogContent>
                </Dialog>
                
                {/* Customer Data Screen */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/4e1cfde7-9f97-4fac-afc5-d2ded8fcf75c.png" 
                          alt="Customer Data Screen" 
                          className="w-full aspect-[9/16] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Customer Management</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-xl">
                    <img 
                      src="/lovable-uploads/4e1cfde7-9f97-4fac-afc5-d2ded8fcf75c.png" 
                      alt="Customer Data Screen"
                      className="w-full"
                    />
                  </DialogContent>
                </Dialog>
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
