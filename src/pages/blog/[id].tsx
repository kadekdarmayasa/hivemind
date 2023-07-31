import axios from 'axios';
import { useRouter } from 'next/router';
import type BlogItemType from 'types/BlogItem';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from '@components/common/Layout';
import Loading from '@components/common/Loading';
import { Cover, MainContent } from '@components/blogdetail';

type BlogDetailProps = BlogItemType & {
  content: string;
  image: string;
  imageOriginSource: string;
  relatedArticles: BlogItemType[];
};

export const getStaticProps: GetStaticProps<{
  blogDetail: BlogDetailProps;
}> = async ({ params }) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogdetail/${params.id}`);
  const blogDetail = await res.data;

  if (!blogDetail) return { notFound: true };
  return { props: { blogDetail }, revalidate: 1 };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { id: '1' } }],
  fallback: true,
});

export default function BlogDetail({ blogDetail }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) <Loading />;
  return (
    <Layout title={blogDetail.title}>
      <div className="mt-14 blog-detail mx-auto max-w-[1020px]">
        <Cover
          publishedDate={blogDetail.publishedDate}
          author={blogDetail.author}
          title={blogDetail.title}
          imageId={blogDetail.image}
          imageOriginSource={blogDetail.imageOriginSource}
        />
        <MainContent htmlString={blogDetail.content} />
      </div>
    </Layout>
  );
}
