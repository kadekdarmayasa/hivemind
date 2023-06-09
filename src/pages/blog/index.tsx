import { useEffect, useState } from 'react';
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

  const [screenSize, setScreenSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ ...screenSize, width: window.innerWidth });
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
        {data.map((blog, index) => {
          if (index === 0) {
            return (
              <BlogItem
                key={blog.id}
                blog={blog}
                contentWidth="large"
                index={index}
                isGridItem
              />
            );
          }

          return (
            <BlogItem
              key={blog.id}
              blog={blog}
              contentWidth="default"
              index={screenSize.width > 576 ? [2, 0, 1][index % 3] : 0}
              isGridItem
            />
          );
        })}
      </section>
    </Layout>
  );
}
