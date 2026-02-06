import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div>
      <div className="py-4 border-b border-[#2e2d25] dark:border-[#787878]">
        <h2 className="text-xl">Projects</h2>
      </div>
      <div className="grid grid cols-1 sm:grid-cols-2 gap-4 py-4">
        {projects &&
          projects.map((project) => (
            <div key={project.id} className="flex flex-col border p-4">
              <Link to={`/${project.slug}`}>
                <div className="flex flex-row justify-between items-center text-2xl mb-1">
                  <i className="fa-regular fa-folder-open folder-icon"></i>
                  {project.github && (
                    <div>
                      <a href={project.github}>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p>{project.shortDescription}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
