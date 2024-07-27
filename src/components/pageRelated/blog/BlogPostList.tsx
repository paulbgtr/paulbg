import { motion } from "framer-motion";
import { BlogPost } from "./BlogPost";
import type { Post } from "@/types/Post";

export const BlogPostList = ({ posts }: { posts: Post[] }) => {
  if (posts.length === 0) {
    return <p className="mt-4">No posts found (yet). Check back later!</p>;
  }

  return (
    <section className="grid gap-3 mt-4">
      {posts.map((post: Post, index: number) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <BlogPost
            title={post.title}
            description={post.description}
            date={post.date}
          />
        </motion.div>
      ))}
    </section>
  );
};
