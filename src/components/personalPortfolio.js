import {Row} from "react-bootstrap";
import personalPortfolio from "../images/personal_portfolio.png";

const PersonalPortfolio = () => {
    return(
        <Row className="justify-content-center">
            <div className="d-flex flex-column col-lg-8">
                <div>
                    <h1>Personal Portfolio</h1>
                    <p className="project-link">
                        <a href="https://portfolio-sebastianos-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="me-4"><i class="fa-solid fa-earth-americas"></i> Go to website</a>
                        <a href="https://github.com/Sebabba/my-portfolio" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i> Go to GitHub</a>
                    </p>
                </div>
                <div>
                    <p>
                        This personal portfolio was made with React and various tools for 
                        front-end development. Everything is documented in GitHub.
                    </p>
                    <p>
                        In particular, the sub-pages management was made using the React 
                        Router library, useful to create a stable and fast implementation of sub-pages. 
                        Also, the build and deploy was made thanks to Vercel, which is perfect for React and Next.js.
                        The portfolio is also responsive and works great on mobile. This 
                        was possible using Bootstrap.
                    </p>
                    <div className="project-image">
                        <img src={personalPortfolio} className="w-100" alt="Portfolio homepage"/>
                    </div>
                </div>
            </div>
        </Row>
    )
}

export default PersonalPortfolio;