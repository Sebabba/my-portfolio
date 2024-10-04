import blog_seo from "../images/blog_seo.png";
import { Row } from "react-bootstrap";

const EoloSeo = () => {
    return(
        <Row className="justify-content-center">
            <div className="d-flex flex-column col-lg-8">
                <div>
                    <h1>EOLO SEO</h1>
                    <p className="project-link">
                        <a href="https://www.eolo.it/home/casa.html"><i class="fa-solid fa-earth-americas"></i> Go to website</a>
                    </p>
                </div>
                <div>
                    <p>
                        Search Engine Optimization, commonly known as SEO, is undoubtedly a vital aspect for any website. It is the
                        determining factor behind a website's visibility and its ranking on Search Engine Results Pages (SERPs) of
                        various search engines, including Google, Bing, and Yahoo. Achieving a high ranking in search results
                        significantly increases the likelihood of users visiting the site. This, in turn, leads to greater brand
                        exposure, increased organic traffic, and a higher probability of conversions, all of which are crucial for a
                        website's success.
                    </p>
                    <p>
                        In recent times, I have dedicated my efforts to improving the SEO for the website <a href="https://www.eolo.it/home/casa.html">eolo.it</a>. My work has primarily involved front-end optimizations
                        with the specific aim of enhancing product indexing. The objective behind this is to make the website's products
                        more easily discoverable on search engines, thereby driving more potential customers to the site and increasing
                        the chances of product purchases.
                    </p>
                    <div className="project-image">
                        <img src={blog_seo} className="w-100" alt="Blog SEO"/>
                    </div>
                    <p>
                        To enhance the SEO of <a href="https://www.eolo.it/home/casa.html">eolo.it</a>, I implemented several strategies and optimizations:
                    </p>
                    <ol>
                        <li>On-Page Optimization: Optimized meta titles, meta descriptions, and heading tags to ensure they are concise,
                            descriptive, and contain target keywords.</li>
                        <li>Technical SEO: Addressed technical issues such as site speed optimization, mobile responsiveness, and fixing
                            broken links to improve user experience and search engine crawlability.</li>
                        <li>Structured Data Markup: Implemented structured data markup, such as Schema.org markup, to provide search
                            engines with additional context about the website's content, enhancing its visibility in rich snippets and
                            other SERP features.</li>
                        <li>Internal Linking: Optimized internal linking structure to ensure efficient navigation and distribute link
                            equity to important pages across the site.</li>
                        <li>Off-Page SEO: Engaged in off-page SEO activities such as building high-quality backlinks from reputable
                            websites to improve the website's authority and credibility.</li>
                        <li>Heading Optimization: Provided the client with the ability to modify headings throughout the website,
                            ensuring flexibility in optimizing heading tags (H1, H2, etc.) for target keywords and improving the
                            overall structure and readability of the content.</li>
                    </ol>
                    <p>
                        Collectively, these efforts have made a significant contribution to improving the SEO performance of EOLO.
                        The results have been clearly visible in terms of increased organic traffic and better visibility in search
                        engine results. This goes to show the impact and importance of a well-executed SEO strategy for a website's
                        success.
                    </p>
                </div>
            </div>
        </Row>
    )
}

export default EoloSeo;