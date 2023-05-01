import Button from 'components/Button';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { PortfolioProps } from 'types/Portfolio';
import { PortfolioContainer } from 'components/Portfolio';

export default function Portfolio({ portfolios }: { portfolios: PortfolioProps[] }): JSX.Element {
  return (
    <section className='mt-32'>
      <div className="flex flex-col items-center text-center">
        <h2 className="heading-2">Our Work and Case Study</h2>
      </div>

      <PortfolioContainer portfolios={portfolios} />

      <Button type='link' href='/portolio' classNames={['mt-8', 'mx-auto', 'relative', 'group']}>
        <span className='text-lg'>See all portfolios</span>
        <IconContext.Provider value={{ size: '1.3em', className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all', color: '#2B3BE5' }}>
          <IoChevronForwardOutline />
        </IconContext.Provider>
        <div className='absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue'></div>
      </Button>
    </section>
  )
}