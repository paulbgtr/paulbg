import Head from "next/head";

import { Header } from "@/components/Header";
import { Connect } from "@/components/index/Connect";
import { Work } from "@/components/index/Work";
import { Passion } from "@/components/index/Passion";
import { Projects } from "@/components/index/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Paul Bogatyr / Home </title>
        <meta
          name="description"
          content="Crafting Digital Dreams: Fullstack Web Wizardry"
        />
      </Head>

      <Header
        title="Paul Bogatyr"
        description="Crafting Digital Dreams: Fullstack Web Wizardry"
      >
        <Connect />
      </Header>
      <Work />
      <Passion />
      <Projects />
    </>
  );
}
