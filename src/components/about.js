import iceland from '../images/iceland.jpg';

const About = () => {
    return(
        <>
        <div className="col-lg-10">
            <div className='col-12'>
                <h2>About Me</h2>
            </div>
            
            <div className="d-flex flex-row align-items-center flex-wrap">
                <div className="col-12 col-md-7 pe-md-5">
                    <p>
                        As a software developer and engineer graduated in Music Information Science, I have always pursued diverse opportunities to expand my skill set and experience.
                    </p>
                    <p>
                        My primary focus is in front-end development, with languages such as HTML, CSS, JavaScript and React. I enjoying also working in back-end development, with experience in database management with NodeJS and MongoDB, AWS implementation for Serverless Functions and storage, and various tasks involving Java.
                    </p>
                    <p>
                        Throughout my journey, I contributed on a variety projects, ranging from building web applications from scratch to implementing SEO improvement for major clients.
                    </p>
                    <p>
                        Beyond my technical interests, I am an avid traveler and I love exploring new cultures. With a deep passion about art and music in particular, I always loved to share my interests with others.
                    </p>
                </div>
                <div className="col-10 col-md-5 d-none d-md-block">
                    <img src={iceland} className="about-img" alt="About me" />
                </div>
            </div>
        </div>
        </>
    )
}

export default About;