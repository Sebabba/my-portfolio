import blog from './visible/blog';
import seo from './visible/seo';
import oneshot from './visible/oneshot';
import frontendCapstone from './visible/frontendCapstone';
import reactPortfolio from './visible/reactPortfolio';
import personalPortfolio from './visible/personalPortfolio';
import cityWebsite from './visible/cityWebsite';

// Project data for Homepage list
export const projectsListData = [
  {
    id: 1,
    title: 'EOLO Blog',
    description:
      "Blog section for EOLO. Created for SEO purposes to promote EOLO's products.",
    gitHubLink: '',
    detailLink: '/blog',
  },
  {
    id: 2,
    title: 'Weather app',
    description:
      'Simple weather app created with React. It shows th current weather from a city from an autocomplete text field.',
    gitHubLink: '',
    detailLink: '/weather-app',
  },
  {
    id: 3,
    title: 'EOLO SEO',
    description:
      "Search Engine Optimization (SEO) optimization to enhance the site's indexing.",
    gitHubLink: '',
    detailLink: '/eolo-seo',
  },
  {
    id: 4,
    title: 'One-shot Music Genre Classification',
    description:
      'University thesis project. Modification of a Convolutional Siamese Neural Network for music genres classification using the One-Shot approach.',
    gitHubLink: '',
    detailLink: '/oneshot',
  },
  {
    id: 5,
    title: 'Simple Flanger',
    description:
      'PAudio plugin available standalone or VST created with JUCE, a C++ framework.',
    gitHubLink: '',
    detailLink: 'simple-flanger',
  },
];

// Project data for details page
export const projects = [
  frontendCapstone,
  reactPortfolio,
  blog,
  seo,
  oneshot,
  personalPortfolio,
  cityWebsite,
];
