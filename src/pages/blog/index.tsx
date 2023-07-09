import useSWR from 'swr';
import { fetcher } from '@utils/fetcher/get';
import BlogItem from '@components/common/Blog/BlogItem';
import Layout from '@components/common/Layout';
import type BlogItemType from 'types/BlogItem';
import Loading from '@components/common/Loading';

export default function BlogPage() {
  const { data, isLoading } = useSWR<{ blogs: BlogItemType[] }>('/api/blog', fetcher);

  if (isLoading) return <Loading />;
  return (
    <Layout title="Hivemind - Blog">
      <section className="relative mt-10 grid grid-cols-12 grid-flow-dense sm:gap-x-8 gap-y-10">
        {data.blogs.map((blog, index) => (
          <BlogItem
            key={blog.id}
            blog={blog}
            contentWidth={index === 0 ? 'large' : 'default'}
            index={[2, 0, 1][index % 3]}
            isGridItem
          />
        ))}
      </section>
    </Layout>
  );
}
