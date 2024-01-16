import Link from "next/link";

export const Project = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Link className="duration-200 hover:opacity-90" href={link}>
      <div className="h-full shadow-md card image-full">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
