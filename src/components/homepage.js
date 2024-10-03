import Hero from './hero';
import About from './about';
import Skills from './skills';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        </>
    )
}

export default Homepage;