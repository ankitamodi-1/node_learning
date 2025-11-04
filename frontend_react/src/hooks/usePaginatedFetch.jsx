import { useState, useEffect } from "react";

export function usePaginatedFetch(baseUrl, { pageSize = 10, startPage = 1 } = {}) {
  const [page, setPage] = useState(startPage);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!baseUrl) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Append pagination params (you can customize for your API)
        const url = `${baseUrl}?_page=${page}&_limit=${pageSize}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");

        const totalItems = response.headers.get("X-Total-Count"); // common in JSONPlaceholder
        if (totalItems) setTotalPages(Math.ceil(totalItems / pageSize));

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, page, pageSize]);

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));
  const goToPage = (p) => setPage(Math.min(Math.max(p, 1), totalPages));

  return {
    data,
    loading,
    error,
    page,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  };
}
