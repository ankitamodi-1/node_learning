import React from 'react'

function SecondLargestNumber() {
    const arr = [2, 7, 4, 0, 7, 5, 0]
    arr.sort((a, b) => b - a);
    let new_arr = [...new Set(arr)];
    console.log("Second largest number is:", new_arr);
    console.log("Second largest number is:", new_arr[1]);
  return (
    <div>SecondLargestNumber</div>
  )
}

export default SecondLargestNumber