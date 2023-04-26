import Image from "next/image"
import PropTypes from 'prop-types';
import Star from '../../Star';

export default function TestimonyItem({ testimony }) {
  return (
    <div className="h-auto bg-white w-full px-8 py-10 rounded-lg">
      <div className="flex items-center">
        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
          <Image src={testimony.imagePath} width={50} height={50} alt={testimony.clientName} className="rounded-full" />
        </div>

        <div className="ml-4">
          <h4 className="heading-5">{testimony.clientName}</h4>
          <p className="text-brave-purple text-base font-normal">{testimony.occupation}</p>
        </div>
      </div>

      <div className="my-6">
        <p className="text-coarse-wool text-base font-normal leading-7">"{testimony.message}"</p>
      </div>

      <div className="mt-2">
        <Star value={testimony.rate} width={30} height={30} />
      </div>
    </div>
  )
}


TestimonyItem.propTyopes = {
  testimony: PropTypes.object
}