import { Project } from "./Project";
import { FaBook, FaUtensilSpoon, FaHourglassEnd } from "react-icons/fa";

export const ProjectList = () => {
  const projectData = [
    {
      id: 1,
      icon: <FaBook />,
      title: "nottoto",
      description:
        "A fullstack CLI frontend + backend application for managing notes.",
      link: "https://github.com/paulbgtr/nottoto",
    },
    {
      id: 2,
      icon: <FaUtensilSpoon />,
      title: "recipify",
      description:
        "A fullstack web app for finding recipes based on ingredients you have.",
      link: "https://github.com/paulbgtr/recipify",
    },
    {
      id: 3,
      icon: <FaHourglassEnd />,
      title: "pomodoro cli",
      description: "A CLI tool for managing your work sessions.",
      link: "http://github.com/paulbgtr/pomodoro-cli",
    },
  ];

  return (
    <div className="space-y-3">
      {projectData.map((project) => (
        <Project
          key={project.id}
          icon={project.icon}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};
