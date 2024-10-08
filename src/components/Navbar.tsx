import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="text-xl normal-case btn btn-ghost">
          paulbg
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>{/* <Link href="/blog">Blog</Link> */}</li>
          <li>
            <Link href="https://ko-fi.com/paulbg">Tip Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
