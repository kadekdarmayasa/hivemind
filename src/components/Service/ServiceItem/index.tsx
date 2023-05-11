import type { ServiceProps } from "types/Service";
import Image from "next/image";
import Button from "components/Button";
import { IconContext } from "react-icons";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function ServiceItem({ service }: { service: ServiceProps }): JSX.Element {
  return (
    <div key={service._id} className='bg-white shadow-black-sm hover:shadow-black-md hover:scale-[1.02] transition-all w-[350px] 2xl:w-[380px] h-[500px] 2xl:h-[520px]  px-10 py-14 flex flex-col items-start rounded-xl'>
      <div className='bg-palatinate-blue w-20 h-20 flex items-center justify-center rounded-lg mb-8'>
        <Image src={service.imagePath} height={30} width={30} alt={service.name} style={{ width: '40px' }} />
      </div>
      <h3 className='heading-3 mb-3'>{service.name}</h3>
      <p className='text-brave-purple font-light text-lg leading-9 mb-5'>{service.briefDescription}</p>
      <Button type='link' href={`/service/${service.slug}`} classNames={['place-self-start', 'mt-auto', 'relative', 'group']}>
        <span className='text-lg'>Learn more</span>
        <IconContext.Provider value={{ size: '1.3em', className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all', color: '#2B3BE5' }}>
          <IoArrowForwardSharp />
        </IconContext.Provider>
        <div className='absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue'></div>
      </Button>
    </div>
  )
}