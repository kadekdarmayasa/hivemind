import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from "react-icons";
import Fade from 'react-reveal/Fade';

export default function Vision({ visions }: { visions: string[] }): JSX.Element {
  const checkmarkIcon = (
    <IconContext.Provider value={{ size: '30px', color: '#5BFBD8' }}>
      <IoCheckmarkCircleOutline />
    </IconContext.Provider>
  )

  return (
    <div className="flex-1">
      <Fade up>
        <h2 className="heading-2">Our Visions</h2>
      </Fade>
      <ul>
        {visions.map((vision, index) => (
          <Fade up key={index} delay={300 * index}>
            <li className={`text-brave-purple font-normal text-lg leading-9 flex items-start ${index !== 0 ? 'mt-4' : 'mt-6'}`}>
              <div className='mr-2 mt-2'>{checkmarkIcon}</div>
              <span>{vision}</span>
            </li>
          </Fade>
        ))}
      </ul>
    </div>
  )
}