import Link from "next/link";

export const Project = ({
  icon,
  title,
  description,
  link,
  timeframe,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  timeframe?: string;
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
          <h3 className="font-medium truncate text-gray-100">{title}</h3>
          {timeframe && (
            <span className="text-xs text-gray-500">{timeframe}</span>
          )}
          <span className="hidden text-xs opacity-50 group-hover:inline">
            ↗
          </span>
        </div>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </Link>
  );
};
