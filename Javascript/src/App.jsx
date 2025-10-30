import { useState } from 'react'
import './App.css'
import Reverse from './components/Reverse.jsx'  
import Palindrome from './components/Palindrome.jsx'
import Fibonacii from './components/Fibonacii.jsx'
import SeprateNumber from './components/SeprateNumber.jsx'
import SetEg from './components/SetEg.jsx'  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Reverse />   */}
      {/* <Palindrome number={201102} str={"ankita"} /> */}
      {/* <Fibonacii />  */}
      {/* <SeprateNumber /> */}
      <SetEg />
    </>
  )
}

export default App
