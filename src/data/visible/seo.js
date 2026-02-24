import blog_seo from '../../images/blog_seo.png';

const seo = {
  id: 3,
  slug: 'seo',
  title: 'Website Seo Optimization',
  shortDescription:
    "Search Engine Optimization (SEO) optimization to enhance the site's indexing.",
  heroImage: null,
  gallery: null,
  tech: ['JavaScript', 'HTML', 'CSS', 'Magnolia CMS'],
  content: [
    {
      type: 'text',
      value:
        "SEO isn't always the most visible part of frontend work, but it's one of those areas where the impact is very concrete, either your pages show up, or they don't.",
    },
    {
      type: 'text',
      value:
        "For this project, I worked on a broad SEO optimization for a major client's website, with a specific focus on product indexing. The goal was to make their catalog more discoverable on search engines and drive more organic traffic without relying on paid ads.",
    },
    {
      type: 'image',
      value: blog_seo,
    },
    {
      type: 'text',
      value:
        'To enhance the SEO of the website, I implemented several strategies and optimizations:',
    },
    {
      type: 'orderedList',
      value: [
        'On-Page Optimization: Optimized meta titles, meta descriptions, and heading tags to make them relevant, concise, and aligned with target keywords.',
        'Technical SEO: Addressed site speed, mobile responsiveness, and broken links to improve both user experience and search engine crawlability.',
        'Structured Data Markup: Implemented Schema.org markup to give search engines additional context about the page content, improving visibility in rich snippets and other SERP features.',
        'Internal Linking: Optimized the internal linking structure to ensure efficient navigation and distribute link equity across key pages.',
        "Off-Page SEO: Engaged in off-page SEO activities such as building high-quality backlinks from reputable websites to improve the website's authority and credibility.",
        'Heading Optimization: Gave the client the ability to manage headings directly from the CMS, allowing them to adapt on-page content without involving developers.',
      ],
    },
    {
      type: 'text',
      value:
        'The results were visible in terms of increased organic traffic and better rankings, which, at the end of the day, is the whole point.',
    },
  ],
  github: null,
  demo: null,
  website: null,
};

export default seo;
