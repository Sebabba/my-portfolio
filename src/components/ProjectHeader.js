const ProjectHeader = ({ project }) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-3xl sm:text-4xl mb-3 italic font-medium">
        {project.title}
      </h1>
      <p className="text-lg mb-4 italic">{project.shortDescription}</p>
      <div className="flex flex-row flex-wrap gap-2 mb-4">
        <span>Tech Stack:</span>
        {project.tech &&
          project.tech.map((tech, i) => (
            <span
              key={i}
              className="mr-2 bg-[#0f172a] dark:bg-[#e5e7eb] text-[#e5e7eb] dark:text-[#0f172a] px-2 py-1 rounded leading-none flex items-center"
            >
              {tech}
            </span>
          ))}
      </div>
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
  );
};

export default ProjectHeader;
