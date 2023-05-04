import type { PortfolioProps } from 'types/Portfolio';
import PortfolioItem from '../PortfolioItem';

export default function PortfolioContainer({ portfolios }: { portfolios: PortfolioProps[] }): JSX.Element {
  return (
    <div className='grid grid-cols-12 grid-flow-dense gap-5 mt-14'>
      {portfolios.map(portfolio => <PortfolioItem key={portfolio._id} portfolio={portfolio} />)}
    </div>
  )
}
