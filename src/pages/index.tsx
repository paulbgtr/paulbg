import Head from "next/head";

import { Header } from "@/components/Header";
import { Connect } from "@/components/pageRelated/index/Connect";
import { Work } from "@/components/pageRelated/index/Work";
import { Passion } from "@/components/pageRelated/index/Passion";
import { Projects } from "@/components/pageRelated/index/Projects";

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
        image
        title="Paul Bogatyr"
        description="Crafting Digital Dreams: Fullstack Web Wizardry"
      >
        <Connect />
      </Header>
      <Work />
      <Passion />
      {/* <Projects /> */}
    </>
  );
}
