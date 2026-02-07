import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import resume from '../documents/sebastiano_silipo_resume.pdf';
import CurrentTime from './CurrentTime';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-[#faf9f5] dark:bg-[#1d1e20] transition-all duration-300 ${
        isScrolled
          ? 'shadow-lg backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95'
          : ''
      }`}
    >
      <div className="flex justify-between items-center pb-1 md:pb-3 pt-1 md:pt-3 px-4">
        <div>
          <Link to="/">
            Sebastiano's Portfolio
            <CurrentTime />
          </Link>
        </div>
        <div>
          <a
            href={resume}
            download="Resume_PDF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-slate-900 dark:bg-white text-slate-50 dark:text-slate-900 hover:bg-slate-900/90 dark:hover:bg-white/90 h-8 px-4 py-1"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
