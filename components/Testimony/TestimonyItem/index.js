import Image from "next/image"
import PropTypes from 'prop-types';
import Star from '../../Star';

export default function TestimonyItem({ testimony }) {
  return (
    <div className="h-[340px] bg-white w-full relative px-8 py-10 rounded-lg shadow-black-sm">
      <div className="flex items-center">
        <Image src={testimony.imagePath} width={50} height={50} alt={testimony.clientName} className="rounded-full" />

        <div className="ml-4">
          <h4 className="heading-6">{testimony.clientName}</h4>
          <p className="text-brave-purple text-sm font-normal">{testimony.occupation}</p>
        </div>
      </div>

      <div className="my-6">
        <p className="text-coarse-wool text-base font-normal leading-7">"{testimony.message}"</p>
      </div>

      <div className="absolute mt-auto bottom-6">
        <Star value={testimony.rate} width={30} height={30} />
      </div>
    </div>
  )
}


TestimonyItem.propTyopes = {
  testimony: PropTypes.object
}