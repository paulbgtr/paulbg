import Link from "next/link";

export const PrettyLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      className="font-bold underline duration-200 hover:text-white text-primary"
      href={href}
    >
      {children}
    </Link>
  );
};
