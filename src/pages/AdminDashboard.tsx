import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { usePortfolio } from "@/context/PortfolioContext";
import {
  LayoutDashboard,
  FolderGit2,
  FileText,
  Mail,
  LogOut,
  User,
  BarChart3,
  Settings,
  Plus,
  Edit,
  Trash2,
  GraduationCap,
  Briefcase,
  Phone,
  MapPin,
  Globe
} from "lucide-react";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { portfolioData, addProject, updateProject, deleteProject, addBlogPost, updateBlogPost, deleteBlogPost, updateContact } = usePortfolio();
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"project" | "blog" | "experience" | "education" | "contact">("project");
  const [editingItem, setEditingItem] = useState<any>(null);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const stats = [
    { label: "Total Projects", value: portfolioData.projects.length.toString(), icon: FolderGit2, color: "cyan" },
    { label: "Blog Posts", value: portfolioData.blogPosts.length.toString(), icon: FileText, color: "blue" },
    { label: "Messages", value: portfolioData.messages.length.toString(), icon: Mail, color: "purple" },
    { label: "Contact Info", value: "Active", icon: User, color: "pink" }
  ];

  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "blog", label: "Blog Posts", icon: FileText },
    { id: "contact", label: "Contact Info", icon: Phone },
  ];

  const openModal = (type: "project" | "blog" | "experience" | "education" | "contact", item?: any) => {
    setModalType(type);
    setEditingItem(item || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleDelete = (type: "project" | "blog", id: number) => {
    if (confirm("Are you sure you want to delete this item?")) {
      if (type === "project") {
        deleteProject(id);
      } else if (type === "blog") {
        deleteBlogPost(id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-cyan-400/20 bg-gray-900/30 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-400/30 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold neon-text" style={{fontFamily: 'Orbitron, monospace'}}>
                  ADMIN DASHBOARD
                </h1>
                <p className="text-xs text-cyan-400/60">Portfolio Management System</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="cyber-card p-4 sticky top-24">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.id
                        ? "bg-cyan-400/20 border border-cyan-400/50 text-cyan-300"
                        : "text-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="cyber-card p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-lg flex items-center justify-center`}>
                          <stat.icon className={`w-6 h-6 text-cyan-400`} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-cyan-300 mb-1">{stat.value}</h3>
                      <p className="text-sm text-cyan-400/60">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="cyber-card p-6">
                  <h2 className="text-xl font-bold neon-text mb-4" style={{fontFamily: 'Orbitron, monospace'}}>
                    QUICK ACTIONS
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button
                      onClick={() => openModal("project")}
                      className="cyber-button flex items-center justify-center gap-2 py-4"
                    >
                      <Plus className="w-5 h-5" />
                      Add Project
                    </button>
                    <button
                      onClick={() => openModal("blog")}
                      className="cyber-button flex items-center justify-center gap-2 py-4"
                    >
                      <Plus className="w-5 h-5" />
                      New Blog Post
                    </button>
                    <button
                      onClick={() => openModal("contact")}
                      className="cyber-button flex items-center justify-center gap-2 py-4"
                    >
                      <Settings className="w-5 h-5" />
                      Edit Contact
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="cyber-card p-6">
                  <h2 className="text-xl font-bold neon-text mb-4" style={{fontFamily: 'Orbitron, monospace'}}>
                    RECENT ACTIVITY
                  </h2>
                  <div className="space-y-4">
                    {portfolioData.messages.slice(0, 3).map((message) => (
                      <div key={message.id} className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-cyan-400/10">
                        <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-400/30 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-cyan-300">{message.name} - {message.email}</p>
                          <p className="text-sm text-cyan-400/60">{message.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === "projects" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold neon-text" style={{fontFamily: 'Orbitron, monospace'}}>
                    MANAGE PROJECTS
                  </h2>
                  <button
                    onClick={() => openModal("project")}
                    className="cyber-button flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Project
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {portfolioData.projects.map((project) => (
                    <div key={project.id} className="cyber-card p-4">
                      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                      <h3 className="text-lg font-bold text-cyan-300 mb-2">{project.title}</h3>
                      <p className="text-sm text-cyan-400/60 mb-2 line-clamp-2">{project.description}</p>

                      {/* Project Links */}
                      <div className="flex gap-2 mb-3 text-xs">
                        {project.githubLink && (
                          <span className="px-2 py-1 bg-purple-400/10 border border-purple-400/30 rounded text-purple-300">
                            GitHub
                          </span>
                        )}
                        {project.liveLink && (
                          <span className="px-2 py-1 bg-green-400/10 border border-green-400/30 rounded text-green-300">
                            Live
                          </span>
                        )}
                        {project.driveLink && (
                          <span className="px-2 py-1 bg-blue-400/10 border border-blue-400/30 rounded text-blue-300">
                            Drive
                          </span>
                        )}
                        {project.screenshots && project.screenshots.length > 0 && (
                          <span className="px-2 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded text-yellow-300">
                            {project.screenshots.length} Screenshots
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2 flex-wrap mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded text-xs text-cyan-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => openModal("project", project)}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete("project", project.id)}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Tab */}
            {activeTab === "blog" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold neon-text" style={{fontFamily: 'Orbitron, monospace'}}>
                    MANAGE BLOG POSTS
                  </h2>
                  <button
                    onClick={() => openModal("blog")}
                    className="cyber-button flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Post
                  </button>
                </div>

                <div className="space-y-4">
                  {portfolioData.blogPosts.map((post) => (
                    <div key={post.id} className="cyber-card p-4">
                      <div className="flex gap-4">
                        <img src={post.image} alt={post.title} className="w-32 h-32 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-cyan-300 mb-2">{post.title}</h3>
                          <p className="text-sm text-cyan-400/60 mb-2 line-clamp-2">{post.content}</p>
                          <p className="text-xs text-cyan-400/40 mb-4">{post.date}</p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => openModal("blog", post)}
                              className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete("blog", post.id)}
                              className="flex items-center gap-2 px-3 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === "contact" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold neon-text" style={{fontFamily: 'Orbitron, monospace'}}>
                    CONTACT INFORMATION
                  </h2>
                  <button
                    onClick={() => openModal("contact", portfolioData.contact)}
                    className="cyber-button flex items-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Edit Contact
                  </button>
                </div>

                <div className="cyber-card p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-cyan-400/60">Email</p>
                      <p className="text-cyan-300 font-medium">{portfolioData.contact.email}</p>
                    </div>
                  </div>

                  {portfolioData.contact.phone && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-cyan-400/60">Phone</p>
                        <p className="text-cyan-300 font-medium">{portfolioData.contact.phone}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-cyan-400/60">Location</p>
                      <p className="text-cyan-300 font-medium">{portfolioData.contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          type={modalType}
          item={editingItem}
          onClose={closeModal}
          onSave={(data) => {
            if (modalType === "project") {
              if (editingItem) {
                updateProject({ ...data, id: editingItem.id });
              } else {
                addProject(data);
              }
            } else if (modalType === "blog") {
              if (editingItem) {
                updateBlogPost({ ...data, id: editingItem.id });
              } else {
                addBlogPost(data);
              }
            } else if (modalType === "contact") {
              updateContact(data);
            }
            closeModal();
          }}
        />
      )}
    </div>
  );
};

// Modal Component
const Modal = ({ type, item, onClose, onSave }: any) => {
  const [formData, setFormData] = useState(item || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="cyber-card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold neon-text mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
          {item ? 'EDIT' : 'ADD'} {type.toUpperCase()}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "project" && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                  />
                </div>
                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">Slug (URL-friendly) *</label>
                  <input
                    type="text"
                    required
                    value={formData.slug || ''}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                    placeholder="project-name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">Category *</label>
                  <select
                    required
                    value={formData.category || 'Frontend'}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="Computer Vision">Computer Vision</option>
                    <option value="Mobile">Mobile</option>
                    <option value="DevOps">DevOps</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 pt-8">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured || false}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 bg-gray-900/50 border border-cyan-400/30 rounded"
                  />
                  <label htmlFor="featured" className="text-cyan-300 text-sm font-medium">Featured Project</label>
                </div>
              </div>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Short Description *</label>
                <textarea
                  required
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                  rows={3}
                  placeholder="Brief description shown on project card"
                />
              </div>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Full Description (for modal)</label>
                <textarea
                  value={formData.fullDescription || ''}
                  onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                  rows={6}
                  placeholder="Detailed description with markdown support"
                />
              </div>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Main Image URL *</label>
                <input
                  type="text"
                  required
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Technologies (comma separated) *</label>
                <input
                  type="text"
                  required
                  value={Array.isArray(formData.technologies) ? formData.technologies.join(', ') : ''}
                  onChange={(e) => setFormData({ ...formData, technologies: e.target.value.split(',').map((t: string) => t.trim()) })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                  placeholder="React, Node.js, MongoDB"
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">Live Link</label>
                  <input
                    type="text"
                    value={formData.liveLink || ''}
                    onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">GitHub Link</label>
                  <input
                    type="text"
                    value={formData.githubLink || ''}
                    onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                    placeholder="https://github.com/..."
                  />
                </div>
                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">Google Drive Link</label>
                  <input
                    type="text"
                    value={formData.driveLink || ''}
                    onChange={(e) => setFormData({ ...formData, driveLink: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                    placeholder="https://drive.google.com/..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Screenshots (one URL per line)</label>
                <textarea
                  value={Array.isArray(formData.screenshots) ? formData.screenshots.join('\n') : ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    screenshots: e.target.value.split('\n').filter(url => url.trim() !== '')
                  })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                  rows={4}
                  placeholder="https://example.com/screenshot1.jpg&#10;https://example.com/screenshot2.jpg"
                />
                <p className="text-xs text-cyan-400/60 mt-1">Enter one screenshot URL per line</p>
              </div>

              {/* Project Details Section for "Know More" */}
              <div className="border-t border-cyan-400/20 pt-4 mt-4">
                <h3 className="text-lg font-bold text-cyan-300 mb-4">Project Details (for "Know More" section)</h3>

                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">Overview</label>
                  <textarea
                    value={formData.details?.overview || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      details: { ...formData.details, overview: e.target.value }
                    })}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                    rows={3}
                    placeholder="Detailed overview of the project..."
                  />
                </div>

                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">Features (one per line)</label>
                  <textarea
                    value={Array.isArray(formData.details?.features) ? formData.details.features.join('\n') : ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      details: {
                        ...formData.details,
                        features: e.target.value.split('\n').filter(f => f.trim() !== '')
                      }
                    })}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                    rows={4}
                    placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  />
                </div>

                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">Challenges</label>
                  <textarea
                    value={formData.details?.challenges || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      details: { ...formData.details, challenges: e.target.value }
                    })}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                    rows={2}
                    placeholder="Main challenges faced during development..."
                  />
                </div>

                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">Learnings</label>
                  <textarea
                    value={formData.details?.learnings || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      details: { ...formData.details, learnings: e.target.value }
                    })}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                    rows={2}
                    placeholder="Key learnings from this project..."
                  />
                </div>
              </div>
            </>
          )}

          {type === "blog" && (
            <>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  required
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                />
              </div>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Content</label>
                <textarea
                  required
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                  rows={5}
                />
              </div>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Image URL</label>
                <input
                  type="text"
                  required
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                />
              </div>
            </>
          )}

          {type === "contact" && (
            <>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email || ''}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                />
              </div>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Phone</label>
                <input
                  type="text"
                  value={formData.phone || ''}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                />
              </div>
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  required
                  value={formData.location || ''}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200"
                />
              </div>
            </>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-500/10 border border-gray-500/30 rounded-lg text-gray-400 hover:bg-gray-500/20 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 cyber-button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
