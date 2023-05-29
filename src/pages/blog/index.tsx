import React from 'react';
import Layout from '@components/Layout';
import useSWR from 'swr';
import BlogItem from '@components/Blog/BlogItem';
import type { BlogItemProps } from 'types/BlogItem';
import { fetcher } from '@utils/fetcher/get';

export default function BlogPage() {
  const { data, error, isLoading } = useSWR<BlogItemProps[], Error>(
    '/api/blogpage',
    fetcher,
  );

  if (error || isLoading) return false;

  return (
    <Layout title="Hivemind - Blog">
      <section className="relative mt-14 grid grid-cols-12 grid-flow-dense gap-x-5 gap-y-10">
        {data.map((blog, index) => {
          if (index === 0) {
            return (
              <BlogItem
                key={blog.id}
                blog={blog}
                contentWidth="large"
                isGridItem
              />
            );
          }
          return (
            <BlogItem
              key={blog.id}
              blog={blog}
              contentWidth="default"
              isGridItem
            />
          );
        })}
      </section>
    </Layout>
  );
}
