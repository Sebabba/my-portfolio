const Contact = () => {
  return (
    <div>
      <div className="py-4 border-b border-[#2e2d25] dark:border-[#787878]">
        <h2 className="text-xl">Get In Touch</h2>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 py-4">
        <p className="text-center sm:text-start">
          Feel free to get in touch with me for work opportunities or just to
          say hi! I'm always open to connecting.
        </p>
        <a
          href="mailto:sebastiano.silipo98@gmail.com"
          className="inline-block px-4 py-2 rounded text-sm font-medium bg-[#0f172a] dark:bg-[#e5e7eb] text-[#e5e7eb] dark:text-[#0f172a] hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
        >
          Email me
        </a>
      </div>
    </div>
  );
};

export default Contact;
