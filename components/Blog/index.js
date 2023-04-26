import PropTypes from 'prop-types';
import BlogCarousel from './BlogCarousel';

export default function Blog({ blogs }) {
  return (
    <section className="mt-30">
      <div className="flex flex-col items-center text-center">
        <h2 className="heading-2">Latest Blogs</h2>
      </div>

      <BlogCarousel blogs={blogs} />
    </section>
  )
}

Blog.propTypes = {
  blogs: PropTypes.array
}