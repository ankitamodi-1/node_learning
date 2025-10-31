import React from 'react'

function CapitalizeChar() {

    const str = "i am learning react";
    console.log(str.slice(0));
    console.log(str.slice(1));
    console.log(str.slice(2));
    console.log(str.slice(3,7));
    //console.log(str.slice(1));
    var new_str = str.split(" ").map((word) => { return word.toUpperCase().charAt(0) + word.slice(1) });
    console.log(new_str)  
    var final_str = new_str.join(" ");
    console.log(final_str)  
    
  return (
    <div>CapitalizeChar</div>
  )
}

export default CapitalizeChar