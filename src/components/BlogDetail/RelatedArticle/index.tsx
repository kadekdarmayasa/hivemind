import type { BlogItemProps } from 'types/BlogItem';
import BlogCarousel from '@components/Blog/BlogCarousel';

export default function RelatedArticle({ relatedArticles }: { relatedArticles: BlogItemProps[] }): JSX.Element {
    return (
        <div className='mt-16'>
            <h3 className='heading-3 -mb-10'>Related Articles</h3>

            <BlogCarousel blogs={relatedArticles} />
        </div>
    )
}