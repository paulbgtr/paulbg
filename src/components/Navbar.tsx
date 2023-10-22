import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="text-xl normal-case btn btn-ghost">
          Paul Bogatyr
        </Link>
      </div>
    </div>
  );
};
