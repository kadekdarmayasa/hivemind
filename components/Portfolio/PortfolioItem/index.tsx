import type { PortfolioProps } from "types/Portfolio";

export default function PortfolioItem({ portfolio }: { portfolio: PortfolioProps }): JSX.Element {
  return portfolio.orientation === 'potrait' ? (
    <div key={portfolio._id} className='rounded-lg relative col-span-4  row-span-4 overflow-hidden group'>
      <img src={portfolio.imagePath} alt={portfolio.projectName} className='h-full w-full object-cover group-hover:scale-105 transition-all' />

      <div className='absolute h-auto w-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black to-gray-700 opacity-40 backdrop-blur-md'></div>

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

      <div className='absolute h-auto w-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black to-gray-700 opacity-40 backdrop-blur-md'></div>

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
}