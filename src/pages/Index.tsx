import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import TerminalWindow from '../components/TerminalWindow';
import TypingAnimation from '../components/TypingAnimation';

const Index = () => {
  const [step, setStep] = useState(0);

  // ASCII art for UDAY HESE
  const asciiArt = `
██╗   ██╗██████╗  █████╗ ██╗   ██╗    ██╗  ██╗███████╗███████╗███████╗
██║   ██║██╔══██╗██╔══██╗╚██╗ ██╔╝    ██║  ██║██╔════╝██╔════╝██╔════╝
██║   ██║██║  ██║███████║ ╚████╔╝     ███████║█████╗  ███████╗█████╗  
██║   ██║██║  ██║██╔══██║  ╚██╔╝      ██╔══██║██╔══╝  ╚════██║██╔══╝  
╚██████╔╝██████╔╝██║  ██║   ██║       ██║  ██║███████╗███████║███████╗
 ╚═════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
  `.trim();

  return (
    <div className="page-container">
      {/* Terminal Window Container */}
      <TerminalWindow title="Ghostty">
        <div className="home-content">
          {/* Profile Image - appears first */}
          <div className={`profile-image-container ${step >= 0 ? 'profile-fade-in' : 'profile-hidden'}`}>
            <img
              src="/uploads/profile.png"
              alt="Uday Hese - AI & Backend Engineer"
              className="profile-image"
            />
          </div>

          {/* ASCII Art Header - displays line by line */}
          <pre className="ascii-art">
            {step >= 0 && (
              <TypingAnimation
                text={asciiArt}
                speed={10}
                instantLines={true}
                onComplete={() => setStep(1)}
              />
            )}
          </pre>

          {/* Introduction */}
          <div className="home-intro">
            {/* Subtitle */}
            <p className="home-subtitle">
              {step >= 1 && (
                <TypingAnimation
                  text="AI & Backend Engineer"
                  speed={50}
                  onComplete={() => setStep(2)}
                />
              )}
            </p>

            {/* Description */}
            <p className="home-description">
              {step >= 2 && (
                <TypingAnimation
                  text="Building scalable APIs and AI-driven systems using FastAPI, Python, and ML."
                  speed={50}
                  onComplete={() => setStep(3)}
                />
              )}
            </p>
          </div>

          {/* Social Links - fade in after typing completes */}
          <div className={`home-social-links ${step >= 3 ? 'social-fade-in' : 'social-hidden'}`}>
            {/* GitHub */}
            <a
              href="https://github.com/udayhese96"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
              title="GitHub - udayhese96"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/udayhese/"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
              title="LinkedIn - Uday Hese"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Google Developer */}
            <a
              href="https://developers.google.com/profile/u/UdayGaneshHese_VIIT"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
              title="Google Developer - Uday Ganesh Hese"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" />
              </svg>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/udayhese96/"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
              title="LeetCode - udayhese96"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
              </svg>
            </a>
          </div>
        </div>
      </TerminalWindow>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
