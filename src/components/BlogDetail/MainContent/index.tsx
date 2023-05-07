import parse from 'html-react-parser';

export default function MainContent({ content }: { content: string }): JSX.Element {
    return <div className='blog-detail__main-content px-20'>{parse(content)}</div>
}