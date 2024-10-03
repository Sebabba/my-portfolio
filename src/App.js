import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './components/homepage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
    <Container className='App'>
      <Row className='justify-content-center align-items-center nav-container pb-md-3 pb-1 pt-md-3 pt-1'>
        <Col xs={8} sm={10} className='logo'>
          <Link to="/" className="nav-item">Sebastiano's Portfolio</Link>
        </Col>
        <Col xs={4} sm={2}>
          <Button href="#" download="Resume_PDF" target='_blank' rel="noferrer" className='cta-btn' variant="warning">Resume</Button>
        </Col>
      </Row>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Container>
  </>
  );
}

export default App;
