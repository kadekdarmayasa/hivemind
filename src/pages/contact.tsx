import { GetInTouch, FAQ } from '@components/contact';
import Layout from '@components/common/Layout';

export default function ContactPage() {
  return (
    <Layout title="Hivemind - Contact">
      <GetInTouch />
      <FAQ />
    </Layout>
  );
}
