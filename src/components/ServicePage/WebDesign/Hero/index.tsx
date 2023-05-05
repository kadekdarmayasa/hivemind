import parse from 'html-react-parser';
import Button from 'components/Button';
import { IconContext } from 'react-icons';
import { IoChatboxOutline } from 'react-icons/io5';

export default function Hero({ hero }) {
  return (
    <section className="mt-14">
      <div className='w-[800px] text-center mx-auto'>
        <h1 className='heading-1'>{parse(hero.headline)}</h1>
        <p className='text-brave-purple font-normal text-xl leading-9 mt-5'>{hero.headlineDescription}</p>
        <div className="flex mt-12 mx-auto justify-center">
          <Button type='link' href='/contact' isPrimary classNames={['h-[60px]', 'w-[250px]', 'rounded-full', 'hover:shadow-purple-md', 'transition-all']}>
            <IconContext.Provider value={{ size: '1.6em', className: "mr-2", }}>
              <IoChatboxOutline className="h-10" />
            </IconContext.Provider>
            <span className="text-lg">Get a Consultation</span>
          </Button>
          <Button classNames={['h-[60px]', 'w-[210px]', 'ml-6', 'group', 'relative']} onClick={() => { }}>
            <div className="rounded-xl h-8 w-5 border-palatinate-blue border-[2px] relative flex justify-center mr-4">
              <span className="animate-bounce block w-1 h-2 rounded-lg top-2 bg-palatinate-blue absolute"></span>
            </div>
            <span className="text-lg underline-offset-8">Scroll to read more</span>
            <div className="absolute h-[2px] w-0 opacity-0 left-0 group-hover:opacity-100 group-hover:w-full transition-all bg-palatinate-blue bottom-1"></div>
          </Button>
        </div>
      </div>
    </section>
  )
}