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
    <Link href={link}>
      <div className="h-full duration-200 border-4 shadow-md hover:text-base-100 hover:bg-primary border-primary card bg-base-100">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
