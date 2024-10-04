import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <Row className='justify-content-center align-items-center nav-container pb-md-3 pb-1 pt-md-3 pt-1'>
            <Col className='logo'>
                <Link to="/" className="nav-item">Sebastiano's Portfolio</Link>
            </Col>
            <Col className='d-flex flex-row-reverse'>
                <Button href="#" download="Resume_PDF" target='_blank' rel="noferrer" className='cta-btn' variant="warning">Resume</Button>
            </Col>
        </Row>
    )
}

export default NavBar;