//console.log(mergeSorted([1,3,5],[2,4,6])); // [1,2,3,4,5,6]
import React from 'react'

function MergeTwoSortedArray() {

    var arr = [1, 3, 5, 7, 2, 11, 4, 6, 8, 0];
    var arr2 = [22,55,8,1,4,66,4,8,2];
    var arr1 = arr;
    var arr3 = arr;
    var arr4 = [];

    //Asc order
    arr2.sort((a, b) => a - b);
    console.log(arr2)
    //Asc order
    arr.sort((a, b) => {    
        return a - b;
    });    
    console.log(arr);

    //merge and sort
    //arr4.push(...arr, ...arr2);
    arr4= arr.concat(arr2).sort((a,b)=> a-b);
    console.log(arr4)


    //Desc order
    // arr1.sort((a, b) => b - a );
    // console.log(arr1);
    // let tmp;
    
    // //Bubble sort
    // for (let i = 0; i < arr3.length; i++) {
    //     for (let j = i; j < arr3.length; j++) {
    //         if (arr3[i] > arr3[j])
    //         {
    //             tmp = arr3[i]
    //             arr3[i] = arr3[j]
    //             arr3[j] = tmp 
    //         }
    //     }
    // }
    // console.log(arr3)

  return (
    <div>MergeTwoSortedArray</div>
  )
}

export default MergeTwoSortedArray

