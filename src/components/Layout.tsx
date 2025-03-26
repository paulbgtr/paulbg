import { ReactNode } from "react";
import MathBackground from "./MathFunctions";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MathBackground />

      <div className="relative flex items-center justify-center min-h-screen">
        {/* Overlay to subtly darken the dynamic background */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Main content container */}
        <div className="relative z-10 w-full max-w-xl p-8 border-[0.5px] border-gray-700 shadow-2xl rounded-xl backdrop-blur-lg">
          {children}
        </div>
      </div>
    </>
  );
};
