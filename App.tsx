import React from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Chatbot from './components/Chatbot';
import Connect from './components/Connect';

const App: React.FC = () => {
  return (
    <div className="relative antialiased text-white font-sans overflow-x-hidden">
      <ParticleCanvas />
      <div className="relative z-10">
        <Hero />
        <main className="px-4 md:px-8">
          <Experience />
          <Projects />
          <Education />
          <Chatbot />
          <Skills />
          <Connect />
        </main>
      </div>
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Avaneesh Muddasani. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;