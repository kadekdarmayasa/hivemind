import parse from 'html-react-parser';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';

export default function WorkSample({ workSample }): JSX.Element {
  return (
    <section className="mt-44">
      <div className='text-center'>
        <Fade up>
          <h2 className='heading-2'>{parse(workSample.title)}</h2>
        </Fade>
        <Fade up delay={300}>
          <p className='w-[870px] mx-auto mt-4 text-brave-purple font-normal text-lg leading-9 mb-5'>{parse(workSample.description)}</p>
        </Fade>
      </div>

      <div className='flex flex-wrap justify-center gap-8 mt-14'>
        {workSample.samples.map((sample, index) => {
          return (
            <Fade up delay={300 * index} key={sample._id}>
              <div key={sample._id} className='rounded-lg relative overflow-hidden group w-[350px] h-[550px]'>
                <Image width={400} height={600} src={sample.imageId} alt={sample.title} className='object-cover w-full h-auto group-hover:scale-105 transition-all' />

                <div className='absolute h-auto w-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black to-gray-700 opacity-40 backdrop-blur-md'></div>

                <div className='absolute bottom-6 group-hover:bottom-8 px-6 transition-all delay-100'>
                  <h3 className='text-2xl text-white font-medium leading-snug mb-2' style={{
                    textShadow: '0 5px 10px rgba(0, 0, 0, .2)',
                  }}>{sample.title}</h3>
                </div>
              </div>
            </Fade>
          )
        })}
      </div>
    </section>)
}