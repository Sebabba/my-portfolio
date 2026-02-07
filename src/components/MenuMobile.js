import { useState } from 'react';
import resume from '../documents/sebastiano_silipo_resume.pdf';

export const MenuMobile = ({ location, navLinks, handleNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    handleNavClick(id);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden relative pe-4">
      <button
        onClick={toggleMenu}
        className="flex flex-col gap-1.5 p-2"
        aria-label="Menu"
      >
        <div
          className={`w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-[#faf9f5] dark:bg-[#1d1e20] shadow-lg z-40 py-2 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 opacity-100">
          {location.pathname === '/' &&
            navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="w-full text-left px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
              >
                <p className="text-xl">{link.name}</p>
              </button>
            ))}

          {location.pathname === '/' && (
            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
          )}

          <a
            href={resume}
            download="Resume_PDF"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            <p className="text-xl">Resume</p>
          </a>
        </div>
      )}
    </div>
  );
};
