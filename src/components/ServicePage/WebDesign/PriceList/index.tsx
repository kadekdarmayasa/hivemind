import parse from 'html-react-parser';
import Price from './Price';
import Feature from './Feature';
import Fade from 'react-reveal/Fade';

export default function PriceList({ priceList }): JSX.Element {
  return (
    <section className="mt-44">
      <div className='text-center'>
        <Fade up>
          <h2 className='heading-2'>{parse(priceList.title)}</h2>
        </Fade>
      </div>

      <div className='flex flex-wrap justify-center gap-8 mt-14'>
        {priceList.lists.map((list, index: number) => {
          if (list.isPopular) {
            return (
              <Fade up key={list._id} delay={index * 300}>
                <div key={list._id} className='bg-white shadow-black-sm hover:shadow-black-md scale-[1.01] hover:scale-[1.02] transition-all w-[350px] h-auto px-8 py-14 flex flex-col items-start rounded-xl'>
                  <div className='flex items-center'>
                    <span className='text-base text-palatinate-blue'>{list.package} Package</span>
                    <span className='block text-base bg-[#E8EAFF] text-palatinate-blue px-8 py-2 rounded-full ms-3'>Popular</span>
                  </div>

                  <Price price={list.price} time={list.time} />
                  <Feature features={list.features} />
                </div>
              </Fade>
            );
          } else {
            return (
              <Fade up key={list._id} delay={index * 300}>
                <div key={list._id} className='bg-white shadow-black-sm hover:shadow-black-md scale-[0.96] hover:scale-[0.98] transition-all w-[350px] h-auto px-8 py-14 flex flex-col items-start rounded-xl'>
                  <span className='text-base text-palatinate-blue'>{list.package} Package</span>

                  <Price price={list.price} time={list.time} />
                  <Feature features={list.features} />
                </div>
              </Fade>
            );
          }
        })}
      </div>
    </section>
  )
}