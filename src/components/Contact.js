const Contact = () => {
  return (
    <div className="border border-t-0 border-[#2e2d25] dark:border-[#787878]">
      <div className="p-4 border-b border-[#2e2d25] dark:border-[#787878]">
        <h2 className="text-xl">Get In Touch</h2>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 p-4">
        <p className="text-center sm:text-start">
          Feel free to get in touch with me for work opportunities or just to
          say hi! I'm always open to connecting.
        </p>
        <a
          href="mailto:sebastiano.silipo98@gmail.com"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-slate-900 dark:bg-white text-slate-50 dark:text-slate-900 hover:bg-slate-900/90 dark:hover:bg-white/90 h-8 px-4 py-1"
        >
          Email me
        </a>
      </div>
    </div>
  );
};

export default Contact;
