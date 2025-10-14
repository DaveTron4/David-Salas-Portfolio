import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="w-full  py-10 flex justify-center z-50 relative">
      <div className="glass-card rounded-2xl shadow-lg p-8 max-w-4xl w-full text-center text-gray-300">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-6">Let’s Connect</h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center justify-center gap-3">
            <Mail size={20} className="text-accent2" />
            <a href="mailto:davidtnt970@gmail.com" className="hover:text-accent1 text-text-color">
              davidtnt970@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 ">
            <MapPin size={20} className="text-accent2" />
            <span className="text-text-color">Atlanta, GA</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/david-salas-carrascal/"
            target="_blank"
            className="glass p-3 rounded-full hover:bg-primary/20 transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/DaveTron4"
            target="_blank"
            className="glass p-3 rounded-full hover:bg-primary/20 transition-colors duration-200"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} David Salas C. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;