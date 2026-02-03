import coursera_portfolio_header from '../images/coursera_portfolio_header.png';
import coursera_portfolio_form from '../images/coursera_portfolio_form.png';
import { Row } from 'react-bootstrap';

const CourseraPortfolio = () => {
  return (
    <Row className="justify-content-center">
      <div className="d-flex flex-column col-lg-8">
        <div>
          <h1>React Project Portfolio</h1>
          <p className="project-link">
            <a
              href="https://coursera-portfolio-three.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4"
            >
              <i className="fa-solid fa-earth-americas"></i> Go to website
            </a>
            <a
              href="https://github.com/Sebabba/coursera_portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i> Go to GitHub
            </a>
          </p>
        </div>
        <div>
          <p>
            During the Meta Front-End Developer Professional Certificate, at the
            end of the module Advanced React, it was requested to create a
            personal portfolio using what was learned during this specific
            module. In particular, more advanced React functionalities, HTML,
            CSS and JavaScript. At the end of the development, the project was
            evaluated with peer-review.
          </p>
          <div className="project-image">
            <img
              src={coursera_portfolio_header}
              className="w-100"
              alt="Portfolio header"
            />
          </div>
          <p>The portfolio had to contain:</p>
          <ul>
            <li>
              A header with external links to social media accounts and internal
              links to other sections of the page.
            </li>
            <li>A landing section with an avatar picture and a short bio.</li>
            <li>
              A section to display your featured projects as cards in a grid
              fashion.
            </li>
            <li>
              A contact me section with a form to allow visitors to contact you.
            </li>
          </ul>
          <p>
            In particular, the form section should have all the check and
            validations for a correct implementation.
          </p>
          <div className="project-image">
            <img
              src={coursera_portfolio_form}
              className="w-100"
              alt="Portfolio form"
            />
          </div>
          <p>
            During the development, different popular external libraries were
            used:
          </p>
          <h3>Chakra UI</h3>
          <p>
            One of the most popular UI solutions is Chakra UI. Chakra UI is a
            simple, modular and accessible component library that provides you
            with the building blocks you need for your React applications.
          </p>
          <h3>Formik and Yup</h3>
          <p>
            Formik is another popular open-source library that helps you to
            create forms in React. The library takes care of the repetitive
            tasks of managing the state of the form, validation and submission,
            so you can focus on the business logic of your application. It does
            so by providing a set of components and hooks that you can plug into
            your forms.
          </p>
          <p>
            Yup is a JavaScript open-source library used to validate the form
            data before submitting it to the server. It provides a set of
            chainable operators that you can apply to your form fields to
            declaratively specify the validation rules.
          </p>
          <p>
            Formik comes with built-in support for schema based form-level
            validation through Yup, so they work together seamlessly.
          </p>
          <p>
            The most important component from Formik is the useFormik hook. This
            hook handles all the different states of your form. It only needs a
            configuration object as an argument.
          </p>
        </div>
      </div>
    </Row>
  );
};

export default CourseraPortfolio;
