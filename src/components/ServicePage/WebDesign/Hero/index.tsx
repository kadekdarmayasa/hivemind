import parse from 'html-react-parser';
import Button from 'components/Button';
import { IconContext } from 'react-icons';
import { IoChatboxOutline } from 'react-icons/io5';
import { MutableRefObject } from 'react';
import Fade from 'react-reveal/Fade';

export default function Hero({ hero, refServiceOffered }: { hero: any, refServiceOffered: MutableRefObject<HTMLElement> }) {
  const showOfferedServices = () => {
    window.scrollTo({
      top: refServiceOffered.current.offsetTop - 50,
      behavior: 'smooth'
    })
  }

  return (
    <section className="mt-24">
      <div className='w-[870px] text-center mx-auto'>
        <Fade up>
          <h1 className='heading-1'>{parse(hero.headline)}</h1>
        </Fade>

        <Fade up>
          <p className='text-brave-purple font-normal text-xl leading-9 mt-5'>{hero.headlineDescription}</p>
        </Fade>

        <Fade up>
          <div className="flex mt-14 mx-auto justify-center">
            <Button type='link' href='/contact' isPrimary classNames={['h-[60px]', 'w-[250px]', 'rounded-full', 'hover:shadow-purple-md', 'transition-all']}>
              <IconContext.Provider value={{ size: '1.6em', className: "mr-2", }}>
                <IoChatboxOutline className="h-10" />
              </IconContext.Provider>
              <span className="text-lg">Get a Consultation</span>
            </Button>
            <Button classNames={['h-[60px]', 'w-[210px]', 'ml-6', 'group', 'relative']} onClick={showOfferedServices}>
              <div className="rounded-xl h-8 w-5 border-palatinate-blue border-[2px] relative flex justify-center mr-4">
                <span className="animate-bounce block w-1 h-2 rounded-lg top-2 bg-palatinate-blue absolute"></span>
              </div>
              <span className="text-lg underline-offset-8">Scroll to read more</span>
              <div className="absolute h-[2px] w-0 opacity-0 left-0 group-hover:opacity-100 group-hover:w-full transition-all bg-palatinate-blue bottom-1"></div>
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  )
}