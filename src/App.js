import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './components/homepage';
import EoloBlog from './components/eoloBlog';
import WeatherApp from './components/weatherApp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
    <Container className='App'>
      <Row className='justify-content-center align-items-center nav-container pb-md-3 pb-1 pt-md-3 pt-1'>
        <Col className='logo'>
          <Link to="/" className="nav-item">Sebastiano's Portfolio</Link>
        </Col>
        <Col className='d-flex flex-row-reverse'>
          <Button href="#" download="Resume_PDF" target='_blank' rel="noferrer" className='cta-btn' variant="warning">Resume</Button>
        </Col>
      </Row>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/eolo-blog' element={<EoloBlog />} />
        <Route path='/weather-app' element={<WeatherApp />} />
      </Routes>
    </Container>
  </>
  );
}

export default App;
