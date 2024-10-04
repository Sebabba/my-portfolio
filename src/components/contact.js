import Button from 'react-bootstrap/Button';

const Contact = () => {
    return(
        <div className="d-flex flex-column align-items-center text-center">
            <h2>Get In Touch</h2>
            <p>Feel free to get in touch with me for work opportunities or just to say hi! <br/>I'm always open to connecting.</p>
            <Button href="mailto:sebastiano.silipo98@gmail.com" className='cta-btn' variant="warning">Email me</Button>
        </div>
    )
}

export default Contact;