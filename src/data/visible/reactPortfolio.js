import coursera_portfolio_header from '../../images/coursera_portfolio_header.png';
import coursera_portfolio_form from '../../images/coursera_portfolio_form.png';

const reactPortfolio = {
  id: 6,
  slug: 'reactPortfolio',
  title: 'React Project Portfolio',
  shortDescription:
    'Project made during the Meta Front-End Developer Professional Certificate.',
  heroImage: null,
  gallery: [],
  tech: ['React', 'JavaScript', 'HTML', 'CSS'],
  content: [
    {
      type: 'text',
      value:
        'During the Meta Front-End Developer Professional Certificate, at the end of the module Advanced React, it was requested to create a personal portfolio using what was learned during this specific module. In particular, more advanced React functionalities, HTML, CSS and JavaScript. At the end of the development, the project was evaluated with peer-review.',
    },
    {
      type: 'image',
      value: coursera_portfolio_header,
    },
    {
      type: 'text',
      value: 'The portfolio had to contain:',
    },
    {
      type: 'unorderedList',
      value: [
        'A header with external links to social media accounts and internal links to other sections of the page.',
        'A landing section with an avatar picture and a short bio.',
        'A section to display your featured projects as cards in a grid fashion.',
        'A contact me section with a form to allow visitors to contact you.',
      ],
    },
    {
      type: 'text',
      value:
        'In particular, the form section should have all the check and validations for a correct implementation.',
    },
    {
      type: 'image',
      value: coursera_portfolio_form,
    },
    {
      type: 'text',
      value:
        'During the development, different popular external libraries were used:',
    },
    {
      type: 'subtitle',
      value: 'Chakra UI',
    },
    {
      type: 'text',
      value:
        'One of the most popular UI solutions is Chakra UI. Chakra UI is a simple, modular and accessible component library that provides you with the building blocks you need for your React applications.',
    },
    {
      type: 'subtitle',
      value: 'Formik and Yup',
    },
    {
      type: 'text',
      value:
        'Formik is another popular open-source library that helps you to create forms in React. The library takes care of the repetitive tasks of managing the state of the form, validation and submission, so you can focus on the business logic of your application. It does so by providing a set of components and hooks that you can plug into your forms.',
    },
    {
      type: 'text',
      value:
        'Yup is a JavaScript open-source library used to validate the form data before submitting it to the server. It provides a set of chainable operators that you can apply to your form fields to declaratively specify the validation rules.',
    },
    {
      type: 'text',
      value:
        'Formik comes with built-in support for schema based form-level validation through Yup, so they work together seamlessly.',
    },
    {
      type: 'text',
      value:
        'The most important component from Formik is the useFormik hook. This hook handles all the different states of your form. It only needs a configuration object as an argument.',
    },
  ],
  github: 'https://github.com/Sebabba/coursera_portfolio',
  demo: 'https://coursera-portfolio-three.vercel.app',
  website: null,
};

export default reactPortfolio;
