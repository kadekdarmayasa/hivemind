import { useEffect, useState } from "react";
import axios, { Canceler } from "axios";

export default function useBookSearch(query: string, pageNumber: number) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query])

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    let cancel: Canceler;

    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((response) => {
      setBooks(prevBooks => {
        return [...new Set([...prevBooks, ...response.data.docs.map(((b) => b.title))])]
      })
      setHasMore(response.data.docs.length > 0);
      setIsLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;
      setError(true);
    })

    return () => cancel();
  }, [query, pageNumber]);

  return { isLoading, error, books, hasMore };
}