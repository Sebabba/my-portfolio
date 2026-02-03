import magnolia from '../images/magnolia.png';
import mendrisio_new from '../images/mendrisio_new.png';
import mendrisio_old from '../images/mendrisio_old.png';
//import mendrisio_news from "../images/mendrisio_news.png"
import { Row } from 'react-bootstrap';

const Mendrisio = () => {
  return (
    <Row className="justify-content-center">
      <div className="d-flex flex-column col-lg-8">
        <div>
          <h1>Mendrisio Website</h1>
          <p className="project-link">
            <a
              href="https://mendrisio.ch/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-earth-americas"></i> Go to website
            </a>
          </p>
        </div>
        <div>
          <p>
            The Swiss city of Mendrisio requested the redesign of their personal
            website to make it more fruibile from the citizens and easier for
            the client.
          </p>
          <p>
            The old website was static and non visually pleasing. To modify even
            a small portion of the content, the participation of a technician
            was requested, meaning the result of a slow and tedious process. The
            old website can be seen here:
          </p>
          <div className="project-image">
            <img
              src={mendrisio_old}
              className="w-100"
              alt="Mendrisio old website"
            />
          </div>
          <p>
            To solve the various problems in the old version of the website, the
            possibility of the redesign of the website was offered, with also
            the implementation of Magnolia as CMS to make it more simple to
            modify the content of the website directly from the client.
          </p>
          <p>
            This entire section was developed using Magnolia CMS, a powerful
            content management system based on the Content Repository API for
            Java. This advanced platform facilitates developers in generating
            templates that grant the clients the ability to create articles
            autonomously. This feature significantly reduces the dependency on
            developers for content creation, thereby speeding up the overall
            process.
          </p>
          <div className="project-image">
            <img src={magnolia} className="w-100" alt="Magnolia platform" />
          </div>
          <p>
            The team for the implementation of Magnolia CMS consisted of 2
            software engineer. In particular, I personally worked more on the
            creation of the research, news, projects and services pages, with
            the implementation of a filter and in-page search to make the
            website navigation easier.
          </p>
          <p>
            The result is a more modern and pleasing website, other then easier
            to modify directly from the cliente, in almost every section of the
            website.
          </p>
          <div className="project-image">
            <img
              src={mendrisio_new}
              className="w-100"
              alt="Mendrisio new website"
            />
          </div>
          <p>
            Working on this project helped me to work in a team of people with
            different responsibilities, using various UI/UX tools (such as
            Figma) and development tools. Also, because of the nature of the
            website, I had the great possibilities to apply more complex
            JavaScript for the various sub-pages and the navigation.
          </p>
        </div>
      </div>
    </Row>
  );
};

export default Mendrisio;
