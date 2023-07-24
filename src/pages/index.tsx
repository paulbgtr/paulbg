import { Header } from "@/components/index/Header";
import { Work } from "@/components/index/Work";
import { Passion } from "@/components/index/Passion";
import { Connect } from "@/components/index/Connect";
import { Projects } from "@/components/index/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Work />
      <Passion />
      <Connect />
      <Projects />
    </>
  );
}
