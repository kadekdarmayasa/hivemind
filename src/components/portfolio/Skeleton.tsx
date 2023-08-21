function Skeleton() {
  const skeletonCards = Array.from({ length: 5 }).map((_, index: number) => (
    <div
      key={index}
      className={`rounded-lg relative col-span-12 md:col-span-6 xl:col-span-4 overflow-hidden bg-gray-400 ${
        index === 0 ? `row-span-4 h-[500px]` : 'row-span-2 h-[240px]'
      }`}
    />
  ));

  return <div className="grid grid-cols-12 gap-5 mt-14 animate-pulse">{skeletonCards}</div>;
}

export default Skeleton;
