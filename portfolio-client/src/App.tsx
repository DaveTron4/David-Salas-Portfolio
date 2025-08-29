// src/App.tsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Splash from "./components/Splash";
import Nav from "./components/Nav";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  const [showSplash, setShowSplash] = useState(true);


  return (
    <div className="min-h-screen flex flex-col">
      {showSplash && <Splash onFinish={() => setShowSplash(false)} />}
      {!showSplash && (
        <>
          <Nav />
          <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
