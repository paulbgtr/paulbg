import { Heading } from "@/components/Heading";

interface BioItemProps {
  year: string;
  title: string;
  description?: string;
}

const BioItem = ({ year, title, description }: BioItemProps) => (
  <div className="mb-6 group last:mb-0">
    <div className="space-y-1">
      <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
      <h3 className="font-bold text-gray-900 transition-colors dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
  </div>
);

export const Bio = () => {
  return (
    <section className="space-y-3">
      <Heading text="Bio" />
      <div>
        <BioItem
          year="July 2024 - Present"
          title="Fullstack Software Engineer Intern"
          description="Z-Bit"
        />
        <BioItem
          year="September 2021 - Present"
          title="Software Engineering Student"
          description="Tallinna Polütehnikum"
        />
      </div>
    </section>
  );
};
