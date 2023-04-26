import Slider from "react-slick";
import PropTypes from 'prop-types';
import BlogItem from "../BlogItem";

export default function BlogCarousel({ blogs }) {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: true,
    slidesPerRow: 1,
    rows: 1,
  };

  return (
    <div className="h-auto mt-14 mb-20">
      <Slider {...settings} className="bg-ghost-white h-auto">
        {blogs.map(blog => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </Slider>
    </div>
  )
}

BlogCarousel.propTypes = {
  blogs: PropTypes.array
}