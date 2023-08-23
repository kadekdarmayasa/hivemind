import Layout from '@components/common/Layout';
import {
  CompanyPhilosophy,
  CompanyMission,
  CompanyVision,
  CompanyTeam,
  CompanyWorkCulture,
} from '@components/about';

export default function AboutPage() {
  return (
    <Layout title="Hivemind - About">
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
  );
}
