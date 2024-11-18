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
    className="relative block transition-colors hover:text-gray-600 dark:hover:text-gray-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-300 hover:after:w-0"
  >
    {label}
  </Link>
);

export const Connect = () => {
  return (
    <section className="space-y-3">
      <Heading text="Connect" />
      <div className="flex gap-6">
        <LinkItem href="https://github.com/paulbgtr" label="GitHub" />
        <LinkItem href="https://linkedin.com/in/paulbg0" label="LinkedIn" />
        <LinkItem href="mailto:paul@appstatis.com" label="Email" />
      </div>
    </section>
  );
};
