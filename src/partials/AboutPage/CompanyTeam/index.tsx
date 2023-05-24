import React from 'react';
import type { TeamProps } from 'types/Team';
import TeamCarousel from './TeamCarousel/index.tsx';

export default function CompanyTeam({ teams }: { teams: TeamProps[] }) {
  // TODO: Using framer motion for animation
  return (
    <section className="mt-32">
      <h2 className="heading-2 text-center">Meet Our Professional Teams</h2>
      <TeamCarousel teams={teams} />
    </section>
  );
}
