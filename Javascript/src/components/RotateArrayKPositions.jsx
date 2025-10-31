//console.log(rotateArray([1,2,3,4,5], 2)); // [4,5,1,2,3] : 2 position right move

import React from 'react'

function RotateArrayKPositions() {

    const arr = [1, 2, 3, 4, 5 ,6 ,7];
    const k = 2;
    let new_arr = arr.slice(0, arr.length - k);
    let rem_arr = arr.slice(arr.length - k );
    console.log(new_arr + "==" + rem_arr)
    
    const rotated_array = rem_arr.concat(new_arr);
    console.log(rotated_array)

  return (
    <div>RotateArrayKPositions</div>
  )
}

export default RotateArrayKPositions