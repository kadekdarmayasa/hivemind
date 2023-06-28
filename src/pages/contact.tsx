import useSWR from 'swr';
import { GetInTouch, FAQ } from '@partials/ContactPage';
import type { FAQProps } from 'types/FAQProps';
import Layout from '@components/Layout';
import { fetcher } from '@utils/fetcher/get';
import Loading from '@components/Loading';

export default function ContactPage() {
  const { data: faqs, isLoading, error } = useSWR<FAQProps[], Error>('/api/faq', fetcher);

  if (error) return false;
  if (isLoading) return <Loading />;

  return (
    <Layout title="Hivemind - Contact">
      <GetInTouch />
      <FAQ faqs={faqs} />
    </Layout>
  );
}
