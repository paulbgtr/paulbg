import { Heading } from "@/components/Heading";
import Link from "next/link";

interface LinkItemProps {
  href: string;
  label: string;
}

const LinkItem = ({ href, label }: LinkItemProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative block text-sm transition-colors hover:text-gray-600 hover:text-gray-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-300 hover:after:w-0"
  >
    {label}
  </Link>
);

export const Connect = () => {
  return (
    <section className="space-y-2">
      <Heading text="Connect" />
      <div className="flex gap-4">
        <LinkItem href="https://github.com/paulbgtr" label="GitHub" />
        <LinkItem href="https://linkedin.com/in/paulbg0" label="LinkedIn" />
        <LinkItem href="https://x.com/paulbgtr" label="Twitter" />
        <LinkItem href="mailto:paul@appstatis.com" label="Email" />
      </div>
    </section>
  );
};
