import { MdOutlinePlace } from "react-icons/md";

export const Header = () => {
  return (
    <section className="space-y-2">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Paul Bg</h1>

        <span className="flex items-center gap-1 text-gray-500">
          <MdOutlinePlace size="14" />
          <p className="text-xs">Tallinn, Estonia</p>
        </span>

        <p className="text-sm text-gray-400">
          A developer who transforms ideas into reality. I craft practical,
          efficient solutions with clean, maintainable code—focusing on solving
          real-world challenges with precision and innovation.
        </p>
      </div>
    </section>
  );
};
