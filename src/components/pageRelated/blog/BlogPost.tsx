import Link from "next/link";

export const BlogPost = ({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) => {
  return (
    <Link className="duration-200 hover:opacity-80" href="/blog/post">
      <div className="shadow-xl card bg-base-100">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <time>{date}</time>
        </div>
      </div>
    </Link>
  );
};
