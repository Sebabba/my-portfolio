import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ContentBlock from '../components/ContentBlock';

const Project = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  return (
    <div className="my-6">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl sm:text-4xl mb-3 italic font-medium">
          {project.title}
        </h1>
        <div className="flex gap-x-4 text-md">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="me-4"
            >
              <i className="fa-solid fa-earth-americas me-1"></i>
              <span>Live Demo</span>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github me-1"></i>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
      {project.heroImage && (
        <div className="flex justify-center w-full">
          <div className="border w-full max-w-[1200px] max-h-[600px] overflow-hidden">
            <img
              className="w-full h-auto object-contain block"
              src={project.heroImage}
              alt={project.heroImage}
            />
          </div>
        </div>
      )}
      <div className="flex flex-col items-center gap-2 border-t border-[#2e2d25] dark:border-[#787878] p-4 md:px-8 mt-6">
        {project.content.map((block, i) => (
          <div key={i} className="w-full">
            <ContentBlock block={block} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
