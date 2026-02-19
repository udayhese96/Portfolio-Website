import { useState, useEffect } from 'react';
import BottomNav from '../components/BottomNav';
import TerminalWindow from '../components/TerminalWindow';
import TypingAnimation from '../components/TypingAnimation';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

const BlogPage = () => {
  const { portfolioData } = usePortfolio();
  const articlesData = portfolioData.blogPosts;

  const [visibleArticles, setVisibleArticles] = useState(0);
  const [typingComplete, setTypingComplete] = useState<boolean[]>(new Array(articlesData.length).fill(false));

  useEffect(() => {
    setTypingComplete(new Array(articlesData.length).fill(false));
    setVisibleArticles(0);
  }, [articlesData.length]);

  useEffect(() => {
    if (visibleArticles < articlesData.length) {
      const timer = setTimeout(() => {
        setVisibleArticles(prev => prev + 1);
      }, visibleArticles === 0 ? 0 : 400);
      return () => clearTimeout(timer);
    }
  }, [visibleArticles, articlesData.length]);

  const handleTypingComplete = (index: number) => {
    setTypingComplete(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="page-container">
      <TerminalWindow title="Blog">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-[var(--terminal-highlight)]">
            <span className="mr-2">$</span>
            <span className="typing-text">ls ./blog</span>
          </h1>
          <p className="text-[var(--terminal-text-muted)] mb-2 ml-6">
            Thoughts, tutorials, and insights about software development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articlesData.slice(0, visibleArticles).map((article, index) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="article-card block p-6 rounded-lg border border-[var(--terminal-border)] hover:border-[var(--terminal-highlight)] transition-colors bg-[var(--terminal-bg)]"
              >
                <h3 className="article-card-title text-xl font-bold mb-3 text-[var(--terminal-highlight)]">
                  {index === visibleArticles - 1 && !typingComplete[index] ? (
                    <TypingAnimation
                      text={article.title}
                      speed={20}
                      onComplete={() => handleTypingComplete(index)}
                    />
                  ) : (
                    article.title
                  )}
                </h3>
                <p className="article-card-excerpt text-sm text-[var(--terminal-text-muted)] mb-4">
                  {typingComplete[index] || index < visibleArticles - 1 ? (
                    article.excerpt
                  ) : (
                    <span style={{ opacity: 0 }}>{article.excerpt}</span>
                  )}
                </p>
                <div className="flex justify-between items-center">
                  <span className="article-card-meta text-xs text-[var(--terminal-text-muted)]">{article.date}</span>
                  <span className="article-card-link text-sm text-[var(--terminal-highlight)]">Read more &gt;&gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </TerminalWindow>

      <BottomNav />
    </div>
  );
};

export default BlogPage;
