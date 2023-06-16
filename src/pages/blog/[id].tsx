import useSWR from 'swr';
import { useRouter } from 'next/router';
import Loading from '@components/Loading';
import Layout from '@components/Layout';
import { Hero, MainContent, RelatedArticle } from '@partials/BlogDetailPage';
import { fetcher } from '@utils/fetcher/get';
import type { BlogItemProps } from 'types/BlogItem';

type BlogDetailProps = BlogItemProps & {
  content: string;
  image: {
    path: string;
    source: string;
  };
  relatedArticles: BlogItemProps[];
};

export default function BlogDetail() {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { id } = router.query; // will use for getting data when work with API
  const { data, error, isLoading } = useSWR<BlogDetailProps, Error>('/api/blogdetail', fetcher);

  if (error) return false;
  if (isLoading) return <Loading />;

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
        <MainContent htmlString={data.content} />
        <RelatedArticle relatedArticles={data.relatedArticles} />
      </div>
    </Layout>
  );
}
