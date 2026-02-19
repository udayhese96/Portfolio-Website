import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import TerminalWindow from '../components/TerminalWindow';
import TypingAnimation from '../components/TypingAnimation';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, ExternalLink, Link as LinkIcon, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { portfolioData } = usePortfolio();
  const post = portfolioData.blogPosts.find(p => p.slug === slug);

  const [titleTypingComplete, setTitleTypingComplete] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // If viewing the new post via ID link from old component (fallback)
  const postById = !post && slug && !isNaN(Number(slug))
    ? portfolioData.blogPosts.find(p => p.id === Number(slug))
    : null;

  const activePost = post || postById;

  useEffect(() => {
    // Reset state when slug changes
    setTitleTypingComplete(false);
    setContentVisible(false);
  }, [slug]);

  if (!activePost) {
    return (
      <div className="page-container">
        <TerminalWindow title="Blog Post Not Found">
          <div className="text-center py-12">
            <h1 className="text-xl mb-4 text-[var(--terminal-highlight)]">404 - Blog Post Not Found</h1>
            <p className="text-[var(--terminal-text-muted)] mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blog" className="text-[var(--terminal-text)] hover:text-[var(--terminal-highlight)]">
              &lt;&lt; Back to Blog
            </Link>
          </div>
        </TerminalWindow>
        <BottomNav />
      </div>
    );
  }

  const handleTitleComplete = () => {
    setTitleTypingComplete(true);
    setTimeout(() => setContentVisible(true), 200);
  };

  const getHeaderIcon = (iconType?: "award" | "link" | "github") => {
    switch (iconType) {
      case "award":
        return <Award className="h-5 w-5" />;
      case "github":
        return <Github className="h-5 w-5" />;
      case "link":
      default:
        return <LinkIcon className="h-5 w-5" />;
    }
  };

  return (
    <div className="page-container">
      <TerminalWindow title={`${activePost.slug || 'post'}.md`}>
        <article className="max-w-2xl">
          <Link to="/blog" className="text-sm text-[var(--terminal-text-muted)] hover:text-[var(--terminal-text)] mb-4 inline-block">
            &lt;&lt; Back to Blog
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <h1 className="text-2xl font-medium text-[var(--terminal-highlight)] flex-1">
              {!titleTypingComplete ? (
                <TypingAnimation
                  text={activePost.title}
                  speed={25}
                  onComplete={handleTitleComplete}
                />
              ) : (
                activePost.title
              )}
            </h1>

            {/* Actions Column */}
            <div className="flex flex-col items-end gap-2 mt-1">
              {activePost.headerLink && (
                <a
                  href={activePost.headerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors shrink-0"
                  title={activePost.headerLinkLabel || "View Link"}
                >
                  {getHeaderIcon(activePost.headerLinkIcon)}
                  <span className="text-sm font-medium">{activePost.headerLinkLabel || "View Link"}</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              )}

              {activePost.secondaryLink && (
                <a
                  href={activePost.secondaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[var(--terminal-text-muted)] hover:text-[var(--terminal-highlight)] transition-colors shrink-0"
                  title={activePost.secondaryLinkLabel || "View Link"}
                >
                  {getHeaderIcon(activePost.secondaryLinkIcon)}
                  <span className="text-sm font-medium">{activePost.secondaryLinkLabel || "View Link"}</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              )}
            </div>
          </div>

          {titleTypingComplete && (
            <p className="text-sm text-[var(--terminal-text-muted)] mb-8">
              {activePost.date}
            </p>
          )}

          {contentVisible && (
            <div className="prose prose-invert prose-sm max-w-none text-[var(--terminal-text)]">
              {activePost.content.split('\n\n').map((paragraph, idx) => {
                const parseBold = (text: string) => {
                  const parts = text.split(/(\*\*.*?\*\*)/g);
                  return parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i} className="text-[var(--terminal-highlight)] font-bold">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  });
                };

                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-xl font-bold text-[var(--terminal-highlight)] mt-8 mb-4 border-b border-[var(--terminal-border)] pb-2">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-lg font-bold text-[var(--terminal-highlight)] mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const code = paragraph.replace(/```\w*\n?/g, '').replace(/```$/, '');
                  return (
                    <pre key={idx} className="code-block my-4 p-4 rounded bg-[var(--terminal-bg-dark)] border border-[var(--terminal-border)] text-sm overflow-x-auto">
                      <code>{code}</code>
                    </pre>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={idx} className="list-disc list-inside my-3 space-y-1 text-[var(--terminal-text-muted)]">
                      {paragraph.split('\n').filter(Boolean).map((item, i) => (
                        <li key={i}>{parseBold(item.replace('- ', ''))}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d+\.\s/)) {
                  return (
                    <ol key={idx} className="list-decimal list-inside my-3 space-y-1 text-[var(--terminal-text-muted)]">
                      {paragraph.split('\n').filter(Boolean).map((item, i) => (
                        <li key={i}>{parseBold(item.replace(/^\d+\.\s/, ''))}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={idx} className="my-3 text-[var(--terminal-text-muted)] leading-relaxed">
                    {parseBold(paragraph)}
                  </p>
                );
              })}
            </div>
          )}
        </article>
      </TerminalWindow>

      <BottomNav />
    </div>
  );
};

export default BlogPostPage;
