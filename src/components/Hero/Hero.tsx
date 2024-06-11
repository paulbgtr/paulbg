import { PersonalLink } from "./PersonalLink";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <header className="text-center">
      <h1 className="font-extrabold text-white text-8xl drop-shadow-md">
        Hey, I&apos;m Paul
      </h1>
      <p className="mt-4 text-white">Crafting elegant solutions for the web</p>
    </header>
  );
};

const PersonalLinks = () => {
  return (
    <div className="flex justify-center gap-2">
      <PersonalLink
        link="https://www.linkedin.com/in/paulbg0/"
        icon={LinkedInLogoIcon}
        title="LinkedIn"
      />
      <PersonalLink
        link="https://github.com/paulbgtr"
        icon={GitHubLogoIcon}
        title="Github"
      />
      <PersonalLink link="#projects" title="Projects" />
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="grid items-center justify-center min-h-screen">
      <article className="space-y-2">
        <Header />
        <PersonalLinks />
      </article>
    </section>
  );
};
