import blog_homepage from '../../images/blog_homepage.png';
import blog_seo from '../../images/blog_seo.png';
import blog_detail from '../../images/blog_detail.png';

const blog = {
  id: 1,
  slug: 'blog',
  title: 'Blog Section',
  shortDescription: 'Blog section made with Magnolia CMS and SEO Optimization',
  heroImage: blog_homepage,
  gallery: [],
  tech: ['JavaScript', 'HTML', 'Magnolia CMS', 'CSS', 'SEO Optimization'],
  content: [
    {
      type: 'text',
      value:
        "The Blog section of the EOLO website serves as a powerful tool for the prominent Italian internet provider. It was specifically created with Search Engine Optimization (SEO) in mind, promoting EOLO's products through well-crafted articles. The main objective was to enhance the company's online presence and reach a broader audience while simultaneously boosting the website's ranking on search engines.",
    },
    {
      type: 'text',
      value:
        'This entire section was developed using Magnolia CMS, a powerful content management system based on the Content Repository API for Java. This advanced platform facilitates developers in generating templates that grant the clients the ability to create articles autonomously. This feature significantly reduces the dependency on developers for content creation, thereby speeding up the overall process.',
    },
    {
      type: 'image',
      value: blog_seo,
    },
    {
      type: 'text',
      value:
        'Moreover, the system offers the possibility of adding structured data. This enhancement is a powerful way to improve SEO as it provides search engines with explicit clues about the content on a web page. The use of structured data is a proven method to improve web page ranking and visibility in search engines, ultimately driving more organic traffic to the website.',
    },
    {
      type: 'text',
      value:
        'The articles created through this system are well-indexed due to the particular attention paid to SEO. The SEO strategies employed ensure that the content is easily discoverable by search engines, thus improving its visibility to potential customers searching for relevant keywords.',
    },
    {
      type: 'image',
      value: blog_detail,
    },
    {
      type: 'text',
      value:
        'Much of the content in this section is editorial, which allows the client to be autonomous in content management. They have the freedom to create, edit, or delete articles without the need to contact developers. This not only saves time but also allows for real-time content adjustments as per the evolving needs of the business or market trends.',
    },
    {
      type: 'text',
      value:
        'Additionally, clients have the flexibility to manage which articles to highlight. This feature is particularly beneficial for promoting specific content, such as new product releases or special offers. The system also allows for the promotion of highlighted articles even on the homepage, increasing their visibility and reach.',
    },
  ],
  github: null,
  demo: null,
  website: null,
};

export default blog;
