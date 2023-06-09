import Layout from '@components/Layout';
import useSWR from 'swr';
import type { ContactInformationProps } from 'types/ContactInformation';
import type { FAQProps } from 'types/FAQProps';
import { GetInTouch, FAQ } from '@partials/ContactPage';
import { fetcher } from '@utils/fetcher/get';

type ContactProps = {
  contactInformations: ContactInformationProps[];
  faqs: FAQProps[];
};

export default function ContactPage() {
  const { data, isLoading, error } = useSWR<ContactProps, Error>(
    '/api/contactpage',
    fetcher,
  );

  if (isLoading || error) return false;

  return (
    <Layout title="Hivemind - Contact">
      <GetInTouch contactInformations={data.contactInformations} />
      <FAQ faqs={data.faqs} />
    </Layout>
  );
}
