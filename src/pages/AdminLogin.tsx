import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Lock, Shield } from "lucide-react";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = login(password);
    if (success) {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid password. Please try again.");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400/10 border border-cyan-400/30 rounded-lg mb-4">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-3xl font-bold neon-text mb-2" style={{fontFamily: 'Orbitron, monospace'}}>
            ADMIN ACCESS
          </h1>
          <p className="text-cyan-200/60">Enter credentials to continue</p>
        </div>

        {/* Login Form */}
        <div className="cyber-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-cyan-300 text-sm font-medium mb-2 mono">
                PASSWORD
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400/60" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-cyan-400/30 rounded-lg text-cyan-200 placeholder-cyan-400/50 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Enter admin password"
                  required
                  autoFocus
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="cyber-button w-full flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              ACCESS DASHBOARD
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-cyan-400/60 hover:text-cyan-400 transition-colors text-sm"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
