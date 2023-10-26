import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="text-xl normal-case btn btn-ghost">
          Paul Bogatyr
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link href="https://paulbg.hashnode.dev/">Posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
