import { useState, useLayoutEffect } from 'react';
import Layout from '@components/Layout';
import useSWR from 'swr';
import BlogItem from '@components/Blog/BlogItem';
import type { BlogItemProps } from 'types/BlogItem';
import { fetcher } from '@utils/fetcher/get';

export default function BlogPage() {
  const { data, error, isLoading } = useSWR<BlogItemProps[], Error>('/api/blogpage', fetcher);
  const [screenSize, setScreenSize] = useState({ width: 0 });

  useLayoutEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  if (error || isLoading) return false;

  return (
    <Layout title="Hivemind - Blog">
      <section className="relative mt-10 grid grid-cols-12 grid-flow-dense gap-x-8 gap-y-10">
        {data.map((blog, index) => (
          <BlogItem
            key={blog.id}
            blog={blog}
            contentWidth={index === 0 ? 'large' : 'default'}
            index={index === 0 && screenSize.width > 576 ? index : [2, 0, 1][index % 3]}
            isGridItem
          />
        ))}
      </section>
    </Layout>
  );
}
