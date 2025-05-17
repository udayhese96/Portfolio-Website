
import { useParams, Link } from "react-router-dom";
import { usePortfolio } from "@/context/PortfolioContext";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { portfolioData } = usePortfolio();
  
  const post = portfolioData.blogPosts.find(post => post.id === Number(id));
  
  if (!post) {
    return <NotFound />;
  }
  
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-portfolio-blue hover:text-portfolio-dark mb-6">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-portfolio-dark mb-4">{post.title}</h1>
            <p className="text-portfolio-gray">Published on {post.date}</p>
          </div>
          
          <div className="mb-10 rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover" />
          </div>
          
          <div className="prose max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg leading-relaxed text-portfolio-gray">{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link to="/blog">
              <Button className="btn-primary">
                <ArrowLeft size={16} className="mr-2" /> Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPostPage;
