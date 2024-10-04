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
                <div className="project-image">
                    <img src={blog_homepage} className="w-100" alt="Blog homepage"/>
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
                    <p>
                        Moreover, the system offers the possibility of adding structured data. This enhancement is a powerful way to improve
                        SEO as it provides search engines with explicit clues about the content on a web page. The use of structured data is a
                        proven method to improve web page ranking and visibility in search engines, ultimately driving more organic traffic to
                        the website.
                    </p>
                    <p>
                        The articles created through this system are well-indexed due to the particular attention paid to SEO. The SEO strategies
                        employed ensure that the content is easily discoverable by search engines, thus improving its visibility to potential
                        customers searching for relevant keywords.
                    </p>
                    <div className="project-image">
                        <img src={blog_detail} className="w-100" alt="Blog detail"/>
                    </div>
                    <p>
                        Much of the content in this section is editorial, which allows the client to be autonomous in content management.
                        They have the freedom to create, edit, or delete articles without the need to contact developers. This not only saves
                        time but also allows for real-time content adjustments as per the evolving needs of the business or market trends.
                    </p>
                    <p>
                        Additionally, clients have the flexibility to manage which articles to highlight. This feature is particularly beneficial
                        for promoting specific content, such as new product releases or special offers. The system also allows for the promotion
                        of highlighted articles even on the homepage, increasing their visibility and reach.
                    </p>
                </div>
            </div>
        </Row>
    )
}

export default EoloBlog;