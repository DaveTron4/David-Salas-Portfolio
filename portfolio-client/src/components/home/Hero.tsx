import { Mail, FileText, Github, Linkedin, ArrowDown } from "lucide-react"; // icons
import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { Button } from "../../ui/Button";

const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // --- Scroll Detection Logic ---
    useEffect(() => {
        const handleScroll = () => {
        // Set state to true if user has scrolled more than 50px, else false
        setIsScrolled(window.scrollY > 50);
        };

        // Add event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on component unmount
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient & elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-black/50 to-primary/50" />
        <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* --- This is the new animated container --- */}
          {/* It wraps all the content and controls the fade-out effect */}
          <motion.div
            className="text-center"
            animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? -20 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                    <span className="text-text-color">Hi, I'm </span>
                    <span className="bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">
                        David Salas C.
                    </span>
                </h1>
            </motion.div>
        
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 ">
                    Full Stack Developer
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Senior Computer Science student at Georgia State University specializing in full-stack development 
                and cybersecurity. Building secure, scalable applications that make a real impact.
                </p>
            </motion.div>


            {/* Primary button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
                <Button
                    onClick={() => scrollToSection("projects")}
                    size="lg"
                    className="glass hover:bg-primary/20 border-primary/30 px-8 py-3 rounded-full text-white"
                >
                    View My Work
                </Button>
                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="glass hover:bg-accent2/20 border-accent2/30 px-8 py-3 rounded-full text-white"
                >
                    <a
                        href="/Full_Stack_Resume_David_Salas.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FileText size={20} className="mr-2" />
                        Resume
                    </a>
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center space-x-6 mb-16"
            >
                <a
                href="https://github.com/DaveTron4"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:bg-primary/20 transition-colors duration-200"
                >
                <Github size={24} className="text-white"/>
                </a>
                <a
                href="https://www.linkedin.com/in/david-salas-carrascal/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:bg-primary/20 transition-colors duration-200"
                >
                <Linkedin size={24} className="text-white"/>
                </a>
                <a
                href="mailto:davidtnt970@gmail.com"
                className="glass p-3 rounded-full hover:bg-primary/20 transition-colors duration-200"
                >
                <Mail size={24} className="text-white"/>
                </a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="animate-bounce"
            >
                <ArrowDown size={32} className="text-muted-foreground mx-auto" />
            </motion.div>
          </motion.div>
        </div>
    </section>
  );
};

export default Hero;