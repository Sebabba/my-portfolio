import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Homepage = () => {
  return (
    <div className="">
      <div className="my-6">
        <Hero />
      </div>
      <div className="mt-5">
        <About />
      </div>
      <div className="">
        <Skills />
      </div>
      <div className="my-5">
        <Projects />
      </div>
      <div className="my-5">
        <Contact />
      </div>
    </div>
  );
};

export default Homepage;
