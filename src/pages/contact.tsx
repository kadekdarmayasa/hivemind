import { GetInTouch, FAQ } from "@components/contact"
import Layout from "@components/common/Layout"
import Head from "next/head"

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Hivemind | Contact</title>
        <meta
          name="description"
          content="If you have any questions in mind just reach out us here"
        />
      </Head>
      <GetInTouch />
      <FAQ />
    </Layout>
  )
}
