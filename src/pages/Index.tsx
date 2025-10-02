import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
