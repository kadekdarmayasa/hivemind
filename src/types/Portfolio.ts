export type PortfolioProps = {
  id: string;
  imageId: string;
  orientation: 'potrait' | 'landscape';
  projectName: string;
  service: {
    id: string;
    name: string;
  };
};
