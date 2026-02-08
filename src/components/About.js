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
              with a background in Computer Science and a degree in Music
              Information Science. Over the past few years, I've worked across
              different environments, from international startups to enterprise
              clients—always looking for opportunities to learn and grow.
            </p>
            <p>
              Most of my work focuses on building responsive, accessible web
              interfaces using{' '}
              <span className="italic font-bold">
                React, TypeScript, and Next.js
              </span>
              . I also enjoy backend development, working with Node.js, MongoDB,
              and AWS to build complete solutions. My projects have ranged from
              developing real-time dashboards from the ground up to improving
              SEO and accessibility for major brands.
            </p>
            <p>
              Outside of code, I'm passionate about travel, art, and music. I
              love exploring new cultures and sharing what I discover with
              others.
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
