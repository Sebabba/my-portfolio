import portfolioImage from '../../images/personal_portfolio.png';

const personalPortfolio = {
  id: 7,
  slug: 'personalPortfolio',
  title: 'This Portfolio',
  shortDescription:
    "Personal portfolio made with React's various functionalities.",
  heroImage: null,
  gallery: [],
  tech: ['React', 'JavaScript', 'HTML', 'CSS'],
  content: [
    {
      type: 'text',
      value:
        'This personal portfolio was made with React and various tools for front-end development. Everything is documented in GitHub.',
    },
    {
      type: 'text',
      value:
        '(to change) In particular, the sub-pages management was made using the React Router library, useful to create a stable and fast implementation of sub-pages. Also, the build and deploy was made thanks to Vercel, which is perfect for React and Next.js. The portfolio is also responsive and works great on mobile. This was possible using Bootstrap.',
    },
    {
      type: 'image',
      value: portfolioImage,
    },
  ],
  github: 'https://github.com/Sebabba/my-portfolio',
  demo: 'https://portfolio-sebastianos-projects.vercel.app',
  website: null,
};

export default personalPortfolio;
