import { ProjectList } from "../Projects/ProjectList";

export const Projects = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Projects</h2>
      <ProjectList />
    </section>
  );
};
