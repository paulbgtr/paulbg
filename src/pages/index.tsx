import Head from "next/head";
import { Header } from "@/components/Header";
import { Connect } from "@/components/pageRelated/index/Connect";
import { Work } from "@/components/pageRelated/index/Work";
import { Passion } from "@/components/pageRelated/index/Passion";
import { Projects } from "@/components/pageRelated/index/Projects";
import { Bio } from "@/components/pageRelated/index/Bio";
import { motion } from "framer-motion";

export default function Home() {
  const animationVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <>
      <Head>
        <title>Paul Bogatyr / Home </title>
        <meta
          name="description"
          content="Crafting Digital Dreams: Fullstack Web Wizardry"
        />
        <link rel="icon" href="/pfp.jpeg" />
      </Head>

      <main className="space-y-5">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <Header
            image
            title="Paul Bogatyr"
            description="Crafting digital realities from the void."
          >
            <Connect />
          </Header>
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <Work />
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <Projects />
        </motion.div>
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <Bio />
        </motion.div>
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <Passion />
        </motion.div>
      </main>
    </>
  );
}
