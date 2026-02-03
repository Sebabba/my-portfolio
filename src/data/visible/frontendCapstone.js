import reservationForm from '../../images/reservation_form.png';
import reservationHome from '../../images/reservation_home.png';
import reservationJourney from '../../images/reservation_journey.png';
import reservationPersona from '../../images/reservation_persona.png';
import reservationWireframe from '../../images/reservation_wireframe.png';

const frontendCapstone = {
  id: 5,
  slug: 'frontendCapstone',
  title: 'Front-End Developer Capstone',
  shortDescription:
    'Final project for the Meta Front-End Developer Professional Certificate.',
  heroImage: null,
  gallery: [],
  tech: ['JavaScript', 'React', 'HTML'],
  content: [
    {
      type: 'text',
      value:
        'Project made as final test for the Meta Front-End Developer Professional Certificate. The project was about the creation and implementation of a table reservation for a restaurant, using Reactand the advanced features learned during the certification.',
    },
    {
      type: 'text',
      value:
        'The primary purpose of the assessment was to check the knowledge and understanding of the key learning objectives of the course.',
    },
    {
      type: 'text',
      value: 'The steps to complete the projects were:',
    },
    {
      type: 'unorderedList',
      value: [
        'Create a description of the problem and a solution',
        'Create a User Persona',
        'Create a Journey Map',
        'Create a Wireframe and Prototype on Figma, with a Style Guide',
        'Continue with the development of the new Feature',
      ],
    },
    {
      type: 'subtitle',
      value: 'Problem and Solution',
    },
    {
      type: 'Before starting with the design and development, I created a small paragraph explaining the problem I was facing and the solution, with the possible outcome and advantages for the owner of the restaurant.',
    },
    {
      type: 'subtitle',
      value: 'User Persona',
    },
    {
      type: 'text',
      value:
        'A User Persona is a detailed, fictional profile representing a target user segment. It usually contains:',
    },
    {
      type: 'unorderedList',
      value: [
        'Personal information (name, age, occupation, status, ...)',
        'A short bio',
        'Core needs and Goals',
        'Frustrations and Motivations',
      ],
    },
    {
      type: 'image',
      value: reservationPersona,
    },
    {
      type: 'subtitle',
      value: 'Journey Map',
    },
    {
      type: 'text',
      value:
        'A Journey Map is a visual representation of a user’s interaction with a product or website over time. It shows the various stages of the user experience (like the awareness, considerations, action, retention), the actions the user does at each stages, the emotions during each interaction, and the pain points and opportunities about that improvements can be made.',
    },
    {
      type: 'text',
      value:
        'The main purpose is to identify how the target user interact with the solution and identify possible problems, improve usability and design a pleasant experience.',
    },
    {
      type: 'image',
      value: reservationJourney,
    },
    {
      type: 'subtitle',
      value: 'Wireframe and Prototype',
    },
    {
      type: 'text',
      value:
        'Before the development, the Wireframe and Prototype for the new feature was created using Figma. During the Meta Front-End Developer Professional Certificate, a entire module was about Figma and how to use to design the UX/UI for web development.',
    },
    {
      type: 'image',
      value: reservationWireframe,
    },
    {
      type: 'subtitle',
      value: 'Development',
    },
    {
      type: 'text',
      value:
        'To implement the online reservation feature for the client, a new page with a form was created. The form let the user insert all the necessary information for the online reservation.',
    },
    {
      type: 'text',
      value:
        'For the available time slots, an API call is used to simulate the request to an external server.',
    },
    {
      type: 'image',
      value: reservationHome,
    },
    {
      type: 'text',
      value:
        'Also, Jest was used for Unit Testing from the start, to ensure code reliability and detect issues early in the build process. At the end, the project was evaluated with peer-review, to ensure the correct functioning across different devices and users.',
    },
    {
      type: 'image',
      value: reservationForm,
    },
  ],
  github: 'https://github.com/Sebabba/little-lemon-app',
  demo: 'https://little-lemon-app-ten.vercel.app',
  website: null,
};

export default frontendCapstone;
