import Link from "next/link";

export const Project = ({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <div className="h-full duration-200 border-4 shadow-md hover:bg-primary border-primary card bg-base-100">
        <div className="card-body">
          <h2 className="card-title">
            {icon}
            {title}
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
