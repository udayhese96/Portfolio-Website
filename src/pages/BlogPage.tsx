
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPage = () => {
  const [posts, setPosts] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/data/posts.json');
        if (!res.ok) throw new Error('Failed to load posts');
        const data = await res.json();
        setPosts(data);
      } catch (e: any) {
        setError(e?.message || 'Failed to load posts');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <section className="pt-32 pb-20 min-h-screen">
          <div className="container mx-auto px-8 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-cyan-400/10 border border-cyan-400/30 mb-6">
                <span className="text-cyan-300 text-sm font-medium tracking-wide mono">BLOG.EXE</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold neon-text mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
                DIGITAL CHRONICLES
              </h1>
              <p className="text-xl text-cyan-200/80 max-w-2xl mx-auto">
                A collection of my achievements, learnings, and experiences in AI, machine learning, and software development.
              </p>
            </div>

            {loading && (
              <div className="text-center py-20 text-cyan-300/70">Loading posts…</div>
            )}

            {error && (
              <div className="text-center py-20">
                <div className="cyber-card p-8 max-w-md mx-auto text-red-300">
                  <p className="text-lg">{error}</p>
                </div>
              </div>
            )}

            {!loading && !error && posts.length === 0 && (
              <div className="text-center py-20">
                <div className="cyber-card p-8 max-w-md mx-auto">
                  <p className="text-lg text-cyan-200/60 mb-4">No blog posts available yet.</p>
                  <p className="text-sm text-cyan-300/40">Stay tuned for upcoming content!</p>
                </div>
              </div>
            )}

            {!loading && !error && posts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <div key={post.id} className="cyber-card overflow-hidden hover:scale-105 transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.heroImage}
                        alt={post.imageAlt || post.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold neon-blue-text mb-2" style={{fontFamily: 'Orbitron, monospace'}}>
                        {post.title}
                      </h3>
                      <time dateTime={post.publishedAt} className="text-cyan-400/60 text-sm mb-4 mono block">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </time>
                      <p className="text-cyan-200/80 line-clamp-3 mb-6">{(post.excerpt || '').slice(0, 150)}</p>
                      <Link to={`/blog/${post.slug}`} className="cyber-button w-full inline-block text-center">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
