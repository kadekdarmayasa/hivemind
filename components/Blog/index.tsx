import BlogCarousel from './BlogCarousel/index';
import { BlogItemProps } from 'types/BlogItem';

export default function Blog({ blogs }: { blogs: BlogItemProps[] }) {
  return (
    <section className="mt-32">
      <div className="flex flex-col items-center text-center">
        <h2 className="heading-2">Latest Blogs</h2>
      </div>

      <BlogCarousel blogs={blogs} />
    </section>
  )
}