
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Home, Mail, LogOut } from "lucide-react";
import { experienceData } from "../components/Experience";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

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
                <DialogContent className="max-w-4xl w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                  <div className="relative">
                    <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                      <X size={20} />
                    </DialogClose>
                    <img 
                      src="/lovable-uploads/9fc19932-8adb-4164-a706-a8ce2bd215d0.png" 
                      alt="Certificate of Completion from SV Krishi Nature"
                      className="w-full h-auto"
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Navigation Menu Screen */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/6074b7e0-6cc2-42bc-9bf3-d40648d585e4.png" 
                          alt="App Navigation Menu" 
                          className="w-full aspect-[9/19] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Navigation Menu</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-sm w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/6074b7e0-6cc2-42bc-9bf3-d40648d585e4.png" 
                        alt="App Navigation Menu"
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                
                {/* Login Screen */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/c113d034-c105-4e28-b7c6-8f8ccb80e9df.png" 
                          alt="App Login Screen" 
                          className="w-full aspect-[9/19] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Login Screen</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-sm w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/c113d034-c105-4e28-b7c6-8f8ccb80e9df.png" 
                        alt="App Login Screen"
                        className="w-full h-auto"
                      />
                    </div>
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
                          className="w-full aspect-[9/19] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Sales Analytics</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-sm w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/91c69a73-2156-4772-9e10-138542e213ca.png" 
                        alt="Sales Statistics Screen"
                        className="w-full h-auto"
                      />
                    </div>
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
                          className="w-full aspect-[9/19] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Customer Management</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-sm w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/4e1cfde7-9f97-4fac-afc5-d2ded8fcf75c.png" 
                        alt="Customer Data Screen"
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            {/* Company Website */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Company Website</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Homepage */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/6b8bf146-7cba-4a36-acab-3cfa3b5c853c.png" 
                          alt="Company Website Homepage" 
                          className="w-full aspect-[16/9] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Homepage</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/6b8bf146-7cba-4a36-acab-3cfa3b5c853c.png" 
                        alt="Company Website Homepage"
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                
                {/* Product Page */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/261b68ae-23fb-437d-995a-403ff4bbf056.png" 
                          alt="Product Details Page" 
                          className="w-full aspect-[16/9] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Product Page</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/261b68ae-23fb-437d-995a-403ff4bbf056.png" 
                        alt="Product Details Page"
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                
                {/* Contact Page */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/aa20b959-f2c7-43d8-9ffe-e39e054245fc.png" 
                          alt="Contact Form" 
                          className="w-full aspect-[16/9] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Contact Page</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-sm w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/aa20b959-f2c7-43d8-9ffe-e39e054245fc.png" 
                        alt="Contact Form"
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            {/* Staff Web Application */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Staff Management Web Application</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Dashboard */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/3c492c52-0c9f-4eb3-bff7-459565b79062.png" 
                          alt="Staff Dashboard" 
                          className="w-full aspect-[16/9] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Dashboard</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/3c492c52-0c9f-4eb3-bff7-459565b79062.png" 
                        alt="Staff Dashboard"
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                
                {/* Customer Search */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/f0f6b660-5627-4356-8f69-00495e1467d6.png" 
                          alt="Customer Search" 
                          className="w-full aspect-[16/9] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Customer Search</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/f0f6b660-5627-4356-8f69-00495e1467d6.png" 
                        alt="Customer Search"
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                
                {/* Add/Update Customer */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/46ed34d3-60c5-4237-b68b-55bed763c123.png" 
                          alt="Add or Update Customer" 
                          className="w-full aspect-[16/9] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Add/Update Customer</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/46ed34d3-60c5-4237-b68b-55bed763c123.png" 
                        alt="Add or Update Customer"
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                
                {/* Customer List */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/bc0f764e-77e2-46bc-90d0-73b565c286ee.png" 
                          alt="New Customers List" 
                          className="w-full aspect-[16/9] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Customer List</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/bc0f764e-77e2-46bc-90d0-73b565c286ee.png" 
                        alt="New Customers List"
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                
                {/* Document Upload */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/d9136207-a9af-42a8-b4a8-30f7ebebaa48.png" 
                          alt="Document Upload" 
                          className="w-full aspect-[16/9] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">Document Upload</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/d9136207-a9af-42a8-b4a8-30f7ebebaa48.png" 
                        alt="Document Upload"
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                
                {/* All Customers */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/b9c0529d-e69f-453a-a0dd-7b9809a9b7fd.png" 
                          alt="All Customers List" 
                          className="w-full aspect-[16/9] object-cover object-top"
                        />
                        <div className="p-2 text-center text-sm font-medium text-portfolio-dark">All Customers</div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] h-auto max-h-[90vh] overflow-auto p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src="/lovable-uploads/b9c0529d-e69f-453a-a0dd-7b9809a9b7fd.png" 
                        alt="All Customers List"
                        className="w-full h-auto"
                      />
                    </div>
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
