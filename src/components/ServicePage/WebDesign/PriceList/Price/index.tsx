export default function Price({ price, time }: { price: number, time: string }): JSX.Element {
  return (
    <div className="flex mt-8">
      <p className="font-bold text-2xl mt-1 text-coarse-wool">$</p>
      <div className="flex items-end">
        <h1 className="heading-1 !text-6xl !mb-0 !mt-0">{price}</h1>
        <span className="font-light text-lg text-brave-purple">/{time}</span>
      </div>
    </div>
  )
}