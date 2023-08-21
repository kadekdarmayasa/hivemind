type BlogItem = {
  id: number;
  thumbnail: string;
  publishedAt: string;
  slug: string;
  author: { username: string };
  title: string;
  description: string;
};

export default BlogItem;
