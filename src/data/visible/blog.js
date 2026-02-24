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
        'One of the projects I worked on at Tinext was the blog section for EOLO, one of the main internet providers in Italy. The goal was pretty clear: build something that could drive organic traffic and promote their products through content, without requiring a developer every time someone wanted to publish an article.',
    },
    {
      type: 'text',
      value:
        'The whole section was built with Magnolia CMS, which lets you create templates that the client can then use autonomously. In practice, this meant the editorial team at EOLO could write, edit, and manage articles on their own, decide what to highlight on the homepage, and adjust content in real time without opening a ticket to anyone.',
    },
    {
      type: 'image',
      value: blog_seo,
    },
    {
      type: 'text',
      value:
        "From a technical standpoint, a big part of the work was SEO. Beyond the usual basics, I implemented structured data to give search engines more explicit context about each page's content, it's one of those things that isn't immediately visible but makes a real difference in how pages get indexed and ranked.",
    },
    {
      type: 'text',
      value:
        "The result is a section that works on two levels: it gives the client full editorial autonomy, and it's built in a way that actually gets found. After launch, several articles started ranking on the first page of Google for keywords related to EOLO's products, which was exactly the point. Good SEO isn't just a technical checklist, it's what makes the content actually reach someone.",
    },
    {
      type: 'image',
      value: blog_detail,
    },
  ],
  github: null,
  demo: null,
  website: null,
};

export default blog;
