const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center py-2 my-3">
      <p>© {new Date().getFullYear()} Sebastiano's Portfolio</p>
      <div className="flex flex-row gap-x-3 text-md">
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

export default Footer;
