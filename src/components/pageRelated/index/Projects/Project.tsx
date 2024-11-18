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
    <Link
      href={link}
      className="relative flex items-center gap-2 p-3 transition-all rounded-lg group hover:bg-base-200"
    >
      <span className="text-sm text-gray-500 transition-colors group-hover:text-primary">
        {icon}
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
            {title}
          </h3>
          <span className="hidden text-xs opacity-50 group-hover:inline">
            ↗
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          {description}
        </p>
      </div>
    </Link>
  );
};
