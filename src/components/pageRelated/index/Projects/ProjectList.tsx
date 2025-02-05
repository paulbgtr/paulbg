import { Project } from "./Project";
import { FaBook } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { IoBrowsers } from "react-icons/io5";
import { FaStickyNote } from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";

export const ProjectList = () => {
  const projectData = [
    {
      id: 1,
      icon: <FaStickyNote />,
      title: "nebriq",
      description:
        "minimalist writing app with smart search and AI assistance for distraction-free writing.",
      link: "https://nebriq.com",
      timeframe: "2024 - Present",
    },
    {
      id: 2,
      icon: <FaBook />,
      title: "nottoto",
      description: "full-stack CLI application for managing notes.",
      link: "https://github.com/paulbgtr/nottoto",
      timeframe: "2023",
    },
    {
      id: 3,
      icon: <RiFilePaper2Fill />,
      title: "papergram next",
      description: "scroll ai papers instead of tiktok.",
      link: "https://papergramnext.vercel.app/",
      timeframe: "2025",
    },
    {
      id: 4,
      icon: <FaBluesky />,
      title: "skeetsched",
      description: "scheduling app for BlueSky.",
      link: "http://github.com/paulbgtr/skeetsched",
      timeframe: "2024",
    },
    {
      id: 5,
      icon: <IoBrowsers />,
      title: "appstatis landing page",
      description: "landing page for software company.",
      link: "https://www.appstatis.com/",
      timeframe: "2023",
    },
  ] satisfies {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
    timeframe?: string;
  }[];

  return (
    <div className="space-y-3">
      {projectData.map((project) => (
        <Project
          key={project.id}
          icon={project.icon}
          title={project.title}
          description={project.description}
          link={project.link}
          timeframe={project.timeframe}
        />
      ))}
    </div>
  );
};
