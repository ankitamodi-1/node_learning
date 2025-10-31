import React from 'react'

function FindLargestNumber() {
    var arr=[3,4,7,8,22,1,3,44,2,5]
    console.log(arr.includes(9))
    const max = arr.reduce((a, b) => (a > b ? a : b), 0);
    const sum = arr.reduce((a, b) => ( a+b), 0);
    console.log(max)
    console.log(sum )
    console.log(sum/arr.length)
    
      return (
        <div>FindLargestNumber</div>
      )
}

export default FindLargestNumber