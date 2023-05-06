import type { PortfolioProps } from 'types/Portfolio';
import PortfolioItem from '../PortfolioItem';
import Fade from 'react-reveal/Fade';

export default function PortfolioContainer({ portfolios }: { portfolios: PortfolioProps[] }): JSX.Element {
  return (
    <div className='grid grid-cols-12 grid-flow-dense gap-5 mt-14'>
      {portfolios.map((portfolio, index: number) => (
        <PortfolioItem key={portfolio._id} index={index} portfolio={portfolio} />
      ))}
    </div>
  )
}
