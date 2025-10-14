import React, { useState, useEffect, useRef } from 'react';
import { Home, User, BriefcaseBusiness, Mail, BadgeCheck, Code } from 'lucide-react';
// import { useLocation, useNavigate } from "react-router-dom";

// --- Custom Hook for Scrollspy with TypeScript ---
const useScrollSpy = (sectionIds: string[], options?: IntersectionObserverInit): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // We instantiate the observer here, so it's safe to use observer.current below
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const elements = sectionIds.map(id => document.getElementById(id));
    elements.forEach(el => {
      // Ensure the element exists and the observer is initialized before observing
      if (el && observer.current) {
        observer.current.observe(el);
      }
    });

    // Cleanup function
    return () => {
      elements.forEach(el => {
        // Ensure the element exists and the observer is initialized before unobserving
        if (el && observer.current) {
          observer.current.unobserve(el);
        }
      });
    };
  }, [sectionIds, options]);

  return activeSection;
};

// Define a type for our navigation items for better safety
interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}



export default function Navbar() {
  // --- Original routing logic (commented out) ---
  // const location = useLocation();
  // const navigate = useNavigate();
  // const isActive = (path: string) => location.pathname === path;

  // --- New scroll-to-section logic ---
  const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
  const activeSection = useScrollSpy(sections, { rootMargin: '-50% 0px -50% 0px' });

  const handleNavClick = (sectionId: string) => {
    // Special case for 'home' to scroll to the absolute top
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // For all other sections, scroll to the element
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: BadgeCheck },
    { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="glass-nav flex justify-center items-center w-full">
      <div className="flex gap-4 md:gap-6 lg:gap-8 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              className={`${isActive ? "nav-button-active" : "nav-button-inactive"}`}
              onClick={() => handleNavClick(item.id)}
              // onClick={() => navigate(`/${item.id === 'home' ? '' : item.id}`)} // Original navigate logic
            >
              <Icon className="w-5 h-5 md:w-4 md:h-4 flex-shrink-0" />
              <span className="hidden sm:inline text-sm">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

