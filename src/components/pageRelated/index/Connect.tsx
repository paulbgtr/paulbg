import Link from "next/link";

import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

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
    </div>
  );
};
