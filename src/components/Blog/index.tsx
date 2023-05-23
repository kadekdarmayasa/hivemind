import BlogCarousel from './BlogCarousel'
import type { BlogItemProps } from 'types/BlogItem'

export default function Blog({ blogs }: { blogs: BlogItemProps[] }) {
  return (
    // TODO: Add Framer Motion for Animation
    <section className='mt-32 2xl:mt-44'>
      <div className='flex flex-col items-center text-center'>
        <small className='label-text'>Our Blogs</small>
        <h2 className='heading-2'>Latest Blogs</h2>
      </div>

      <BlogCarousel blogs={blogs} />
    </section>
  )
}