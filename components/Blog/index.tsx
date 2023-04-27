import BlogCarousel from './BlogCarousel/index';
import { BlogItem } from 'interfaces/BlogItem';

export default function Blog({ blogs }: { blogs: Array<BlogItem> }) {
  return (
    <section className="mt-32">
      <div className="flex flex-col items-center text-center">
        <h2 className="heading-2">Latest Blogs</h2>
      </div>

      <BlogCarousel blogs={blogs} />
    </section>
  )
}