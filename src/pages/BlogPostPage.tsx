import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import TerminalWindow from '../components/TerminalWindow';
import TypingAnimation from '../components/TypingAnimation';

// Sample blog posts - in a real app, this would come from an API or CMS
const blogPosts: Record<string, { title: string; content: string; date: string; }> = {
  'getting-started-with-react': {
    title: 'Getting Started with React',
    date: '2024-12-15',
    content: `
React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Meta and a community of individual developers and companies.

## Why React?

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

## Key Concepts

- **Components**: Build encapsulated components that manage their own state
- **Declarative**: Design simple views for each state in your application
- **Learn Once, Write Anywhere**: Develop new features without rewriting existing code

## Getting Started

To create a new React app, you can use Create React App or Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
\`\`\`
    `,
  },
  'machine-learning-basics': {
    title: 'Machine Learning Basics',
    date: '2024-11-28',
    content: `
Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.

## Types of Machine Learning

1. **Supervised Learning**: The algorithm learns from labeled training data
2. **Unsupervised Learning**: The algorithm finds patterns in unlabeled data
3. **Reinforcement Learning**: The algorithm learns through trial and error

## Popular Libraries

- TensorFlow
- PyTorch
- Scikit-learn
- Keras
    `,
  },
  'building-rest-apis': {
    title: 'Building REST APIs with Node.js',
    date: '2024-11-10',
    content: `
REST (Representational State Transfer) is an architectural style for designing networked applications. Building RESTful APIs with Node.js and Express is straightforward and powerful.

## What is a REST API?

A REST API is an application programming interface that conforms to the constraints of REST architectural style. It allows for interaction with RESTful web services using standard HTTP methods.

## Core Principles

- **Stateless**: Each request contains all information needed
- **Client-Server**: Separation of concerns
- **Cacheable**: Responses must define themselves as cacheable or not
- **Uniform Interface**: Consistent way to interact with resources

## Building with Express

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`
    `,
  },
  'computer-vision-opencv': {
    title: 'Computer Vision with OpenCV',
    date: '2024-10-22',
    content: `
Computer Vision is a field of artificial intelligence that trains computers to interpret and understand the visual world. OpenCV (Open Source Computer Vision Library) is one of the most popular libraries for computer vision tasks.

## What is OpenCV?

OpenCV is an open-source computer vision and machine learning software library. It contains over 2500 optimized algorithms for various computer vision tasks.

## Common Applications

- **Face Detection**: Identify and locate human faces
- **Object Tracking**: Follow objects across video frames
- **Image Processing**: Enhance and manipulate images
- **Feature Detection**: Identify key points in images

## Getting Started with Python

\`\`\`python
import cv2

# Load an image
image = cv2.imread('image.jpg')

# Convert to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Display the image
cv2.imshow('Image', gray)
cv2.waitKey(0)
\`\`\`
    `,
  },
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;
  const [titleTypingComplete, setTitleTypingComplete] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  if (!post) {
    return (
      <div className="page-container">
        <TerminalWindow title="Article Not Found">
          <div className="text-center py-12">
            <h1 className="text-xl mb-4 text-[var(--terminal-highlight)]">404 - Article Not Found</h1>
            <p className="text-[var(--terminal-text-muted)] mb-6">
              The article you're looking for doesn't exist.
            </p>
            <Link to="/blog" className="text-[var(--terminal-text)] hover:text-[var(--terminal-highlight)]">
              &lt;&lt; Back to Articles
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

  return (
    <div className="page-container">
      <TerminalWindow title={`${slug}.md`}>
        <article className="max-w-2xl">
          <Link to="/blog" className="text-sm text-[var(--terminal-text-muted)] hover:text-[var(--terminal-text)] mb-4 inline-block">
            &lt;&lt; Back to Articles
          </Link>

          <h1 className="text-2xl font-medium text-[var(--terminal-highlight)] mb-2">
            {!titleTypingComplete ? (
              <TypingAnimation
                text={post.title}
                speed={25}
                onComplete={handleTitleComplete}
              />
            ) : (
              post.title
            )}
          </h1>

          {titleTypingComplete && (
            <p className="text-sm text-[var(--terminal-text-muted)] mb-8">
              {post.date}
            </p>
          )}

          {contentVisible && (
            <div className="prose prose-invert prose-sm max-w-none text-[var(--terminal-text)]">
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-lg font-medium text-[var(--terminal-highlight)] mt-6 mb-3">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const code = paragraph.replace(/```\w*\n?/g, '');
                  return (
                    <pre key={idx} className="code-block my-4 text-sm overflow-x-auto">
                      <code>{code}</code>
                    </pre>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={idx} className="list-disc list-inside my-3 space-y-1 text-[var(--terminal-text-muted)]">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.startsWith('1. ')) {
                  return (
                    <ol key={idx} className="list-decimal list-inside my-3 space-y-1 text-[var(--terminal-text-muted)]">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.replace(/^\d+\.\s/, '')}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={idx} className="my-3 text-[var(--terminal-text-muted)] leading-relaxed">
                    {paragraph}
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
