import Link from "next/link";

import { FaGithub, FaEnvelope, FaLinkedin, FaThreads } from "react-icons/fa6";

export const Connect = () => {
  return (
    <div className="flex gap-3 mt-2">
      <Link className="btn btn-ghost" href="https://github.com/paulbgtr">
        <FaGithub size="22" />
      </Link>
      <Link
        className="btn btn-ghost"
        href="https://www.linkedin.com/in/paulbg0"
      >
        <FaLinkedin size="22" />
      </Link>
      <Link className="btn btn-ghost" href="/contact">
        <FaEnvelope size="22" />
      </Link>
      <Link className="btn btn-ghost" href="https://www.threads.net/@paulbgtr">
        <FaThreads size="22" />
      </Link>
    </div>
  );
};
