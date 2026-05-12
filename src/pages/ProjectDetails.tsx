import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import TerminalWindow from "../components/TerminalWindow";
import TypingAnimation from "../components/TypingAnimation";
import { projectsData } from "./ProjectsPage";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.slug === id);
  const [descTypingComplete, setDescTypingComplete] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);

  if (!project) {
    return (
      <div className="page-container">
        <TerminalWindow title="404">
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--terminal-highlight)' }}>
              Project Not Found
            </h1>
            <p className="mb-6" style={{ color: 'var(--terminal-text-muted)' }}>
              The project you are looking for doesn't exist.
            </p>
            <Link
              to="/projects"
              className="px-4 py-2 rounded"
              style={{
                backgroundColor: 'var(--terminal-bg-tertiary)',
                color: 'var(--terminal-text)',
                border: '1px solid var(--terminal-border)'
              }}
            >
              ← Back to Projects
            </Link>
          </div>
        </TerminalWindow>
        <BottomNav />
      </div>
    );
  }

  // GitHub Icon
  const GitHubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  // Google Drive Icon
  const DriveIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.71 3.5L1.15 15l4.58 8h13.54l4.58-8L17.29 3.5H7.71zM8.71 5h6.58l5.14 9H3.57l5.14-9zm-4.33 10h15.24l-2.29 4H6.67l-2.29-4z" />
    </svg>
  );

  const handleDescComplete = () => {
    setDescTypingComplete(true);
    setTimeout(() => setFeaturesVisible(true), 200);
  };

  return (
    <div className="page-container">
      <TerminalWindow
        title="Ghostty"
        statusBar={
          <>
            <span>↙ main</span>
            <span>-- VIEW --</span>
          </>
        }
      >
        {/* Filter Tabs - same as projects page for consistency */}
        <div className="wis-filter-tabs">
          <Link to="/projects" className="wis-filter-tab">All Projects</Link>
          <span className="wis-filter-tab wis-filter-tab-active">❖ {project.category}</span>
        </div>

        {/* Project Content */}
        <div className="project-detail">
          {/* Image Gallery */}
          <div className="project-detail-gallery">
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                className="project-detail-image"
              />
            ))}
          </div>

          {/* Description with Typing Animation */}
          <div className="project-detail-content">
            <p className="project-detail-desc">
              {!descTypingComplete ? (
                <TypingAnimation
                  text={project.fullDescription}
                  speed={15}
                  onComplete={handleDescComplete}
                />
              ) : (
                <>
                  {project.fullDescription}{' '}
                  <a
                    href={project.githubLink || project.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    <span className="inline-flex items-center gap-1">
                      {project.githubLink ? <GitHubIcon /> : <DriveIcon />}
                      Preview
                    </span>
                  </a>
                </>
              )}
            </p>
          </div>

          {/* Features Section with Typing Animation */}
          {featuresVisible && (
            <div className="project-detail-features">
              <h2 className="project-detail-features-title">
                <TypingAnimation text="Features" speed={30} />
              </h2>
              <ul className="project-detail-features-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="project-detail-feature">
                    <span className="project-detail-feature-title">
                      {feature.split(':')[0]}:
                    </span>
                    {' '}{feature.split(':')[1]}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {featuresVisible && (project as any).workflowImage && (
            <div className="project-detail-section mt-10">
              <h2 className="project-detail-features-title mb-6">
                <TypingAnimation text="Workflow Architecture" speed={30} />
              </h2>
              <div className="rounded-lg overflow-hidden border border-cyan-400/30 p-2 bg-black/40">
                <img 
                  src={(project as any).workflowImage} 
                  alt="Workflow Architecture" 
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          )}

          {featuresVisible && (project as any).resultsImages && (project as any).resultsImages.length > 0 && (
            <div className="project-detail-section mt-10">
              <h2 className="project-detail-features-title mb-6">
                <TypingAnimation text="Results" speed={30} />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(project as any).resultsImages.map((img: string, idx: number) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-cyan-400/30 p-2 bg-black/40">
                    <img 
                      src={img} 
                      alt={`Result ${idx + 1}`} 
                      className="w-full h-auto rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </TerminalWindow>

      <BottomNav />
    </div>
  );
};

export default ProjectDetails;
