import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ContentBlock from '../components/ContentBlock';
import ProjectHeader from '../components/ProjectHeader';
import ProjectHeroImage from '../components/ProjectHeroImage';

const Project = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  return (
    <div className="my-6">
      <ProjectHeader project={project} />
      <ProjectHeroImage heroImage={project.heroImage} title={project.title} />
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
