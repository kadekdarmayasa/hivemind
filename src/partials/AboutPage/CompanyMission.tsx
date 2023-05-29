import React, { useMemo } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export default function CompanyMission({ missions }: { missions: string[] }) {
  const iconProps = useMemo(() => ({ size: '30px', color: '#5BFBD8' }), []);

  // TODO: using framer motion for animation
  return (
    <div className="flex-1">
      <h2 className="heading-2">Our Missions</h2>

      <ul>
        {missions.map((mission, index) => (
          <li
            className={`text-brave-purple font-normal text-lg leading-9 flex items-start ${
              index !== 0 ? 'mt-4' : 'mt-6'
            }`}
          >
            <div className="mr-2 mt-2">
              <IconContext.Provider value={iconProps}>
                <IoCheckmarkCircleOutline />
              </IconContext.Provider>
            </div>
            <span>{mission}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
