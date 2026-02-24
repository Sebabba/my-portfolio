import iceland from '../images/iceland.jpg';

const About = () => {
  return (
    <>
      <div>
        <div className="py-4 border-b border-[#2e2d25] dark:border-[#787878]">
          <h2 className="text-xl">About Me</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 items-center py-4">
          <div className="flex flex-col gap-4">
            <p>
              I'm a <span className="italic font-bold">frontend developer</span>{' '}
              from Italy. I studied Computer Science in Milan, where I also
              wrote my thesis on One-Shot Learning for Music Genre
              Classification, which sounds very niche, and honestly it was, but
              I enjoyed every bit of it.
            </p>
            <p>
              Since then I've had the chance to work in pretty different
              contexts: a building management startup in Seoul, an agency in
              Gallarate working with enterprise clients, and now freelancing for
              international clients through Upwork. Each one taught me something
              different, both technically and about how teams actually work.
            </p>
            <p>
              Day to day I mostly work with{' '}
              <span className="italic font-bold">React</span>,{' '}
              <span className="italic font-bold">TypeScript</span>, and{' '}
              <span className="italic font-bold">Next.js</span>. I care a lot
              about accessibility and performance, not just as checkboxes, but
              because they genuinely matter. I'm also comfortable on the backend
              side when needed:{' '}
              <span className="italic font-bold">Node.js</span>,{' '}
              <span className="italic font-bold">MongoDB</span>,{' '}
              <span className="italic font-bold">REST APIs</span>.
            </p>
            <p>
              Outside of work I'm into travel, music, and art. I think staying
              curious about things outside your field makes you a better
              developer, or at least that's what I tell myself when I'm spending
              too much time in a museum.
            </p>
          </div>
          <div>
            <img
              src={iceland}
              className="max-h-[2000px] border border-[#2e2d25]"
              alt="About me"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
