import { PrettyLink } from "./PrettyLink";
import { ProjectList } from "./Projects/ProjectList";
import { Heading } from "@/components/Heading";

export const Projects = () => {
  return (
    <section className="flex flex-col gap-2 space-y-4">
      <Heading text="Projects" />
      <ProjectList />
      <p className="italic">
        Check out my other projects on{" "}
        <PrettyLink href="https://github.com/paulbgtr?tab=repositories">
          GitHub
        </PrettyLink>
        .
      </p>
    </section>
  );
};
