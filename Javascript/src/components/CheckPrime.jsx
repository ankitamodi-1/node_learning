import React from 'react'

function CheckPrime() {
    const number = 53;
    var is_prime = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        console.log(number % i)
        if (number % i === 0) {
            is_prime = 0
            break;
        }            
    }
    console.log(is_prime)
    console.log(`${number} is ${is_prime ? 'a prime number' : 'not a prime number'}`);
  return (
    <div>CheckPrime</div>
  )
}

export default CheckPrime



//devtool for testing