import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Homepage = () => {
  return (
    <div>
      <div id="hero" className="my-6 scroll-mt-20">
        <Hero />
      </div>
      <div id="about" className="mt-5 scroll-mt-20">
        <About />
      </div>
      <div id="skills" className="scroll-mt-20">
        <Skills />
      </div>
      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>
      <div id="contact" className="mb-6 scroll-mt-20">
        <Contact />
      </div>
    </div>
  );
};

export default Homepage;
