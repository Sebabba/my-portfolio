import { Link } from 'react-router-dom';
import {
  projectDataFrontEnd,
  projectDataBackEnd,
  projectDataOther,
} from './data.js';

const Projects = () => {
  return (
    <div className="col-lg-10">
      <div className="col-12">
        <h2>Projects</h2>
      </div>

      <h2 className="project-sub-menu">Front-End</h2>
      <div className="projects-grid">
        {projectDataFrontEnd &&
          projectDataFrontEnd.map((project) => (
            <div className="project-card" key={project.id}>
              <Link to={project.detailLink}>
                <div className="project-header">
                  <i className="fa-regular fa-folder-open folder-icon"></i>
                  {project.gitHubLink !== '' && (
                    <div className="small-icons">
                      <a href={project.gitHubLink}>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </Link>
            </div>
          ))}
      </div>

      <h2 className="project-sub-menu">Back-End / CMS</h2>
      <div className="projects-grid">
        {projectDataBackEnd &&
          projectDataBackEnd.map((project) => (
            <div className="project-card" key={project.id}>
              <Link to={project.detailLink}>
                <div className="project-header">
                  <i className="fa-regular fa-folder-open folder-icon"></i>
                  {project.gitHubLink !== '' && (
                    <div className="small-icons">
                      <a href={project.gitHubLink}>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </Link>
            </div>
          ))}
      </div>

      <h2 className="project-sub-menu">Other</h2>
      <div className="projects-grid">
        {projectDataOther &&
          projectDataOther.map((project) => (
            <div className="project-card" key={project.id}>
              <Link to={project.detailLink}>
                <div className="project-header">
                  <i className="fa-regular fa-folder-open folder-icon"></i>
                  {project.gitHubLink !== '' && (
                    <div className="small-icons">
                      <a href={project.gitHubLink}>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
