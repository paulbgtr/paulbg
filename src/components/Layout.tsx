import { ReactNode } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <article className="min-h-screen px-4 md:px-0">
        <Navbar />
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-3">{children}</div>
        </div>
      </article>
      <Footer />
    </>
  );
};
