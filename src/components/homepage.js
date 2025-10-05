import Hero from './hero';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import Row from 'react-bootstrap/Row';

const Homepage = () => {
    return(
        <>
            <Row className='justify-content-center mb-5'>
                <Hero />
            </Row>
            <Row className='justify-content-center mt-5 mb-5'>
                <About />
            </Row>
            <Row className='justify-content-center mt-5 mb-5'>
                <Skills />
            </Row>
            <Row className='justify-content-center mt-5 mb-5'>
                <Projects />
            </Row>
            <Row className='justify-content-center mt-5'>
                <Contact />
            </Row>
        </>
    )
}

export default Homepage;