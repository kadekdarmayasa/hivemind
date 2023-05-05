import parse from 'html-react-parser';
import Image from 'next/image';
import { MutableRefObject } from 'react';

export default function ServiceOffered({ servicesOffered, refServiceOffered }: {
  servicesOffered: any, refServiceOffered: MutableRefObject<HTMLElement>
}): JSX.Element {
  return (
    <section className="mt-44" ref={refServiceOffered}>
      <div className='text-center'>
        <h2 className='heading-2'>{parse(servicesOffered.title)}</h2>
        <p className='w-[800px] mx-auto mt-4 text-brave-purple font-normal text-lg leading-9 mb-5'>{servicesOffered.description}</p>
      </div>

      <div className='flex flex-wrap justify-center gap-8 mt-14'>
        {servicesOffered.options.map(option => {
          return (
            <div key={option._id} className='bg-white shadow-black-sm hover:shadow-black-md hover:scale-[1.02] transition-all w-[350px] h-[550px] px-10 py-14 flex flex-col items-start rounded-xl'>
              <div className='bg-palatinate-blue w-20 h-20 flex items-center justify-center rounded-lg mb-8'>
                <Image src={option.imagePath} height={30} width={30} alt={option.name} style={{ width: '40px' }} />
              </div>
              <h3 className='heading-3 mb-3'>{option.title}</h3>
              <p className='text-brave-purple font-light text-lg leading-9 mb-5'>{option.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}