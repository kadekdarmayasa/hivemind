export type BlogItemProps = {
  id: string;
  imageId: string;
  publishedDate: string;
  imageOriginSource?: string;
  topic?: string;
  author: string;
  title: string;
  briefDescription: string;
  isPublished?: boolean;
};
