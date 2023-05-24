import React from 'react';
import Layout from '@components/Layout';
import BlogPage from '@partials/BlogPage/index.tsx';
import useSWR from 'swr';
import type { BlogItemProps } from 'types/BlogItem';
import { fetcher } from '@utils/fetcher/get';

export default function Blog() {
  const { data, error, isLoading } = useSWR<BlogItemProps[], Error>('/api/blogpage', fetcher);

  if (error || isLoading) return false;

  return (
    <Layout title="Hivemind - Blog">
      <BlogPage blogs={data} />
    </Layout>
  );
}
