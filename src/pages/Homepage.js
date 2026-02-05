import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Homepage = () => {
  return (
    <div>
      <div className="my-6">
        <Hero />
      </div>
      <div className="mt-5">
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Homepage;
