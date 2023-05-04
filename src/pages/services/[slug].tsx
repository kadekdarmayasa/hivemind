import { useRouter } from "next/router";
import Layout from "components/Layout";

export default function Service(): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;

  console.log(router.asPath);

  return (
    <Layout title="Hivemind - Service">
      <h1>{slug}</h1>
    </Layout>
  )
}