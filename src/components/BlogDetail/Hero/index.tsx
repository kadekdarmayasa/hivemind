import Fade from 'react-reveal/Fade';
import { useAppSelector } from 'redux/hooks';
import { selectedStatus } from 'slices/dropdownSlice';

export default function Hero({
    publishedDate,
    author,
    title,
    imagePath,
    imageOriginSource
}: {
    publishedDate: string,
    author: string,
    title: string,
    imagePath: string,
    imageOriginSource?: string
}): JSX.Element {
    const status = useAppSelector(selectedStatus);

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
                    <img src={imagePath} alt="" className="w-full h-auto rounded-xl" />
                    <figcaption className="text-center text-brave-purple font-light mt-2">{imageOriginSource}</figcaption>
                </figure>
            </Fade>
        </>
    )
}