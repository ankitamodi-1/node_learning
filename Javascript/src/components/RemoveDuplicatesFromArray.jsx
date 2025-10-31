

import React from 'react'

function RemoveDuplicatesFromArray() {

    let arr = [1, 2, 2, 3, 4, 4, 5, 7, 4, 2, 4, 6, 74, 10, 10];
    let new_arr = [];
    arr.forEach((item) => { 
        if (!new_arr.includes(item))
            new_arr.push(item)
    })
    console.log(new_arr)

  return (
    <div>RemoveDuplicatesFromArray</div>
  )
}

export default RemoveDuplicatesFromArray