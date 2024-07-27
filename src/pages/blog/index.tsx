import { Header } from "@/components/Header";
import { BlogPostList } from "@/components/pageRelated/blog/BlogPostList";
import type { Post } from "@/types/Post";
import { sortPosts } from "@/utilts/sortPosts";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "public/posts");
  const filenames = fs.readdirSync(postsDir);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      id: filename.replace(/\.md$/, ""),
      ...data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <article>
      <Header
        title="Blog"
        description="A collection of my thoughts and ideas."
      />

      <BlogPostList posts={sortPosts(posts)} />
    </article>
  );
}
