import React from 'react'

function MultiArrToSingleArr() {
    const multiArr = [[1, 2], [3, 4], [5, 6]];
    // const singleArr = multiArr.flat();
    // console.log(singleArr); // Output: [1, 2, 3, 4, 5, 6]

    let final_arr = multiArr.reduce((a, b) => a.concat(b), []);
    console.log(final_arr)

    //console.log(final_arr.splice(1, 0))
    console.log(final_arr.slice(2,4))
    console.log(final_arr)
  return (
    <div>MultiArrToSingleArr</div>
  )
}

export default MultiArrToSingleArr