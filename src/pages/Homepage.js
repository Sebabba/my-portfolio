import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Homepage = () => {
  return (
    <div>
      <div id="hero" className="my-6">
        <Hero />
      </div>
      <div id="about" className="mt-5">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact" className="mb-6">
        <Contact />
      </div>
    </div>
  );
};

export default Homepage;
