export default function BlogSkeleton() {
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
