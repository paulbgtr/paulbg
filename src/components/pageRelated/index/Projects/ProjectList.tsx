import { Project } from "./Project";
import { FaBluesky } from "react-icons/fa6";
import { FaStickyNote } from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";
import { FaBrain } from "react-icons/fa6";
import Link from "next/link";

export const ProjectList = () => {
  const projectData = [
    {
      id: 1,
      icon: <FaStickyNote />,
      title: "nebriq",
      description:
        "a distraction-free writing space where ideas flow naturally. ai-powered, minimalist, and built for clarity.",
      link: "https://nebriq.com",
      timeframe: "2024 - Present",
    },
    {
      id: 2,
      icon: <FaBrain />,
      title: "brainthink",
      description:
        "a media platform that fights brainrot by prioritizing intellectual growth and meaningful content.",
      link: "https://brainth.ink",
      timeframe: "2025 - Present",
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
      description: "scheduling app for bluesky.",
      link: "http://github.com/paulbgtr/skeetsched",
      timeframe: "2024",
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
      <Link
        href="https://github.com/paulbgtr?tab=repositories"
        className="block w-full p-2 text-center text-sm text-gray-400 hover:text-gray-300 transition-colors rounded-lg hover:bg-base-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        all projects →
      </Link>
    </div>
  );
};
