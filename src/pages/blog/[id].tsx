import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import useSWR from 'swr';
import type { BlogItemProps } from 'types/BlogItem';
import { Hero, MainContent, RelatedArticle } from '@partials/BlogDetailPage';
import { fetcher } from '@utils/fetcher/get';

type BlogDetailProps = BlogItemProps & {
  content: string,
  image: {
    path: string,
    source: string,
  },
  relatedArticles: BlogItemProps[]
}

export default function BlogDetail() {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { id } = router.query; // will use for getting data when work with API
  const { data, error, isLoading } = useSWR<BlogDetailProps, Error>('/api/blogdetail', fetcher);

  if (error || isLoading) return false;

  return (
    <Layout title={data.title}>
      <div className="mt-14 blog-detail mx-auto max-w-[1020px]">
        <Hero
          publishedDate={data.publishedDate}
          author={data.author}
          title={data.title}
          imageId={data.image.path}
          imageOriginSource={data.image.source}
        />
        <MainContent content={data.content} />
        <RelatedArticle relatedArticles={data.relatedArticles} />
      </div>
    </Layout>
  );
}
