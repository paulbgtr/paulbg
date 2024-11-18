import { ProjectList } from "./Projects/ProjectList";
import { Heading } from "@/components/Heading";

export const Projects = () => {
  return (
    <section className="flex flex-col gap-2 space-y-3">
      <Heading text="Projects" />
      <ProjectList />
    </section>
  );
};
