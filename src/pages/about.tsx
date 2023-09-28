import Layout from "@components/common/Layout"
import {
  CompanyPhilosophy,
  CompanyMission,
  CompanyVision,
  CompanyTeam,
  CompanyWorkCulture,
} from "@components/about"
import Head from "next/head"

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>Hivemind | About</title>
      </Head>
      <section className="relative mt-14">
        <CompanyPhilosophy />
        <div className="flex flex-col lg:flex-row mt-14 gap-10">
          <CompanyMission />
          <CompanyVision />
        </div>
      </section>
      <CompanyTeam />
      <CompanyWorkCulture />
    </Layout>
  )
}
