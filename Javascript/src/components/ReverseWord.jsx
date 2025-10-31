//Hello World  // "olleH dlroW"

import React from 'react'
function ReverseWord() {

    const word = "this is"
    let reverse_word = '';

    reverse_word = word.split(' ').reverse().map((w) => { return w.split('').reverse().join('') }).join(' ')
    console.log(reverse_word)
  return (
    <div>ReverseWord</div>
  )
}

export default ReverseWord