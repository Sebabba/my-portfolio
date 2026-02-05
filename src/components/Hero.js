import avatar from '../images/avatar.jpg';

const Hero = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-2 hidden">
        <img
          src={avatar}
          className="rounded-full"
          width={200}
          height={200}
          alt="Sebastiano's profile"
        />
      </div>
      <div className="mb-3">
        <div className="italic font-medium">
          <h1 className="text-3xl sm:text-4xl mb-3">Hi, I'm Sebastiano 👋</h1>
          <div className="text-2xl sm:text-3xl">
            <p>I'm a software developer and engineer based in Italy.</p>
            <p>
              I am primarily specialized in front-end development, with a focus
              on React, TypeScript and Next.js
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 text-md">
        <a
          href="https://github.com/Sebabba"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github me-1"></i>
          <span className="text-sm">Sebabba</span>
        </a>
        <a
          href="https://www.linkedin.com/in/sebastiano-silipo"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin me-1"></i>
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
