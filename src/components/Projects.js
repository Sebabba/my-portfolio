import { Link } from 'react-router-dom';
import { projectsListData } from '../data/projects';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="col-lg-10">
      <div className="col-12">
        <h2>Projects</h2>
      </div>
      <div className="projects-grid">
        {projects &&
          projects.map((project) => (
            <div className="project-card" key={project.id}>
              <Link to={`/${project.slug}`}>
                <div className="project-header">
                  <i className="fa-regular fa-folder-open folder-icon"></i>
                  {project.github !== '' && (
                    <div className="small-icons">
                      <a href={project.github}>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
