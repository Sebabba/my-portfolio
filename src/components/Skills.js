import { useState } from 'react';

const Skills = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleClick = (key) => {
    setActiveTooltip(activeTooltip === key ? null : key);
  };

  const skills = [
    {
      key: 'html',
      name: 'HTML',
      icon: 'html5',
      projects: [
        { name: 'Front-End Developer Capstone', link: '/courseraCapstone' },
        { name: 'React Project Portfolio', link: '/courseraPortfolio' },
        { name: 'This Portfolio', link: '/personalPortfolio' },
      ],
    },
    {
      key: 'css',
      name: 'CSS',
      icon: 'css3-alt',
      projects: [
        { name: 'Front-End Developer Capstone', link: '/courseraCapstone' },
        { name: 'React Project Portfolio', link: '/courseraPortfolio' },
        { name: 'This Portfolio', link: '/personalPortfolio' },
      ],
    },
    {
      key: 'js',
      name: 'JavaScript',
      icon: 'js-square',
      projects: [
        { name: 'Front-End Developer Capstone', link: '/courseraCapstone' },
        { name: 'React Project Portfolio', link: '/courseraPortfolio' },
        { name: 'This Portfolio', link: '/personalPortfolio' },
        { name: 'Weather App', link: '/weatherApp' },
      ],
    },
    {
      key: 'react',
      name: 'React',
      icon: 'react',
      projects: [
        { name: 'Front-End Developer Capstone', link: '/courseraCapstone' },
        { name: 'React Project Portfolio', link: '/courseraPortfolio' },
        { name: 'This Portfolio', link: '/personalPortfolio' },
      ],
    },
    {
      key: 'java',
      name: 'Java',
      icon: 'java',
      projects: [
        { name: 'EOLO Blog', link: '/eoloBlog' },
        { name: 'Mendrisio Website', link: '/mendrisio' },
        { name: 'EOLO SEO', link: '/eoloSeo' },
      ],
    },
    {
      key: 'python',
      name: 'Python',
      icon: 'python',
      projects: [
        { name: 'One-shot Music Genre Classification', link: '/oneshot' },
      ],
    },
    {
      key: 'figma',
      name: 'Figma',
      icon: 'figma',
      projects: [
        { name: 'Front-End Developer Capstone', link: '/courseraCapstone' },
        { name: 'React Project Portfolio', link: '/courseraPortfolio' },
      ],
    },
    {
      key: 'git',
      name: 'Git',
      icon: 'git',
      projects: [
        { name: 'Front-End Developer Capstone', link: '/courseraCapstone' },
        { name: 'React Project Portfolio', link: '/courseraPortfolio' },
        { name: 'This Portfolio', link: '/personalPortfolio' },
        { name: 'EOLO Blog', link: '/eoloBlog' },
        { name: 'Mendrisio Website', link: '/mendrisio' },
        { name: 'EOLO SEO', link: '/eoloSeo' },
      ],
    },
  ];

  return (
    <div className="col-lg-10 skills-container">
      <div className="col-12">
        <h2>Skills</h2>
      </div>

      <div className="grid-skills">
        {skills.map((skill) => (
          <div
            key={skill.key}
            className={`skill-card ${skill.key}`}
            onClick={() => handleClick(skill.key)}
          >
            <i className={`fa-brands fa-${skill.icon} ${skill.key}-icon`}></i>
            <p>{skill.name}</p>

            {/* Tooltip */}
            {activeTooltip === skill.key && skill.projects.length > 0 && (
              <div className="tooltipProjects bg-white border rounded-lg shadow-lg p-2 z-10">
                <b>Projects with {skill.name}</b>
                <ul className="space-y-1 projectList">
                  {skill.projects.map((project, index) => (
                    <li key={index}>
                      <a
                        href={project.link}
                        rel="noopener noreferrer"
                        className="projectLink block py-1 text-sm text-gray-700 rounded"
                      >
                        {project.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
