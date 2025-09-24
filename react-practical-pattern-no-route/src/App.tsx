import { useState } from 'react'
import './App.css'

function App() {
  const [rows, setRows] = useState(4);

  return (
    <div>
      <h2>Star Pattern</h2>
      <label> Rows:
        <input  type="number"  value={rows}  onChange={(e) => setRows(Number(e.target.value))}/>
      </label>

      {Array.from({ length: rows }, (_, i) => (
        <div key={i}>
          {Array.from({ length: i + 1 }, () => "*").join(" ")}
        </div>
      ))}
    </div>
  );
}

export default App
