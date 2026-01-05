import { useState, useEffect } from 'react';
import BottomNav from '../components/BottomNav';
import TerminalWindow from '../components/TerminalWindow';
import TypingAnimation from '../components/TypingAnimation';
import { Link } from 'react-router-dom';

// Sample blog data - replace with your actual blog data
const articlesData = [
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    excerpt: 'Learn the fundamentals of React including components, state, and props to build modern web applications.',
    date: '2024-12-15',
    readTime: '5 min read',
  },
  {
    slug: 'machine-learning-basics',
    title: 'Machine Learning Basics',
    excerpt: 'An introduction to machine learning concepts, algorithms, and practical applications in everyday technology.',
    date: '2024-11-28',
    readTime: '8 min read',
  },
  {
    slug: 'building-rest-apis',
    title: 'Building REST APIs with Node.js',
    excerpt: 'Step-by-step guide to creating robust REST APIs using Node.js, Express, and best practices for scalability.',
    date: '2024-11-10',
    readTime: '6 min read',
  },
  {
    slug: 'computer-vision-opencv',
    title: 'Computer Vision with OpenCV',
    excerpt: 'Explore image processing and computer vision techniques using OpenCV and Python for real-world applications.',
    date: '2024-10-22',
    readTime: '7 min read',
  },
];

const BlogPage = () => {
  const [visibleArticles, setVisibleArticles] = useState(0);
  const [typingComplete, setTypingComplete] = useState<boolean[]>(new Array(articlesData.length).fill(false));

  useEffect(() => {
    // Stagger article appearances
    if (visibleArticles < articlesData.length) {
      const timer = setTimeout(() => {
        setVisibleArticles(prev => prev + 1);
      }, visibleArticles === 0 ? 0 : 400); // First article appears immediately, others with 400ms delay

      return () => clearTimeout(timer);
    }
  }, [visibleArticles]);

  const handleTypingComplete = (index: number) => {
    setTypingComplete(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="page-container">
      <TerminalWindow title="Articles">
        <div className="grid-2">
          {articlesData.slice(0, visibleArticles).map((article, index) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="article-card"
            >
              <h3 className="article-card-title">
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
              <p className="article-card-excerpt">
                {typingComplete[index] || index < visibleArticles - 1 ? (
                  article.excerpt
                ) : (
                  <span style={{ opacity: 0 }}>{article.excerpt}</span>
                )}
              </p>
              <div className="flex justify-between items-center">
                <span className="article-card-meta">{article.date}</span>
                <span className="article-card-link">Read more &gt;&gt;</span>
              </div>
            </Link>
          ))}
        </div>
      </TerminalWindow>

      <BottomNav />
    </div>
  );
};

export default BlogPage;
