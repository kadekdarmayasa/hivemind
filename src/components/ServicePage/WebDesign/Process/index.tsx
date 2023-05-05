import parse from 'html-react-parser';
import Image from 'next/image';

export default function Process({ process }): JSX.Element {
  return (
    <section className="mt-44">
      <div className='text-center'>
        <h2 className='heading-2'>{parse(process.title)}</h2>
        <p className='w-[870px] mx-auto mt-4 text-brave-purple font-normal text-lg leading-9 mb-5'>{parse(process.description)}</p>
      </div>

      <div className='flex flex-wrap justify-center gap-8 mt-14'>
        {process.steps.map(step => {
          return (
            <div className='w-60 h-72 bg-white shadow-black-sm flex flex-col items-center py-10 px-5 justify-center hover:scale-[1.02] transition-all hover:shadow-black-md'>
              <div className='h-28 w-28 bg-[#E8EAFF] flex justify-center items-center rounded-full'>
                <Image width={70} height={70} alt={step.title} src={step.imagePath} />
              </div>

              <div className='mt-8 text-center'>
                <span className='text-palatinate-blue text-sm tracking-wide'>{step.label}</span>
                <h4 className='heading-4 mt-1'>
                  {step.title}
                </h4>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}