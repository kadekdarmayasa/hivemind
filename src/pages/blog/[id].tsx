import { useRouter } from "next/router";
import Layout from "components/Layout";
import useSWR from 'swr';
import axios from "axios";
import type { BlogItemProps } from 'types/BlogItem';
import { Hero, MainContent, RelatedArticle } from "components/BlogDetail";

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function BlogDetail(): JSX.Element | any {
    const router = useRouter();
    const { id } = router.query; // will use for getting data when work with API
    const { data, error, isLoading } = useSWR<BlogDetailProps, Error>('/api/blogdetail', fetcher);

    if (error || isLoading) return false;

    return (
        <Layout title={data.title}>
            <section className="mt-14 blog-detail mx-auto max-w-[1020px]">
                <Hero publishedDate={data.publishedDate} author={data.author} title={data.title} imagePath={data.imagePath} imageOriginSource={data.imageOriginSource} />
                <MainContent content={data.content} />
                <RelatedArticle relatedArticles={data.relatedArticles} />
            </section>
        </Layout>
    )
}

type BlogDetailProps = BlogItemProps & {
    content: string,
    relatedArticles: BlogItemProps[]
}