// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));   // false


import React from 'react'

export default function StringsAnagrams() {

    const str = "listen";
    const str2 = "silent";
    if (str.split('').sort().join('') === str2.split('').sort().join(''))
        console.log("Same")
    else
        console.log("Not Same")

  return (
    <div>StringsAnagrams</div>
  )
}
