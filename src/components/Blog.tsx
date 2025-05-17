
import { usePortfolio } from "@/context/PortfolioContext";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const { portfolioData } = usePortfolio();
  const blogPosts = portfolioData?.blogPosts || [];
  
  // Display only the 3 most recent blog posts on the homepage
  const recentPosts = blogPosts.slice(0, 3);
  
  return (
    <section id="blog" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-6">
        <h2 className="section-title">My Blog</h2>
        <p className="section-subtitle">Recent Achievements</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
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
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-8">
              <p className="text-portfolio-gray">No blog posts available yet.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button className="btn-primary">View All Posts</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
