export type BlogItemProps = {
  _id: string | number,
  imagePath: string,
  publishedDate: string,
  imageOriginSource?: string,
  topic?: string,
  author: string,
  title: string,
  shortDescription: string,
  isPublished?: boolean,
}