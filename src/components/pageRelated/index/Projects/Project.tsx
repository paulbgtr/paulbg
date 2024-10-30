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
    <Link href={link} className="block p-4 transition-colors hover:bg-base-200">
      <div className="flex items-center gap-3">
        <span className="text-primary">{icon}</span>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-base-content/70">{description}</p>
        </div>
      </div>
    </Link>
  );
};
