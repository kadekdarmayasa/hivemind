type PortfolioItem = {
  id: number;
  thumbnail: string;
  orientation: 'portrait' | 'landscape';
  name: string;
  service: {
    id: string;
    name: string;
  }
};

export default PortfolioItem;
