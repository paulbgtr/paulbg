import { PrettyLink } from "./pageRelated/index/PrettyLink";

export const Footer = () => {
  return (
    <footer className="p-10 text-center text-base-content">
      <p>
        Source code licensed under the{" "}
        <PrettyLink href="https://github.com/paulbgtr/paulbg/blob/main/LICENSE">
          MIT License
        </PrettyLink>
        .
      </p>
    </footer>
  );
};
