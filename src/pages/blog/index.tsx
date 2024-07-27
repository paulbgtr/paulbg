import { Header } from "@/components/Header";
import { BlogPostList } from "@/components/pageRelated/blog/BlogPostList";
import type { Post } from "@/types/Post";
import { sortPosts } from "@/utilts/sortPosts";

const posts: Post[] = [
  {
    id: 1,
    title: "Post 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2022-01-01",
  },
  {
    id: 2,
    title: "Post 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2022-01-02",
  },
  {
    id: 3,
    title: "Post 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2022-01-03",
  },
  {
    id: 5,
    title: "Post 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2022-01-04",
  },
  {
    id: 4,
    title: "Post 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2022-01-04",
  },
];

export default function Blog() {
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
