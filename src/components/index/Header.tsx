import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Header = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold">Paul Bogatyr</h1>
      <p className="text-sm italic">
        Crafting Digital Dreams: Fullstack Web Wizardry
      </p>
      <div className="flex gap-3 mt-2">
        <Link className="btn" href="https://github.com/gibsol">
          <FaGithub size="22" />
        </Link>
        <Link
          className="btn"
          href="https://www.linkedin.com/in/paul-bogatyr-65945524b/"
        >
          <FaLinkedin size="22" />
        </Link>
        <Link className="btn" href="/contact">
          Email
        </Link>
      </div>
    </section>
  );
};
