import Head from "next/head";

import { Header } from "@/components/Header";

const Posts = () => {
  return (
    <>
      <Head>
        <title>Paul Bogatyr / Posts</title>
        <meta
          name="description"
          content="Crafting Digital Dreams: Fullstack Web Wizardry"
        />
      </Head>

      <Header
        title="Posts"
        description="Things I have learned and want to share"
      />
    </>
  );
};

export default Posts;
