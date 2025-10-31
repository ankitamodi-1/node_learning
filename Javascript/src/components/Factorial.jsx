import React from 'react'

function Factorial() {
    const num = 6;
    let factorial = 1;
    for(let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${num} is ${factorial}`); 
  return (
    <div>Factorial</div>
  )
}

export default Factorial