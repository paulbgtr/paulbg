import { MdOutlinePlace } from "react-icons/md";

export const Header = () => {
  return (
    <section className="space-y-2">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">paulbg</h1>

        <span className="flex items-center gap-1 text-gray-500">
          <MdOutlinePlace size="14" />
          <p className="text-xs">tallinn, ee</p>
        </span>

        <p className="text-sm text-gray-400">
          software engineer interested in startups, ml, mathematics. submitted
          to computer god.
        </p>
      </div>
    </section>
  );
};
