import Row from 'react-bootstrap/Row';

const Footer = () => {
    return(
        <Row className='footer-container'>
            <hr />
            <div className='d-flex flex-row justify-content-around align-items-center'>
                <p>© {new Date().getFullYear()} Sebastiano's Portfolio</p>
                <div className='social-icons d-flex'>
                    <a
                        href="https://github.com/Sebabba"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sebastiano-silipo-5abb96239"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </Row>
    )
}

export default Footer;