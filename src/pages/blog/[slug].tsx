import axios from 'axios';
import { useRouter } from 'next/router';
import type BlogItemType from 'types/BlogItem';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from '@components/common/Layout';
import Loading from '@components/common/Loading';
import { Cover, MainContent } from '@components/blogdetail';

type BlogDetailProps = BlogItemType & {
  content: string;
  coverImage: string;
};

export const getStaticProps: GetStaticProps<{
  blogDetail: BlogDetailProps;
}> = async ({ params }) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.slug}`);
  const blogDetail = await res.data;

  if (!blogDetail) return { notFound: true };
  return { props: { blogDetail }, revalidate: 1 };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { slug: 'default-slug' } }],
  fallback: true,
});

export default function BlogDetail({ blogDetail }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) <Loading />;
  return (
    <Layout title={blogDetail.title}>
      <div className="mt-14 blog-detail mx-auto max-w-[1020px]">
        <Cover
          publishedDate={blogDetail.publishedAt}
          author={blogDetail.author.username}
          title={blogDetail.title}
          imageId={blogDetail.coverImage}
        />
        <MainContent htmlString={blogDetail.content} />
      </div>
    </Layout>
  );
}
