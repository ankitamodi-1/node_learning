// src/components/UserList.jsx
import { useFetchData } from "../hooks/useFetchData";

function CustomeHook() {
  const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default CustomeHook;
