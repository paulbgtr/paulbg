import { ReactNode } from "react";
import Image from "next/image";
import pfp from "/public/pfp.jpeg";

export const Header = ({
  title,
  description,
  image,
  children,
}: {
  title: string;
  description: string;
  image?: boolean;
  children?: ReactNode;
}) => {
  return (
    <section className="flex gap-8">
      {image && (
        <div className="avatar">
          <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image src={pfp} alt={title} />
          </div>
        </div>
      )}
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm italic">{description}</p>
        {children}
      </div>
    </section>
  );
};
