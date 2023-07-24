import { ReactNode } from "react";

import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-2 md:py-4 lg:py-6 xl:py-8 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-3">{children}</div>
        </div>
      </div>
    </>
  );
};
