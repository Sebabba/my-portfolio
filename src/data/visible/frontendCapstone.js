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
      type: 'subtitle',
      value: 'Problem and Solution',
    },
    {
      type: 'text',
      value:
        'This project was the final assessment for the Meta Front-End Developer Professional Certificate. The goal was to design and build an online table reservation feature for a restaurant, from the initial UX research all the way to the working implementation.',
    },
    {
      type: 'text',
      value:
        "It was a good exercise in following a real product workflow: you don't just open your editor and start coding. You start by understanding the problem.",
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
      type: 'text',
      value:
        'Before starting with the design and development, I created a small paragraph explaining the problem I was facing and the solution, with the possible outcome and advantages for the owner of the restaurant.',
    },
    {
      type: 'subtitle',
      value: 'User Persona',
    },
    {
      type: 'text',
      value:
        'Before writing a single line of code, I defined who I was building for. A User Persona is basically a fictional but realistic profile of your target user, name, age, job, habits, frustrations, goals. It sounds like a formality, but it actually forces you to think about the person on the other side of the screen instead of just the features you want to build.',
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
        "Once I had a clear picture of the user, I mapped out their experience step by step, from the moment they land on the site to completing a reservation. A Journey Map highlights what the user is doing, thinking, and feeling at each stage, and more importantly, where things might go wrong. It's a useful way to spot friction points before they become real problems.",
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
        'With the research done, I moved to Figma to design the wireframes and an interactive prototype, including a basic style guide for colors, typography, and components. Having a prototype to reference during development made the whole process smoother, fewer "wait, how should this look?" moments mid-build.',
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
        'The actual implementation is a React page with a reservation form covering all the info a restaurant would need. Available time slots are fetched via an API call, simulating a real backend interaction. I also wrote unit tests with Jest throughout the build, not as an afterthought, but from the start — to catch issues early and keep the code reliable.',
    },
    {
      type: 'text',
      value:
        'The project was then peer-reviewed to verify it worked correctly across different devices and browsers.',
    },
    {
      type: 'image',
      value: reservationHome,
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
