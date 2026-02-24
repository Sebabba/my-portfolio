import skills from '../data/skills';

const Skills = () => {
  return (
    <div>
      <div className="py-4 border-b border-[#2e2d25] dark:border-[#787878]">
        <h2 className="text-xl">Skills</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-4">
        {skills.map((skill) => {
          // proficiency: 0-5, può essere .5
          const fullStars = Math.floor(skill.proficiency);
          const emptyStars = 5 - fullStars;
          return (
            <div
              key={skill.key}
              className={`skill-card flex flex-col items-start gap-2 p-2 border ${skill.key}`}
            >
              <div className="flex items-center justify-center w-full gap-2">
                <i
                  className={`fa-brands fa-${skill.icon} text-2xl ${skill.key}-icon`}
                ></i>
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
              <div className="flex justify-center gap-1 mt-1 w-full text-[#2e2d25] dark:text-slate-50">
                {[...Array(fullStars)].map((_, i) => (
                  <svg
                    key={`full${i}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                  <svg
                    key={`empty${i}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
