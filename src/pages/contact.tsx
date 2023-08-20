import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { GetInTouch, FAQ } from '@components/contact';
import type FAQItemType from 'types/FAQItem';
import Layout from '@components/common/Layout';
import { SWRConfig } from 'swr';
import axios from 'axios';

export const getStaticProps: GetStaticProps<{
  fallback: { [key: string]: FAQItemType[] };
}> = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/faqs`);
  const faqs = await res.data.faqs;

  if (!faqs) return { notFound: true };
  return {
    props: {
      fallback: {
        '/api/faqs': faqs,
      },
    },
    revalidate: 10,
  };
};

export default function ContactPage({ fallback }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <SWRConfig value={{ fallback }}>
      <Layout title="Hivemind - Contact">
        <GetInTouch />
        <FAQ />
      </Layout>
    </SWRConfig>
  );
}
