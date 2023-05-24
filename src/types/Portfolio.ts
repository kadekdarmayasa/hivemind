export type PortfolioProps = {
  id: string | number,
  imageId: string,
  orientation: "potrait" | "landscape",
  projectName: string,
  service: {
    id: number | string,
    category: string
  }
}