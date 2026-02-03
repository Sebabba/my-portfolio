import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Homepage = () => {
  return (
    <>
      <div className="justify-content-center mb-5">
        <Hero />
      </div>
      <div className="justify-content-center mt-5 mb-5">
        <About />
      </div>
      <div className="justify-content-center mt-5 mb-5">
        <Skills />
      </div>
      <div className="justify-content-center mt-5 mb-5">
        <Projects />
      </div>
      <div className="justify-content-center mt-5">
        <Contact />
      </div>
    </>
  );
};

export default Homepage;
