import BlogCarousel from './BlogCarousel/index';
import type { BlogItemProps } from 'types/BlogItem'
import Fade from 'react-reveal/Fade';

export default function Blog({ blogs }: { blogs: BlogItemProps[] }) {
  return (
    <section className="mt-32 2xl:mt-44">
      <div className="flex flex-col items-center text-center">
        <Fade bottom>
          <small className='label-text'>Our Blogs</small>
        </Fade>
        <Fade bottom delay={300}>
          <h2 className="heading-2">Latest Blogs</h2>
        </Fade>
      </div>

      <BlogCarousel blogs={blogs} />
    </section>
  )
}