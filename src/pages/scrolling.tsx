import React, {
  useState,
  useRef,
  useCallback,
  ChangeEvent
} from "react";
import useBookSearch from "hooks/useBookSearch";

export default function Srolling() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const {
    books,
    hasMore,
    isLoading,
    error
  } = useBookSearch(query, pageNumber);

  const observer = useRef<IntersectionObserver>(null);

  const lastBookElementRef = useCallback((node: HTMLElement) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [isLoading, hasMore]);


  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    setPageNumber(1);
  }

  return (
    <React.Fragment>
      <input type="text" value={query} className="border-2 border-gray-500 block mx-auto mt-10 h-10 w-[300px] px-2" onChange={handleSearch} />

      <div className="flex flex-col items-center mt-10 px-10">
        {books.length > 0 ? (
          <>
            {books.map((book, index) => {
              if (books.length === index + 1) {
                return <div key={book} ref={lastBookElementRef} className="mt-5">{book}</div>
              } else {
                return <div key={book} className="mt-5">{book}</div>
              }
            })}
          </>
        ) : (
          <>
            {!isLoading && <div>Data Not Found</div>}
          </>
        )}


        <div>{isLoading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </div>
    </React.Fragment>
  )
}