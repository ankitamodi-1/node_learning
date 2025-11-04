import { usePaginatedFetch } from "../hooks/usePaginatedFetch";

function CustomHookWithPagincation() {
    
     
     localStorage.setItem("local_name", "ankita")
     sessionStorage.setItem("session_name", "ankita")
     
  const {
    data: posts,
    loading,
    error,
    page,
    totalPages,
    nextPage,
    prevPage,
  } = usePaginatedFetch("https://jsonplaceholder.typicode.com/posts", { pageSize: 5 });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={prevPage} disabled={page === 1}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
   );
}

export default CustomHookWithPagincation;
