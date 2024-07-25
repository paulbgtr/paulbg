import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Connect = () => {
  return (
    <div className="flex gap-3 mt-2">
      <Link className="btn" href="https://github.com/paulbgtr">
        <FaGithub size="22" />
      </Link>
      <Link className="btn" href="https://www.linkedin.com/in/paulbg0">
        <FaLinkedin size="22" />
      </Link>
      <Link className="btn" href="/contact">
        Email
      </Link>
    </div>
  );
};
