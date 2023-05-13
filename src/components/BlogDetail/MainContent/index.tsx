import parse from 'html-react-parser';
import Fade from 'react-reveal/Fade';

export default function MainContent({ content }: { content: string }): JSX.Element {
    return (
        <Fade up cascade>
            <div className='blog-detail__main-content px-20'>
                {parse(content)}
            </div>
        </Fade>
    );
}