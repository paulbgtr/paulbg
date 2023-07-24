import Head from "next/head";

import { Header } from "@/components/index/Header";
import { Work } from "@/components/index/Work";
import { Passion } from "@/components/index/Passion";
import { Connect } from "@/components/index/Connect";
import { Projects } from "@/components/index/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Paul Bogatyr</title>
        <meta
          name="description"
          content="Crafting Digital Dreams: Fullstack Web Wizardry"
        />
      </Head>

      <Header />
      <Work />
      <Passion />
      <Connect />
      <Projects />
    </>
  );
}
