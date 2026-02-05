import avatar from '../images/avatar.jpg';

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        <img
          src={avatar}
          className="rounded-full"
          width={200}
          height={200}
          alt="Sebastiano's profile"
        />
      </div>
      <div className="mb-3">
        <div className="text-center italic font-medium">
          <h1 className="text-3xl mb-3">Hi, I'm Sebastiano 👋</h1>
          <div className="text-2xl">
            <p>I'm a software developer and engineer based in Italy.</p>
            <p>
              I am primarily specialized in front-end development, with a focus
              on React, TypeScript and Next.js
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-2 text-2xl">
        <a
          href="https://github.com/Sebabba"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sebastiano-silipo"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
