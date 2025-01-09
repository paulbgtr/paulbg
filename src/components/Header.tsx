import { MdOutlinePlace } from "react-icons/md";

export const Header = () => {
  return (
    <section className="space-y-3">
      <div className="space-y-2">
        <h1 className="text-3xl font-black">Paul Bogatyr</h1>

        <span className="flex items-center gap-1 text-gray-500">
          <MdOutlinePlace size="20" />
          <p className="text-sm">Tallinn, Estonia</p>
        </span>

        <p className="text-gray-400">
          I&apos;m a full-stack developer who loves turning ideas into
          functional web applications. I&apos;m driven by the challenge of
          solving real problems through clean, creative code that makes a
          genuine difference.
        </p>
      </div>
    </section>
  );
};
