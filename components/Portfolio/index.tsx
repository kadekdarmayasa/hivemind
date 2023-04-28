import Button from '../Button';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

type PortfolioItem = {
  _id: string | number,
  imagePath: string,
  orientation: string,
  projectName: string,
  serviceCategory: string
}

export default function Portfolio({ portfolios }: { portfolios: Array<PortfolioItem> }): JSX.Element {
  return (
    <section className='mt-32'>
      <div className="flex flex-col items-center text-center">
        <h2 className="heading-2">Our Work and Case Study</h2>
      </div>

      <div className='flex flex-col'>
        <div className='grid grid-cols-12 grid-flow-dense gap-5 mt-14'>
          {portfolios.map(portfolio => {
            return portfolio.orientation === 'potrait' ? (
              <div key={portfolio._id} className='rounded-lg relative col-span-4  row-span-4 overflow-hidden group'>
                <img src={portfolio.imagePath} alt={portfolio.projectName} className='h-full w-full object-cover group-hover:scale-105 transition-all' />

                <div className='absolute h-auto w-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-slate-950 to-slate-800 opacity-30 backdrop-blur-md'></div>

                <div className='absolute bottom-6 group-hover:bottom-8 px-6 transition-all delay-100'>
                  <h3 className='text-2xl text-white font-medium leading-snug mb-2' style={{
                    textShadow: '0 5px 10px rgba(0, 0, 0, .2)',
                  }}>{portfolio.projectName}</h3>
                  <p className='text-white font-normal text-lg' style={{
                    textShadow: '0 5px 10px rgba(0, 0, 0, .2)',
                  }}>{portfolio.serviceCategory}</p>
                </div>
              </div>
            ) : (
              <div key={portfolio._id} className='rounded-lg col-span-4 relative row-span-2 overflow-hidden group'>
                <img src={portfolio.imagePath} alt={portfolio.projectName} className='h-full w-full object-cover group-hover:scale-105 transition-all' />

                <div className='absolute h-auto w-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-slate-950 to-slate-800 opacity-30 backdrop-blur-md'></div>

                <div className='absolute bottom-6 group-hover:bottom-8 px-6 transition-all delay-100'>
                  <h3 className='text-xl text-white font-medium leading-snug mb-2' style={{
                    textShadow: '0 5px 10px rgba(0, 0, 0, .2)',
                  }}>{portfolio.projectName}</h3>
                  <p className='text-white font-normal text-base delay-100' style={{
                    textShadow: '0 5px 10px rgba(0, 0, 0, .2)',
                  }}>{portfolio.serviceCategory}</p>
                </div>
              </div>
            )
          })}
        </div>
        <Button type='link' href='/portolio' classNames={['mt-8', 'mx-auto', 'relative', 'group']}>
          <span className='text-lg'>See all portfolios</span>
          <IconContext.Provider value={{ size: '1.3em', className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all', color: '#2B3BE5' }}>
            <IoChevronForwardOutline />
          </IconContext.Provider>
          <div className='absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue'></div>
        </Button>
      </div>
    </section>
  )
}
