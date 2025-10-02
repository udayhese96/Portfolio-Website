import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-20">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;


