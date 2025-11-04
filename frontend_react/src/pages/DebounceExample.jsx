import React, { useState, useEffect } from "react";

function DebounceExample() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // 🕓 Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(timer); // cleanup old timer
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API call for:", debouncedQuery);
      // Call your API here
    }
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default DebounceExample;
