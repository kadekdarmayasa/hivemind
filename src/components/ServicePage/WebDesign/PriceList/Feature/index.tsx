import { IconContext } from "react-icons"
import { IoCheckmarkCircleOutline } from "react-icons/io5"

export default function Feature({ features }): JSX.Element {
  return (
    <ul>
      {features.map((feature, index) => (
        <li key={index} className={`text-brave-purple font-light text-lg flex items-start ${index !== 0 ? 'mt-4' : 'mt-10'}`}>
          <div className="mr-3 mt-2">
            {CheckMarkIcon()}
          </div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  )
}

function CheckMarkIcon() {
  return (
    <IconContext.Provider value={{ size: '30px', color: '#5BFBD8' }}>
      <IoCheckmarkCircleOutline />
    </IconContext.Provider>
  )
}