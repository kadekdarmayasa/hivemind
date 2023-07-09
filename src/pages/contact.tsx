import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { GetInTouch, FAQ } from '@components/contact';
import type FAQItemType from 'types/FAQItem';
import Layout from '@components/common/Layout';

export const getStaticProps: GetStaticProps<{ faqs: FAQItemType[] }> = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faqs`);
  const faqs = await res.json();

  if (!faqs) return { notFound: true };
  return { props: { faqs }, revalidate: 10 };
};

export default function ContactPage({ faqs }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Hivemind - Contact">
      <GetInTouch />
      <FAQ faqs={faqs} />
    </Layout>
  );
}
