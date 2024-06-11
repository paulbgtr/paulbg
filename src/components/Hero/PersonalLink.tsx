import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export const PersonalLink = ({
  link,
  title,
  icon: Icon,
}: {
  link: string;
  title: string;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}) => {
  return (
    <Link href={link} className={buttonVariants({ variant: "ghost" })}>
      {Icon && <Icon width={20} height={20} />}
      <span className="ml-1 font-bold">{title}</span>
    </Link>
  );
};
