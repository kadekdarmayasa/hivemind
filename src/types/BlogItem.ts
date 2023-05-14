export type BlogItemProps = {
  _id: string | number,
  imageId: string,
  publishedDate: string,
  imageOriginSource?: string,
  topic?: string,
  author: string,
  title: string,
  shortDescription: string,
  isPublished?: boolean,
}