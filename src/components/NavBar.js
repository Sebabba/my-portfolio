import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import resume from '../documents/sebastiano_silipo_resume.pdf';
import CurrentTime from './CurrentTime';
import { MenuMobile } from './MenuMobile';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
      <div className="flex justify-between items-center pb-1 md:pb-3 pt-1 md:pt-3">
        <div className="ps-4">
          <Link to="/">
            Sebastiano's Portfolio
            <CurrentTime />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-x-6 pe-4">
          {location.pathname === '/' &&
            navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm hover:text-slate-600 dark:hover:text-slate-300"
              >
                <p className="text-lg">{link.name}</p>
              </button>
            ))}
          <a
            href={resume}
            download="Resume_PDF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-md text-sm font-medium bg-[#0f172a] dark:bg-[#e5e7eb] text-[#e5e7eb] dark:text-[#0f172a] hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </div>
        <MenuMobile
          location={location}
          navLinks={navLinks}
          handleNavClick={handleNavClick}
        />
      </div>
    </nav>
  );
};

export default NavBar;
