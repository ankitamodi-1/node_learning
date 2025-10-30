import React from 'react'


function Reverse() {

    var str = "I am ankita";
    console.log(str)
    console.log("++++++++++++++++++")
    var new_str = str.split("").reverse().join('');
    console.log(str)
    console.log(new_str)

  return (
      <div>{new_str}</div>
  )
}

export default Reverse