import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import DSA from './components/DSA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.className = darkMode ? '' : 'light';
  }, [darkMode]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', transition: 'background-color 0.3s ease' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        {/* <DSA /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
