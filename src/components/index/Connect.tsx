import Link from "next/link";

export const Connect = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Connect</h2>
      <div className="flex gap-3">
        <Link className="btn btn-accent" href="https://github.com/gibsol">
          Github
        </Link>
        <Link
          className="btn btn-accent"
          href="https://www.linkedin.com/in/paul-bogatyr-65945524b/"
        >
          LinkedIn
        </Link>
      </div>
    </section>
  );
};
