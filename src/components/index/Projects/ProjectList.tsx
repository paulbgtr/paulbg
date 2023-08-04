import { Project } from "./Project";

export const ProjectList = () => {
  const projectData = [
    {
      id: 1,
      title: "Fullstack e-commerce app",
      description:
        "Fullstack web store using React, Next.js, Supabase and Payment APIs",
      link: "/",
    },
    {
      id: 2,
      title: "Web app for a local business",
      description: "Web app for a local business using React and Next.js",
      link: "https://github.com/Appstatis/alfapro",
    },
    {
      id: 3,
      title: "Backend of a todo app",
      description: "API of a todo app using Postgres and Actix Web",
      link: "https://github.com/Gibsol/todo_rs",
    },
    {
      id: 4,
      title: "CLI pomodoro timer application",
      description:
        "A simple terminal app written in C++ to boost your productivity",
      link: "https://github.com/Gibsol/pomodoro-cli",
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
