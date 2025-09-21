
import { MapPin, Mail, Send, User, MessageSquare, Phone } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { useState } from "react";
import { emailService } from "@/services/emailService";

const Contact = () => {
  const { portfolioData } = usePortfolio();
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send notification email to your email
      const notificationSuccess = await emailService.sendContactFormNotification({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      // Send confirmation email to user
      const confirmationSuccess = await emailService.sendContactFormConfirmation({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
      });

      if (notificationSuccess) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-black">
      {/* Section transition gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black via-black/80 to-transparent z-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-5"></div>
      {/* Enhanced Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 200, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(150, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 70% 30%, rgba(0, 255, 255, 0.04) 0%, transparent 65%)
          `,
          backgroundSize: '60px 60px, 60px 60px, 250px 250px',
          animation: 'cyberpunkGrid 16.5s ease-in-out infinite reverse',
          filter: 'drop-shadow(0 0 3px rgba(0, 255, 255, 0.1))'
        }}></div>
      </div>

      {/* Enhanced 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Envelope shape */}
        <div className="absolute top-1/4 right-1/5" style={{animation: 'floatRandomZoom1 20.3s ease-in-out infinite'}}>
          <svg width="32" height="24" viewBox="0 0 100 75" className="text-cyan-400/20">
            <path d="M10,20 L50,50 L90,20 L90,65 L10,65 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Message bubble */}
        <div className="absolute bottom-1/4 left-1/6" style={{animation: 'floatRandomZoom2 17.6s ease-in-out infinite'}}>
          <svg width="30" height="26" viewBox="0 0 100 85" className="text-blue-400/25">
            <path d="M15,15 L85,15 A10,10 0 0,1 85,45 L25,45 L15,55 L15,25 A10,10 0 0,1 25,15" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Phone icon shape */}
        <div className="absolute top-2/3 right-1/3" style={{animation: 'floatRandomZoom3 19.8s ease-in-out infinite'}}>
          <svg width="20" height="34" viewBox="0 0 60 100" className="text-purple-400/20">
            <rect x="15" y="10" width="30" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="30" cy="80" r="3" fill="currentColor"/>
          </svg>
        </div>

        {/* @ symbol */}
        <div className="absolute top-1/3 left-1/4 text-xl text-cyan-300/25 font-bold"
             style={{animation: 'floatRandomZoom1 14.7s ease-in-out infinite reverse', filter: 'drop-shadow(0 0 6px rgba(0, 255, 255, 0.4))'}}>@</div>

        {/* Send arrow */}
        <div className="absolute bottom-1/3 right-1/6" style={{animation: 'floatRandomZoom2 16.2s ease-in-out infinite'}}>
          <svg width="28" height="28" viewBox="0 0 100 100" className="text-blue-300/30">
            <path d="M10,50 L80,20 L80,35 L90,35 L90,65 L80,65 L80,80 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Connection lines */}
        <div className="absolute top-1/6 left-1/3" style={{animation: 'floatRandomZoom3 18.9s ease-in-out infinite'}}>
          <svg width="35" height="20" viewBox="0 0 100 60" className="text-cyan-400/15">
            <path d="M10,30 L40,30 M40,15 L60,30 L40,45 M60,30 L90,30" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Moving Grid Line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-2/3 h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          style={{
            animation: 'movingGridLine 12s ease-in-out infinite',
            animationDelay: '4s',
            opacity: 0.18
          }}
        ></div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-cyan-400/10 border border-cyan-400/30 mb-6">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium tracking-wide mono">CONTACT.SYS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold neon-text mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
            INITIALIZE CONNECTION
          </h2>
          <p className="text-xl text-cyan-200/80 max-w-2xl mx-auto">
            Ready to collaborate on the next digital revolution
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="cyber-card p-6">
              <h3 className="text-2xl font-bold neon-blue-text mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
                DIRECT CHANNELS
              </h3>
              <p className="text-cyan-200/80 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center rounded-lg">
                    <MapPin className="text-cyan-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-cyan-300 mono text-sm">LOCATION</p>
                    <p className="text-cyan-200/80">{contact.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center rounded-lg">
                    <Mail className="text-cyan-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-cyan-300 mono text-sm">EMAIL</p>
                    <a
                      href="mailto:udayhese0101@gmail.com"
                      className="text-cyan-200/80 hover:text-cyan-400 transition-colors"
                    >
                      udayhese0101@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center rounded-lg">
                    <Phone className="text-cyan-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-cyan-300 mono text-sm">PHONE</p>
                    <a
                      href="tel:+918624012250"
                      className="text-cyan-200/80 hover:text-cyan-400 transition-colors"
                    >
                      +91-8624012250
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold neon-text" style={{fontFamily: 'Orbitron, monospace'}}>
                SEND MESSAGE
              </h3>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
                <p className="text-green-700 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-red-700 text-sm font-medium">Failed to send message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2 mono">NAME</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400/60" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200 placeholder-cyan-400/50 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2 mono">EMAIL</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400/60" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200 placeholder-cyan-400/50 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2 mono">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200 placeholder-cyan-400/50 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2 mono">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200 placeholder-cyan-400/50 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cyber-button w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400"></div>
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
