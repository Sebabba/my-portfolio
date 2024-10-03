import Hero from './hero';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Row from 'react-bootstrap/Row';

const Homepage = () => {
    return(
        <>
            <Row className='justify-content-center'>
                <Hero />
            </Row>
            <Row className='justify-content-center'>
                <About />
            </Row>
            <Row className='justify-content-center'>
                <Skills />
            </Row>
            <Row className='justify-content-center'>
                <Projects />
            </Row>
        </>
    )
}

export default Homepage;