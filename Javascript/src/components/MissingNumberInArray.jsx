import React from 'react'

function MissingNumberInArray() {
    const arr = [1, 2, 3, 4, 6, 7, 8, 10];
    let missing_number = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1]  != arr[i]-1)
        {
            console.log(arr[i-1] +"=="+ arr[i])
            missing_number.push(arr[i])
        }
    }
    console.log(missing_number)


  return (
    <div>MissingNumberInArray</div>
  )
}

export default MissingNumberInArray