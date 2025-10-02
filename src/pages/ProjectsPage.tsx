import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;


