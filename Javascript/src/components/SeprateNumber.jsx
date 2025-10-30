import React from 'react'

function SeprateNumber() {

    const my_string = "1bab3d544ee33#b555%"
    var num = [];
    var str = [];
    
    //var str_arr = my_string.split('').map(item => { return typeof item } );       
   // var str_arr = my_string.split('').filter(item => isNaN(item) ? str.push(item) : num.push(Number(item)));    
    //var str_arr = my_string.split('').filter(item => { return isNaN(item) ? str.push(item) : num.push(Number(item)) });
    //var str_arr = my_string.split('').filter((item) => { return  isNaN(item) ? str.push(item) : num.push(Number(item)) });    
    
    my_string.split('').forEach(item => {
        if (!isNaN(item) && item !== ' ') {
            num.push(Number(item));   // push numbers
        } else if (/[a-zA-Z]/.test(item)) {
            str.push(item);           // push letters
        }
    });

    const uniqueNumbers = [...new Set(num)];
    console.log(uniqueNumbers);

    const uniqueStr = [...new Set(str)];
    console.log(uniqueStr);

    //console.log(str);
    //console.log(str_arr)

    

  return (
    <div>SeprateNumber</div>
  )
}

export default SeprateNumber