import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import TerminalWindow from '../components/TerminalWindow';
import { emailService } from '@/services/emailService';

const ContactPage = () => {
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
      const notificationSuccess = await emailService.sendContactFormNotification({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (notificationSuccess) {
        await emailService.sendContactFormConfirmation({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
        });
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
    <div className="page-container">
      <TerminalWindow title="Contact">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl mb-4 text-[var(--terminal-highlight)]">Get in touch</h2>
            <p className="text-[var(--terminal-text-muted)] text-sm">
              I'm always open to discussing new projects, creative ideas or opportunities.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8 space-y-2 text-sm">
            <p>
              <span className="text-[var(--terminal-text-muted)]">email:</span>{' '}
              <a href="mailto:udayhese96@gmail.com" className="text-[var(--terminal-text)] hover:text-[var(--terminal-highlight)]">
                udayhese96@gmail.com
              </a>
            </p>
            <p>
              <span className="text-[var(--terminal-text-muted)]">location:</span>{' '}
              <span className="text-[var(--terminal-text)]">Pune, India</span>
            </p>
            <p>
              <span className="text-[var(--terminal-text-muted)]">github:</span>{' '}
              <a href="https://github.com/udayhese96" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-text)] hover:text-[var(--terminal-highlight)]">
                @udayhese96
              </a>
            </p>
            <p>
              <span className="text-[var(--terminal-text-muted)]">linkedin:</span>{' '}
              <a href="https://www.linkedin.com/in/udayhese/" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-text)] hover:text-[var(--terminal-highlight)]">
                @udayhese
              </a>
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 rounded-lg bg-green-900/20 border border-green-500/30 text-green-400 text-sm">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 rounded-lg bg-red-900/20 border border-red-500/30 text-red-400 text-sm">
              Failed to send message. Please try again.
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[var(--terminal-text-muted)] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="terminal-input"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--terminal-text-muted)] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="terminal-input"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[var(--terminal-text-muted)] mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="terminal-input"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm text-[var(--terminal-text-muted)] mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="terminal-input terminal-textarea"
                placeholder="Tell me about your project or idea..."
                rows={5}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="terminal-button w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </TerminalWindow>

      <BottomNav />
    </div>
  );
};

export default ContactPage;
