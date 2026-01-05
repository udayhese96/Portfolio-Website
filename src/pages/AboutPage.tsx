import { useState, useEffect } from 'react';
import BottomNav from '../components/BottomNav';
import TerminalWindow from '../components/TerminalWindow';
import CodeTypingAnimation from '../components/CodeTypingAnimation';

type TabId = 'personal' | 'skills' | 'work';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<TabId>('personal');
  const [typingKey, setTypingKey] = useState(0);
  const [showTyping, setShowTyping] = useState(true);

  const tabs = [
    { id: 'personal' as TabId, label: 'personal.ts' },
    { id: 'skills' as TabId, label: 'skills.ts' },
    { id: 'work' as TabId, label: 'work.ts' },
  ];

  // Reset typing animation when tab changes
  useEffect(() => {
    setShowTyping(true);
    setTypingKey(prev => prev + 1);
  }, [activeTab]);

  // Define code lines with syntax highlighting for each tab
  const getPersonalLines = () => [
    { lineNumber: 1, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">developer</span> = {'{'}</> },
    { lineNumber: 2, content: <>  <span className="syntax-function">name</span>: <span className="syntax-string">"Uday Hese"</span>,</> },
    { lineNumber: 3, content: <>  <span className="syntax-function">role</span>: <span className="syntax-string">"Full Stack Developer"</span>,</> },
    { lineNumber: 4, content: <>  <span className="syntax-function">location</span>: <span className="syntax-string">"Pune, India"</span>,</> },
    { lineNumber: 5, content: <>  <span className="syntax-function">education</span>: <span className="syntax-string">"B.Tech CSE (AI) - VIIT"</span>,</> },
    { lineNumber: 6, content: <>  <span className="syntax-function">graduation</span>: <span className="syntax-string">"2026"</span>,</> },
    { lineNumber: 7, content: <>  <span className="syntax-function">cgpa</span>: <span className="syntax-variable">8.39</span>,</> },
    { lineNumber: 8, content: <>{'}'};</> },
    { lineNumber: 9, content: <></> },
    { lineNumber: 10, content: <><span className="syntax-comment">// About me</span></> },
    { lineNumber: 11, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">bio</span> = <span className="syntax-string">`</span></> },
    { lineNumber: 12, content: <><span className="syntax-string">  Hey, I'm Uday! A final-year CSE-AI student</span></> },
    { lineNumber: 13, content: <><span className="syntax-string">  passionate about building intelligent, scalable,</span></> },
    { lineNumber: 14, content: <><span className="syntax-string">  and real-world tech solutions.</span></> },
    { lineNumber: 15, content: <><span className="syntax-string">`</span>;</> },
    { lineNumber: 16, content: <></> },
    { lineNumber: 17, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">interests</span> = [</> },
    { lineNumber: 18, content: <>  <span className="syntax-string">"Full Stack Development"</span>,</> },
    { lineNumber: 19, content: <>  <span className="syntax-string">"Machine Learning"</span>,</> },
    { lineNumber: 20, content: <>  <span className="syntax-string">"Computer Vision"</span>,</> },
    { lineNumber: 21, content: <>  <span className="syntax-string">"Cloud Computing"</span>,</> },
    { lineNumber: 22, content: <>];</> },
  ];

  const getSkillsLines = () => [
    { lineNumber: 1, content: <><span className="syntax-keyword">interface</span> <span className="syntax-type">Skills</span> {'{'}</> },
    { lineNumber: 2, content: <>  <span className="syntax-function">languages</span>: <span className="syntax-type">string</span>[];</> },
    { lineNumber: 3, content: <>  <span className="syntax-function">frameworks</span>: <span className="syntax-type">string</span>[];</> },
    { lineNumber: 4, content: <>  <span className="syntax-function">databases</span>: <span className="syntax-type">string</span>[];</> },
    { lineNumber: 5, content: <>  <span className="syntax-function">tools</span>: <span className="syntax-type">string</span>[];</> },
    { lineNumber: 6, content: <>{'}'}</> },
    { lineNumber: 7, content: <></> },
    { lineNumber: 8, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">mySkills</span>: <span className="syntax-type">Skills</span> = {'{'}</> },
    { lineNumber: 9, content: <>  <span className="syntax-function">languages</span>: [</> },
    { lineNumber: 10, content: <>    <span className="syntax-string">"JavaScript"</span>, <span className="syntax-string">"TypeScript"</span>, <span className="syntax-string">"Python"</span>,</> },
    { lineNumber: 11, content: <>    <span className="syntax-string">"Java"</span>, <span className="syntax-string">"HTML"</span>, <span className="syntax-string">"CSS"</span>,</> },
    { lineNumber: 12, content: <>  ],</> },
    { lineNumber: 13, content: <>  <span className="syntax-function">frameworks</span>: [</> },
    { lineNumber: 14, content: <>    <span className="syntax-string">"React"</span>, <span className="syntax-string">"Node.js"</span>, <span className="syntax-string">"Django"</span>,</> },
    { lineNumber: 15, content: <>    <span className="syntax-string">"Flask"</span>, <span className="syntax-string">"TensorFlow"</span>, <span className="syntax-string">"PyTorch"</span>,</> },
    { lineNumber: 16, content: <>  ],</> },
    { lineNumber: 17, content: <>  <span className="syntax-function">databases</span>: [</> },
    { lineNumber: 18, content: <>    <span className="syntax-string">"MongoDB"</span>, <span className="syntax-string">"MySQL"</span>, <span className="syntax-string">"PostgreSQL"</span>,</> },
    { lineNumber: 19, content: <>  ],</> },
    { lineNumber: 20, content: <>  <span className="syntax-function">tools</span>: [</> },
    { lineNumber: 21, content: <>    <span className="syntax-string">"Git"</span>, <span className="syntax-string">"Docker"</span>, <span className="syntax-string">"Power BI"</span>,</> },
    { lineNumber: 22, content: <>    <span className="syntax-string">"Tableau"</span>, <span className="syntax-string">"VS Code"</span>,</> },
    { lineNumber: 23, content: <>  ],</> },
    { lineNumber: 24, content: <>{'}'};</> },
  ];

  const getWorkLines = () => [
    { lineNumber: 1, content: <><span className="syntax-keyword">type</span> <span className="syntax-type">Experience</span> = {'{'}</> },
    { lineNumber: 2, content: <>  <span className="syntax-function">company</span>: <span className="syntax-type">string</span>;</> },
    { lineNumber: 3, content: <>  <span className="syntax-function">role</span>: <span className="syntax-type">string</span>;</> },
    { lineNumber: 4, content: <>  <span className="syntax-function">duration</span>: <span className="syntax-type">string</span>;</> },
    { lineNumber: 5, content: <>{'}'};</> },
    { lineNumber: 6, content: <></> },
    { lineNumber: 7, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">experiences</span>: <span className="syntax-type">Experience</span>[] = [</> },
    { lineNumber: 8, content: <>  {'{'}</> },
    { lineNumber: 9, content: <>    <span className="syntax-function">company</span>: <span className="syntax-string">"VIIT Pune"</span>,</> },
    { lineNumber: 10, content: <>    <span className="syntax-function">role</span>: <span className="syntax-string">"AI/ML Research Intern"</span>,</> },
    { lineNumber: 11, content: <>    <span className="syntax-function">duration</span>: <span className="syntax-string">"2024 - Present"</span>,</> },
    { lineNumber: 12, content: <>  {'}'},</> },
    { lineNumber: 13, content: <>  {'{'}</> },
    { lineNumber: 14, content: <>    <span className="syntax-function">company</span>: <span className="syntax-string">"Freelance"</span>,</> },
    { lineNumber: 15, content: <>    <span className="syntax-function">role</span>: <span className="syntax-string">"Full Stack Developer"</span>,</> },
    { lineNumber: 16, content: <>    <span className="syntax-function">duration</span>: <span className="syntax-string">"2023 - Present"</span>,</> },
    { lineNumber: 17, content: <>  {'}'},</> },
    { lineNumber: 18, content: <>];</> },
  ];

  const getCurrentLines = () => {
    switch (activeTab) {
      case 'personal':
        return getPersonalLines();
      case 'skills':
        return getSkillsLines();
      case 'work':
        return getWorkLines();
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
        {showTyping ? (
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
