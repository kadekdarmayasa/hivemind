import React from 'react';
import type { BlogItemProps } from 'types/BlogItem';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectedState } from '@redux-slices/dropdownSlice';
import BlogItem from './BlogItem/index.tsx';

export default function BlogPage({ blogs }: { blogs: BlogItemProps[] }) {
  const dropdownState = useAppSelector(selectedState);

  return (
    <section className={`relative mt-14 grid grid-cols-12 grid-flow-dense gap-x-5 gap-y-10 ${dropdownState === 'open' ? '-z-10' : 'z-0'}`}>
      {blogs.map((blog, index) => {
        if (index === 0) {
          return <BlogItem key={blog.id} blog={blog} contentWidth="large" />;
        }
        return <BlogItem key={blog.id} blog={blog} contentWidth="default" />;
      })}
    </section>
  );
}
