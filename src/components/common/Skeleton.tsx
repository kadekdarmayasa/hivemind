namespace Skeleton {
  export function PortfolioItem() {
    const skeletons = Array.from({ length: 5 }).map((_, index: number) => (
      <div
        key={index}
        className={`rounded-lg relative col-span-12 md:col-span-6 xl:col-span-4 overflow-hidden bg-gray-400 ${
          index === 0 ? `row-span-4 h-[500px]` : 'row-span-2 h-[240px]'
        }`}
      />
    ));

    return <div className="grid grid-cols-12 gap-5 mt-14 animate-pulse">{skeletons}</div>;
  }

  export function CategoryListItem() {
    const skeletons = Array.from({ length: 7 }).map((_, index: number) => (
      <div
        key={index}
        className="h-10 w-64 rounded-full mr-5 transition-all bg-gray-400 animate-pulse"
      />
    ));

    return <div className="flex mt-14 overflow-auto whitespace-nowrap">{skeletons}</div>;
  }

  export function BlogItem() {
    return (
      <div className="h-[auto] rounded-xl relative blog-item md:col-span-6 lg:col-span-4 col-span-12 blog-item animate-pulse">
        <div className="h-[170px] w-full overflow-hidden rounded-t-xl bg-gray-400 mb-10" />
        <div className="h-6 mt-2 w-[240px] bg-gray-400 rounded-sm" />
        <div className="h-4 mt-4 bg-gray-400 rounded-sm" />
        <div className="h-4 mt-4 bg-gray-400 rounded-sm" />
        <div className="h-4 mt-4 bg-gray-400 w-[150px] rounded-sm" />
      </div>
    );
  }
}

export default Skeleton;
