import React from 'react'

function StringMatching() {
    // let a=7, b=5
    //  a=a+b //12
    //  b=a-b //5
    // a = a - b
    // console.log(a +"==="+b)


    let str = "1231a" //"this is ankita"
    let match = /[a-z]/
     console.log(match.test(str))
  return (
    <div>StringMatching</div>
  )
}

export default StringMatching