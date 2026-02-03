import { Link } from 'react-router-dom';
import resume from '../documents/sebastiano_silipo_resume.pdf';
import CurrentTime from './CurrentTime';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center nav-container pb-1 md:pb-3 pt-1 md:pt-3 mx-2 md:mx-4">
      <div className="">
        <Link to="/" className="">
          Sebastiano's Portfolio
          <CurrentTime />
        </Link>
      </div>
      <div className="">
        <button
          href={resume}
          download="Resume_PDF"
          target="_blank"
          rel="noferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-slate-900 text-slate-50 hover:bg-slate-900/90 h-8 px-4 py-1"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default NavBar;
