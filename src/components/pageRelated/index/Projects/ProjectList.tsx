import { Project } from "./Project";

export const ProjectList = () => {
  const projectData = [
    {
      id: 1,
      title: "nottoto",
      description:
        "A fullstack CLI frontend + backend application for managing notes.",
      link: "https://github.com/paulbgtr/nottoto",
    },
    {
      id: 2,
      title: "recipify",
      description:
        "A fullstack web app for finding recipes based on ingredients you have.",
      link: "https://github.com/paulbgtr/recipify",
    },
    {
      id: 3,
      title: "pomodoro cli",
      description: "A CLI tool for managing your work sessions.",
      link: "http://github.com/paulbgtr/pomodoro-cli",
    },
  ];

  return (
    <ul>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {projectData.map((project) => (
          <li key={project.id}>
            <Project
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </li>
        ))}
      </div>
    </ul>
  );
};
