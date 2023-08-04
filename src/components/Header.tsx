import { ReactNode } from "react";

export const Header = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) => {
  return (
    <section>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm italic">{description}</p>
      {children}
    </section>
  );
};
