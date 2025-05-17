
import { usePortfolio } from "@/context/PortfolioContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPage = () => {
  const { portfolioData } = usePortfolio();
  const { blogPosts } = portfolioData;

  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-portfolio-dark mb-2">My Blog</h1>
          <p className="text-portfolio-gray mb-10 max-w-2xl">
            A collection of my achievements, learnings, and experiences in AI, machine learning, and software development.
          </p>

          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-portfolio-gray">No blog posts available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-portfolio-gray line-clamp-3">{post.content}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/blog/${post.id}`} className="w-full">
                      <Button variant="outline" className="w-full">Read More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
