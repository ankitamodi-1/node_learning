import React from 'react'

function Palindrome(prop) {

    // var num = prop.number
    // num= num.toString();
    // var new_num = num.split('').reverse().join('')
    // console.log(num)
    // console.log(new_num)

    // if (num === new_num) {
    //     console.log(`${num} is a palindrome number`)
    // }  
    // else {
    //     console.log(`${num} is a not palindrome number`)
    // }
    
    var num = prop.number
    console.log(`Original number is ${num}`)
    var copy_num = num;
    var new_num = 0 ;
     while (copy_num > 0) { 
        new_num = (new_num*10) + copy_num % 10;
        copy_num = parseInt(copy_num / 10);
        console.log("++++++++")
        console.log(new_num)
        console.log(copy_num)        
    }
    console.log(`New number is ${new_num}`)
    if (num === new_num) {
        console.log(`${num} is a palindrome number`)
    }  
    else {
        console.log(`${num} is a not palindrome number`)
    }

  return (
      <div>
          {prop.number}
          { prop.str}
      </div>
  )
}

export default Palindrome