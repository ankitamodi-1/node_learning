import React from 'react'


function CountOccurenceString() {
    const str = "hello world  nice   world nice time world";
    var str_arr = []
    //string
    str.split(" ").forEach(element => {
        if (element.trim() !== "") {
            str_arr[element] = (str_arr[element] || 0) + 1
        }
    })
    console.log(str_arr)
        str_arr.forEach((value, index) => {  console.log(index+":"+value) 
    })
    
    str_arr = []
    // str.split("").forEach(element => { 
    //     str_arr[element] = (str_arr[element] || 0) + 1;

    // });
    // console.log(str_arr)
    //     str_arr.forEach((value, index) => {  console.log(index+":"+value) 
    // })
    
    // const n = 101;
    // console.log(Math.ceil(n / 2))
    // console.log(Math.floor(n / 2))
    // console.log(Math.max(1,2,3))
   
  return (
    <div>CountOccurenceString</div>
  )
}


export default CountOccurenceString