import type { Post } from "@/types/Post";

export const sortPosts = (posts: Post[]): Post[] => {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
