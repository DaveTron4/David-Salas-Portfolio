import { Home, User, Mail, FileText } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to check if a path is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="nav-bar">
      {/* Home button */}
      <button
        className={`flex items-center gap-2 p-2 rounded-full ${isActive("/") ? "nav-button-active" : "nav-button-inactive"}`}
        onClick={() => navigate("/")}
      >
        <Home className="w-4 h-4" />
        <span className="text-xs">Home</span>
      </button>

      {/* About button */}
      <button
        className={`flex items-center gap-2 p-2 rounded-full ${isActive("/about") ? "nav-button-active" : "nav-button-inactive"}`}
        onClick={() => navigate("/about")}
      >
        <User className="w-4 h-4" />
        <span className="text-xs">About</span>
      </button>

      {/* Projects Button */}
      <button
        className={`flex items-center gap-2 p-2 rounded-full ${isActive("/projects") ? "nav-button-active" : "nav-button-inactive"}`}
        onClick={() => navigate("/projects")}
      >
        <FileText className="w-4 h-4" />
        <span className="text-xs">Projects</span>
      </button>

      {/* Contact button */}
      <button
        className={`flex items-center gap-2 p-2 rounded-full ${isActive("/contact") ? "nav-button-active" : "nav-button-inactive"}`}
        onClick={() => navigate("/contact")}
      >
        <Mail className="w-4 h-4" />
        <span className="text-xs">Contact</span>
      </button>

      {/* Resume button */}
      {/* <button className="p-2 rounded-full text-white bg-purple-500 hover:bg-purple-600 transition">
        <FileText className="w-5 h-5" />
      </button> */}
    </nav>
  );
}