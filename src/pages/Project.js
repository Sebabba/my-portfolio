import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ContentBlock from '../components/ContentBlock';

const Project = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  return (
    <div className="justify-content-center">
      <div className="d-flex flex-column col-lg-8">
        <div>
          <h1>{project.title}</h1>
          <p className="project-link">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="me-4"
              >
                <i className="fa-solid fa-earth-americas"></i> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i> Go to GitHub
              </a>
            )}
          </p>
        </div>
        {project.heroImage && (
          <div className="project-image">
            <img
              src={project.heroImage}
              className="w-100"
              alt={project.heroImage}
            />
          </div>
        )}
        <div>
          {project.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
