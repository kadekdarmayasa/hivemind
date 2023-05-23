import Fade from 'react-reveal/Fade';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectedState } from '@redux-slices/dropdownSlice';
import Image from 'next/image';

export default function Hero({
    publishedDate,
    author,
    title,
    imageId,
    imageOriginSource
}: {
    publishedDate: string,
    author: string,
    title: string,
    imageId: string,
    imageOriginSource?: string
}): JSX.Element {
    const status = useAppSelector(selectedState);

    return (
        <>
            <Fade up cascade>
                <div className={`px-20 relative ${status === 'open' ? '-z-10' : ''}`}>
                    <div className="flex items-center">
                        <span className="label-text mr-2">{author}</span>
                        <span className="label-text mr-2">·</span>
                        <span className="label-text">{publishedDate}</span>
                    </div>
                    <h1 className="heading-1 !mt-2">{title}</h1>
                </div>
            </Fade>

            <Fade>
                <figure className={`mt-10 mb-10 relative ${status === 'open' ? '-z-10' : ''}`}>
                    <Image src={imageId} alt={title} width={500} height={400} className='!w-full !h-auto rounded-xl' />
                    <figcaption className="text-center text-brave-purple font-light mt-2">{imageOriginSource}</figcaption>
                </figure>
            </Fade>
        </>
    )
}