import { ReactNode } from "react";

import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <article className="flex items-center justify-center min-h-screen px-4 md:px-0">
        {/* <Navbar /> */}
        <div className="max-w-xl mx-auto">
          <div className="grid gap-3">{children}</div>
        </div>
      </article>
    </>
  );
};
