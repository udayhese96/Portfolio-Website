import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import DevReplayToggle from '../components/DevReplayToggle';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Central top light effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-400/15 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        <Navbar />
        <Hero />
        <Footer />
      </div>
      {/* Dev replay toggle - only visible with dev-mode class on body */}
      <DevReplayToggle />
    </div>
  );
};

export default Index;
