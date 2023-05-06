import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from "react-icons";
import Fade from 'react-reveal/Fade';

export default function Mission({ missions }: { missions: string[] }): JSX.Element {
  const checkmarkIcon = (
    <IconContext.Provider value={{ size: '30px', color: '#5BFBD8' }}>
      <IoCheckmarkCircleOutline />
    </IconContext.Provider>
  )

  return (
    <div className="flex-1">
      <Fade up>
        <h2 className="heading-2">Our Missions</h2>
      </Fade>
      <ul>
        {missions.map((mission, index) => (
          <Fade up key={index} delay={index * 300}>
            <li className={`text-brave-purple font-normal text-lg leading-9 flex items-start ${index != 0 ? 'mt-4' : 'mt-6'}`}>
              <div className='mr-2 mt-2'>{checkmarkIcon}</div>
              <span>{mission}</span>
            </li>
          </Fade>
        ))}
      </ul>
    </div>
  )
}