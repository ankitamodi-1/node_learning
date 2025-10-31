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
import FindLargestNumber from './components/FindLargestNumber.jsx'
import MergeTwoSortedArray from './components/MergeTwoSortedArray.jsx'
import MissingNumberInArray from './components/MissingNumberInArray.jsx'  
import RemoveDuplicatesFromArray from './components/RemoveDuplicatesFromArray.jsx'
import ReverseWord from './components/ReverseWord.jsx'
import SecondLargestNumber from './components/SecondLargestNumber.jsx'
import StringsAnagrams from './components/StringsAnagrams.jsx'
import RotateArrayKPositions from './components/RotateArrayKPositions.jsx'
import MultiArrToSingleArr from './components/MultiArrToSingleArr'
import StringMatching from './components/StringMatching.jsx'
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
      {/* <CountVowelConsonent />  */}
      {/* <FindLargestNumber />  */}
      {/* <MergeTwoSortedArray /> */}
      {/* <MissingNumberInArray /> */}
      {/* <RemoveDuplicatesFromArray /> */}
      {/* <ReverseWord /> */}
      {/* <SecondLargestNumber /> */}
      {/* <StringsAnagrams/> */}
      {/* <RotateArrayKPositions/> */}
      {/* <MultiArrToSingleArr/> */}
      <StringMatching/>
    </>
  )
}

export default App
