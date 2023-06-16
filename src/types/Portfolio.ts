export type PortfolioProps = {
  id: string;
  imageId: string;
  orientation: 'portrait' | 'landscape';
  projectName: string;
  service: {
    id: string;
    name: string;
  };
};
