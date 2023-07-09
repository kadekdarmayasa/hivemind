type BlogItem = {
  id: number;
  thumbnailImage: string;
  publishedDate: string;
  imageOriginSource?: string;
  topic?: string;
  author: string;
  title: string;
  briefDescription: string;
  isPublished?: boolean;
};

export default BlogItem;
