import { Row } from 'react-bootstrap';
import reservationForm from '../images/reservation_form.png';
import reservationHome from '../images/reservation_home.png';
import reservationJourney from '../images/reservation_journey.png';
import reservationPersona from '../images/reservation_persona.png';
import reservationWireframe from '../images/reservation_wireframe.png';

const CourseraCapstone = () => {
  return (
    <Row className="justify-content-center">
      <div className="d-flex flex-column col-lg-8">
        <div>
          <h1>Front-End Developer Capstone</h1>
          <p className="project-link">
            <a
              href="https://little-lemon-app-ten.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4"
            >
              <i class="fa-solid fa-earth-americas"></i> Go to website
            </a>
            <a
              href="https://github.com/Sebabba/little-lemon-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i> Go to GitHub
            </a>
          </p>
        </div>
        <div>
          <p>
            Project made as final test for the Meta Front-End Developer
            Professional Certificate. The project was about the creation and
            implementation of a table reservation for a restaurant, using React
            and the advanced features learned during the certification.
          </p>
          <p>
            The primary purpose of the assessment was to check the knowledge and
            understanding of the key learning objectives of the course.
          </p>
          <p>The steps to complete the projects were:</p>
          <ul>
            <li>Create a description of the problem and a solution</li>
            <li>Create a User Persona</li>
            <li>Create a Journey Map</li>
            <li>
              Create a Wireframe and Prototype on Figma, with a Style Guide
            </li>
            <li>Continue with the development of the new Feature</li>
          </ul>

          <h3>Problem and Solution</h3>
          <p>
            Before starting with the design and development, I created a small
            paragraph explaining the problem I was facing and the solution, with
            the possible outcome and advantages for the owner of the restaurant.
          </p>

          <h3>User Persona</h3>
          <p>
            A User Persona is a detailed, fictional profile representing a
            target user segment. It usually contains:
          </p>
          <ul>
            <li>Personal information (name, age, occupation, status, ...)</li>
            <li>A short bio</li>
            <li>Core needs and Goals</li>
            <li>Frustrations and Motivations</li>
          </ul>
          <div className="project-image">
            <img
              src={reservationPersona}
              className="w-100"
              alt="User persona"
            />
          </div>

          <h3>Journey Map</h3>
          <p>
            A Journey Map is a visual representation of a user’s interaction
            with a product or website over time. It shows the various stages of
            the user experience (like the awareness, considerations, action,
            retention), the actions the user does at each stages, the emotions
            during each interaction, and the pain points and opportunities about
            that improvements can be made.
          </p>
          <p>
            The main purpose is to identify how the target user interact with
            the solution and identify possible problems, improve usability and
            design a pleasant experience.
          </p>
          <div className="project-image">
            <img src={reservationJourney} className="w-100" alt="Journey map" />
          </div>

          <h3>Wireframe and Prototype</h3>
          <p>
            Before the development, the Wireframe and Prototype for the new
            feature was created using Figma. During the Meta Front-End Developer
            Professional Certificate, a entire module was about Figma and how to
            use to design the UX/UI for web development.
          </p>
          <div className="project-image">
            <img
              src={reservationWireframe}
              className="w-100"
              alt="Wireframe figma"
            />
          </div>

          <h3>Development</h3>
          <p>
            To implement the online reservation feature for the client, a new
            page with a form was created. The form let the user insert all the
            necessary information for the online reservation.
          </p>
          <p>
            For the available time slots, an API call is used to simulate the
            request to an external server.
          </p>
          <div className="project-image">
            <img
              src={reservationHome}
              className="w-100"
              alt="Project homepage"
            />
          </div>

          <p>
            Also, Jest was used for Unit Testing from the start, to ensure code
            reliability and detect issues early in the build process. At the
            end, the project was evaluated with peer-review, to ensure the
            correct functioning across different devices and users.
          </p>
          <div className="project-image">
            <img
              src={reservationForm}
              className="w-100"
              alt="Project reservation form"
            />
          </div>
        </div>
      </div>
    </Row>
  );
};

export default CourseraCapstone;
