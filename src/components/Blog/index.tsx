import React from 'react';
import type { BlogItemProps } from 'types/BlogItem';
import Slider from 'react-slick';
import BlogItem from './BlogItem.tsx';

export default function Blog({ blogs }: { blogs: BlogItemProps[] }) {
  const settings = {
    className: 'slider variable-width',
    infinite: false,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: true,
    slidesPerRow: 1,
    rows: 1,
  };

  return (
    // TODO: Add Framer Motion for Animation
    <section className="mt-32 2xl:mt-44">
      <div className="flex flex-col items-center text-center">
        <small className="label-text">Our Blogs</small>
        <h2 className="heading-2">Latest Blogs</h2>
      </div>

      <div className="h-auto mt-14 mb-20">
        <Slider {...settings} className="bg-ghost-white h-auto">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
