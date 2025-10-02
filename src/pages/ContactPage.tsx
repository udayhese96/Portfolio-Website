import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;


