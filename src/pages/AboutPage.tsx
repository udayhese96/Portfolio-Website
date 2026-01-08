import { useState, useEffect } from 'react';
import BottomNav from '../components/BottomNav';
import TerminalWindow from '../components/TerminalWindow';
import CodeTypingAnimation from '../components/CodeTypingAnimation';

type TabId = 'personal' | 'skills' | 'work' | 'resume';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<TabId>('personal');
  const [typingKey, setTypingKey] = useState(0);
  const [showTyping, setShowTyping] = useState(true);

  const resumePdfUrl = "https://drive.google.com/file/d/1Dzn83qEjRSv5GzzFR4T4knImeMazBS7X/preview";

  const tabs = [
    { id: 'personal' as TabId, label: 'personal.ts' },
    { id: 'skills' as TabId, label: 'skills.ts' },
    { id: 'work' as TabId, label: 'work.ts' },
    { id: 'resume' as TabId, label: 'resume.ts' },
  ];

  // Preload PDF iframe on component mount
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://drive.google.com';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  // Reset typing animation when tab changes
  useEffect(() => {
    setShowTyping(true);
    setTypingKey(prev => prev + 1);
  }, [activeTab]);

  // Define code lines with syntax highlighting for each tab
  const getPersonalLines = () => [
    { lineNumber: 1, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">developer</span> = {'{'}</> },
    { lineNumber: 2, content: <>  <span className="syntax-function">name</span>: <span className="syntax-string">"Uday Hese"</span>,</> },
    { lineNumber: 3, content: <>  <span className="syntax-function">role</span>: <span className="syntax-string">"Full Stack & AI Developer"</span>,</> },
    { lineNumber: 4, content: <>  <span className="syntax-function">location</span>: <span className="syntax-string">"Pune, India"</span>,</> },
    { lineNumber: 5, content: <>  <span className="syntax-function">education</span>: <span className="syntax-string">"B.Tech Computer Science (AI)"</span>,</> },
    { lineNumber: 6, content: <>  <span className="syntax-function">institute</span>: <span className="syntax-string">"Vishwakarma Institute of Information Technology (VIIT)"</span>,</> },
    { lineNumber: 7, content: <>  <span className="syntax-function">graduation</span>: <span className="syntax-string">"2026"</span>,</> },
    { lineNumber: 8, content: <>  <span className="syntax-function">cgpa</span>: <span className="syntax-variable">8.39</span>,</> },
    { lineNumber: 9, content: <>{'}'};  </> },
    { lineNumber: 10, content: <></> },
    { lineNumber: 11, content: <><span className="syntax-comment">// ==============================</span></> },
    { lineNumber: 12, content: <><span className="syntax-comment">// ABOUT ME</span></> },
    { lineNumber: 13, content: <><span className="syntax-comment">// ==============================</span></> },
    { lineNumber: 14, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">aboutMe</span> = {'{'}</> },
    { lineNumber: 15, content: <>  <span className="syntax-function">summary</span>:</> },
    { lineNumber: 16, content: <>    <span className="syntax-string">"Final-year CSE (AI) student focused on building scalable,</span></> },
    { lineNumber: 17, content: <>    <span className="syntax-string">intelligent, and real-world software solutions."</span>,</> },
    { lineNumber: 18, content: <></> },
    { lineNumber: 19, content: <>  <span className="syntax-function">expertise</span>: [</> },
    { lineNumber: 20, content: <>    <span className="syntax-string">"End-to-end full stack application development"</span>,</> },
    { lineNumber: 21, content: <>    <span className="syntax-string">"AI & ML model integration into production systems"</span>,</> },
    { lineNumber: 22, content: <>    <span className="syntax-string">"RESTful API design and backend optimization"</span>,</> },
    { lineNumber: 23, content: <>    <span className="syntax-string">"Cloud deployment and system scalability"</span>,</> },
    { lineNumber: 24, content: <>  ],</> },
    { lineNumber: 25, content: <></> },
    { lineNumber: 26, content: <>  <span className="syntax-function">mindset</span>:</> },
    { lineNumber: 27, content: <>    <span className="syntax-string">"Problem-solver with a strong interest in clean architecture,</span></> },
    { lineNumber: 28, content: <>    <span className="syntax-string">performance, and impactful engineering."</span>,</> },
    { lineNumber: 29, content: <>{'}'};  </> },
    { lineNumber: 30, content: <></> },
    { lineNumber: 31, content: <><span className="syntax-comment">// ==============================</span></> },
    { lineNumber: 32, content: <><span className="syntax-comment">// INTERESTS</span></> },
    { lineNumber: 33, content: <><span className="syntax-comment">// ==============================</span></> },
    { lineNumber: 34, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">interests</span> = [</> },
    { lineNumber: 35, content: <>  <span className="syntax-string">"Full Stack Development"</span>,</> },
    { lineNumber: 36, content: <>  <span className="syntax-string">"Artificial Intelligence & Machine Learning"</span>,</> },
    { lineNumber: 37, content: <>  <span className="syntax-string">"Computer Vision"</span>,</> },
    { lineNumber: 38, content: <>  <span className="syntax-string">"Cloud & DevOps Technologies"</span>,</> },
    { lineNumber: 39, content: <>];</> },
  ];

  const getSkillsLines = () => [
    { lineNumber: 1, content: <><span className="syntax-comment">// ==============================</span></> },
    { lineNumber: 2, content: <><span className="syntax-comment">// SKILLS</span></> },
    { lineNumber: 3, content: <><span className="syntax-comment">// ==============================</span></> },
    { lineNumber: 4, content: <><span className="syntax-keyword">interface</span> <span className="syntax-type">Skills</span> {'{'}</> },
    { lineNumber: 5, content: <>  <span className="syntax-function">languages</span>: <span className="syntax-type">string</span>[];  <span className="syntax-function">frameworks</span>: <span className="syntax-type">string</span>[];</> },
    { lineNumber: 6, content: <>  <span className="syntax-function">databases</span>: <span className="syntax-type">string</span>[];  <span className="syntax-function">ai_ml</span>: <span className="syntax-type">string</span>[];  <span className="syntax-function">tools</span>: <span className="syntax-type">string</span>[];</> },
    { lineNumber: 7, content: <>{'}'}</> },
    { lineNumber: 8, content: <></> },
    { lineNumber: 9, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">mySkills</span>: <span className="syntax-type">Skills</span> = {'{'}</> },
    { lineNumber: 10, content: <>  <span className="syntax-function">languages</span>: [<span className="syntax-string">"JavaScript"</span>, <span className="syntax-string">"TypeScript"</span>, <span className="syntax-string">"Python"</span>, <span className="syntax-string">"Java"</span>, <span className="syntax-string">"HTML"</span>, <span className="syntax-string">"CSS"</span>],</> },
    { lineNumber: 11, content: <>  <span className="syntax-function">frameworks</span>: [<span className="syntax-string">"React"</span>, <span className="syntax-string">"Node.js"</span>, <span className="syntax-string">"Django"</span>, <span className="syntax-string">"Flask"</span>, <span className="syntax-string">"FastAPI"</span>],</> },
    { lineNumber: 12, content: <>  <span className="syntax-function">databases</span>: [<span className="syntax-string">"PostgreSQL"</span>, <span className="syntax-string">"MySQL"</span>, <span className="syntax-string">"MongoDB"</span>],</> },
    { lineNumber: 13, content: <>  <span className="syntax-function">ai_ml</span>: [<span className="syntax-string">"TensorFlow"</span>, <span className="syntax-string">"PyTorch"</span>, <span className="syntax-string">"Scikit-learn"</span>, <span className="syntax-string">"OpenCV"</span>, <span className="syntax-string">"YOLO"</span>],</> },
    { lineNumber: 14, content: <>  <span className="syntax-function">tools</span>: [<span className="syntax-string">"Git"</span>, <span className="syntax-string">"Docker"</span>, <span className="syntax-string">"VS Code"</span>, <span className="syntax-string">"Power BI"</span>, <span className="syntax-string">"Tableau"</span>],</> },
    { lineNumber: 15, content: <>{'}'};  </> },
  ];

  const getWorkLines = () => [
    { lineNumber: 1, content: <><span className="syntax-comment">// ==============================</span></> },
    { lineNumber: 2, content: <><span className="syntax-comment">// EXPERIENCE</span></> },
    { lineNumber: 3, content: <><span className="syntax-comment">// ==============================</span></> },
    { lineNumber: 4, content: <><span className="syntax-keyword">type</span> <span className="syntax-type">Experience</span> = {'{'}</> },
    { lineNumber: 5, content: <>  <span className="syntax-function">company</span>: <span className="syntax-type">string</span>;  <span className="syntax-function">role</span>: <span className="syntax-type">string</span>;  <span className="syntax-function">duration</span>: <span className="syntax-type">string</span>;</> },
    { lineNumber: 6, content: <>  <span className="syntax-function">location</span>: <span className="syntax-type">string</span>;  <span className="syntax-function">responsibilities</span>: <span className="syntax-type">string</span>[];</> },
    { lineNumber: 7, content: <>{'}'};  </> },
    { lineNumber: 8, content: <></> },
    { lineNumber: 9, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">experiences</span>: <span className="syntax-type">Experience</span>[] = [</> },
    { lineNumber: 10, content: <>  {'{'}</> },
    { lineNumber: 11, content: <>    <span className="syntax-function">company</span>: <span className="syntax-string">"Raam Group (Ather & Toyota)"</span>,</> },
    { lineNumber: 12, content: <>    <span className="syntax-function">role</span>: <span className="syntax-string">"Data Analyst → Software Developer Intern"</span>,</> },
    { lineNumber: 13, content: <>    <span className="syntax-function">duration</span>: <span className="syntax-string">"Jun 2025 – Nov 2025"</span>,</> },
    { lineNumber: 14, content: <>    <span className="syntax-function">location</span>: <span className="syntax-string">"Hyderabad, India (On-site)"</span>,</> },
    { lineNumber: 15, content: <>    <span className="syntax-function">responsibilities</span>: [</> },
    { lineNumber: 16, content: <>      <span className="syntax-string">"Built and deployed Raam Ather CRM using Flask and Supabase."</span>,</> },
    { lineNumber: 17, content: <>      <span className="syntax-string">"Implemented automated lead assignment and email workflows."</span>,</> },
    { lineNumber: 18, content: <>      <span className="syntax-string">"Developed EPIC Toyota CRM 2.0 with Next.js and FastAPI."</span>,</> },
    { lineNumber: 19, content: <>      <span className="syntax-string">"Designed real-time APIs and optimized backend performance."</span>,</> },
    { lineNumber: 20, content: <>      <span className="syntax-string">"Performed load/stress testing using Locust."</span>,</> },
    { lineNumber: 21, content: <>      <span className="syntax-string">"Collaborated with cross-functional teams."</span>,</> },
    { lineNumber: 22, content: <>    ],</> },
    { lineNumber: 23, content: <>  {'}'},</> },
    { lineNumber: 24, content: <>];</> },
  ];

  const getCurrentLines = () => {
    switch (activeTab) {
      case 'personal':
        return getPersonalLines();
      case 'skills':
        return getSkillsLines();
      case 'work':
        return getWorkLines();
      case 'resume':
        return []; // Resume uses different rendering
      default:
        return getPersonalLines();
    }
  };

  const renderStaticContent = () => {
    const lines = getCurrentLines();
    return (
      <div className="code-block">
        {lines.map((line, index) => (
          <div key={index} className="code-line">
            <span className="line-number">{line.lineNumber}</span>
            <span className="code-content">{line.content}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="page-container">
      <TerminalWindow
        title="Ghostty"
        tabs={tabs.map(tab => ({
          ...tab,
          active: tab.id === activeTab,
          onClick: () => setActiveTab(tab.id),
        }))}
        statusBar={
          <>
            <span>main</span>
            <span>VIEW</span>
          </>
        }
      >
        {activeTab === 'resume' ? (
          <div className="resume-embed-container" style={{
            width: '100%',
            height: '100%',
            minHeight: '500px',
          }}>
            <iframe
              src={resumePdfUrl}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '500px',
                border: '1px solid var(--terminal-border)',
                borderRadius: '8px',
                backgroundColor: '#fff',
              }}
              allow="autoplay"
              title="Resume PDF"
            />
          </div>
        ) : showTyping ? (
          <CodeTypingAnimation
            key={typingKey}
            lines={getCurrentLines()}
            speed={50}
            onComplete={() => setShowTyping(false)}
          />
        ) : (
          renderStaticContent()
        )}
      </TerminalWindow>

      <BottomNav />
    </div>
  );
};

export default AboutPage;
