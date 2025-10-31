import { useState } from 'react'
import './App.css'
import Reverse from './components/Reverse.jsx'  
import Palindrome from './components/Palindrome.jsx'
import Fibonacii from './components/Fibonacii.jsx'
import SeprateNumber from './components/SeprateNumber.jsx'
import SetEg from './components/SetEg.jsx'  
import Factorial from './components/Factorial.jsx'
import CapitalizeChar from './components/CapitalizeChar.jsx'
import CheckPrime from './components/CheckPrime.jsx'
import CountOccurenceString from './components/CountOccurenceString.jsx'
import CountVowelConsonent from './components/CountVowelConsonent.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Reverse />   */}
      {/* <Palindrome number={201102} str={"ankita"} /> */}
      {/* <Fibonacii />  */}
      {/* <SeprateNumber /> */}
      {/* <SetEg /> */}
      {/* <Factorial /> */}
      {/* <CapitalizeChar /> */}
      {/* <CheckPrime />   */}
      {/* <CountOccurenceString /> */}
      <CountVowelConsonent /> 
    </>
  )
}

export default App
