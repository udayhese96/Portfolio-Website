
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/data/posts.json');
        if (!res.ok) throw new Error('Failed to load posts');
        const posts = await res.json();
        const found = posts.find((p: any) => p.slug === slug);
        setPost(found || null);
        if (!found) setError('Post not found');
      } catch (e: any) {
        setError(e?.message || 'Failed to load post');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-center pt-32 text-cyan-300/70">Loading…</div>
    );
  }

  if (error || !post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-portfolio-blue hover:text-portfolio-dark mb-6">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold neon-text mb-3" style={{fontFamily: 'Orbitron, monospace'}}>{post.title}</h1>
            <p className="text-cyan-300/70 mono">
              <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </p>
          </header>

          <figure className="mb-10 rounded-xl overflow-hidden">
            <img src={post.heroImage} alt={post.imageAlt || post.title} className="w-full h-auto max-h-[500px] object-cover" />
          </figure>

          <article className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {Array.isArray(post.tags) && post.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag: string) => (
                <li key={tag} className="text-xs bg-portfolio-light text-portfolio-dark px-3 py-1 rounded-full">{tag}</li>
              ))}
            </ul>
          )}

          <div className="mt-10 pt-8 border-t border-cyan-400/20">
            <Link to="/blog" className="cyber-button inline-flex items-center">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
