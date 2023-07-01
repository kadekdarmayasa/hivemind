import useSWR from 'swr';
import CONFIG from '@globals/config';
import Layout from '@components/Layout';
import BlogItem from '@components/Blog/BlogItem';
import Loading from '@components/Loading';
import { fetcher } from '@utils/fetcher/get';
import { useScreenSize } from '@hooks/useScreenSize';
import type { BlogItemProps } from 'types/BlogItem';

export default function BlogPage() {
  const { data: blogs, error, isLoading } = useSWR<BlogItemProps[], Error>('/api/blog', fetcher);
  const { screenSize } = useScreenSize();
  const getScreenSizeWidth = () => screenSize.width || window.innerWidth;
  const customIndexs = [2, 0, 1];

  if (error) return false;
  if (isLoading) return <Loading />;

  return (
    <Layout title="Hivemind - Blog">
      <section className="relative mt-10 grid grid-cols-12 grid-flow-dense sm:gap-x-8 gap-y-10">
        {blogs.map((blog, index) => (
          <BlogItem
            key={blog.id}
            blog={blog}
            contentWidth={index === 0 ? 'large' : 'default'}
            index={
              !index || getScreenSizeWidth() > CONFIG.MOBILE_VIEWPORT_SIZE
                ? index
                : customIndexs[index % 3]
            }
            isGridItem
          />
        ))}
      </section>
    </Layout>
  );
}
