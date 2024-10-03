import blog_homepage from "../images/blog_homepage.png";
import blog_detail from "../images/blog_detail.png";
import blog_seo from "../images/blog_seo.png";
import { Row } from "react-bootstrap";

const EoloBlog = () => {
    return(
        <Row className="justify-content-center">
            <div className="d-flex flex-column col-lg-8">
                <div>
                    <h1>EOLO Blog</h1>
                    <p className="project-link">
                        <a href="https://www.eolo.it/home/blog.html"><i class="fa-solid fa-earth-americas"></i> Go to website</a>
                    </p>
                </div>
                <div>
                    <p>
                        The Blog section of the EOLO website serves as a powerful tool for the prominent Italian internet provider. It was
                        specifically created with Search Engine Optimization (SEO) in mind, promoting EOLO's products through well-crafted
                        articles. The main objective was to enhance the company's online presence and reach a broader audience while
                        simultaneously boosting the website's ranking on search engines.
                    </p>
                    <p>
                        This entire section was developed using Magnolia CMS, a powerful content management system based on
                        the Content Repository API for Java. This advanced platform facilitates developers in generating templates that grant
                        the clients the ability to create articles autonomously. This feature significantly reduces the dependency on developers
                        for content creation, thereby speeding up the overall process.
                    </p>
                    <div className="project-image">
                        <img src={blog_seo} className="w-100" alt="Blog SEO"/>
                    </div>
                </div>
            </div>
        </Row>
    )
}

export default EoloBlog;