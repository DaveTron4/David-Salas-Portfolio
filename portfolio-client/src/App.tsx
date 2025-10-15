// src/App.tsx
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Splash from "./components/Splash";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);


  return (
    <div className="min-h-screen text-foreground">
      {showSplash && <Splash onFinish={() => setShowSplash(false)} />}
      {!showSplash && (
        <>
          <Nav />
          <div className="h-screen"></div>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
