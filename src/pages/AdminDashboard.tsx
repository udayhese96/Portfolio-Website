
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ProfileSection from "@/components/admin/ProfileSection";
import AboutSection from "@/components/admin/AboutSection";
import ProjectsSection from "@/components/admin/ProjectsSection";
import ContactSection from "@/components/admin/ContactSection";
import MessagesSection from "@/components/admin/MessagesSection";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-portfolio-light">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-portfolio-dark">Admin Dashboard</h1>
            <p className="text-portfolio-gray">Manage your portfolio content</p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
            >
              View Site
            </Button>
            <Button 
              onClick={handleLogout}
              variant="ghost"
              className="text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              Logout
            </Button>
          </div>
        </div>
        
        <Tabs 
          defaultValue="profile" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-8 grid w-full grid-cols-5">
            <TabsTrigger value="profile">Hero</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <TabsContent value="profile">
              <ProfileSection />
            </TabsContent>
            
            <TabsContent value="about">
              <AboutSection />
            </TabsContent>
            
            <TabsContent value="projects">
              <ProjectsSection />
            </TabsContent>
            
            <TabsContent value="contact">
              <ContactSection />
            </TabsContent>
            
            <TabsContent value="messages">
              <MessagesSection />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
