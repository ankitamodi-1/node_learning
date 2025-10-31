import React from 'react'

function CountVowelConsonent() {
    const str = "A A a B b c C +";
    const vovel =['a','e','i','o','u'];
    var vovel_count = 0;
    var consonent_count = 0;
    str.split('').forEach(char => {
        if (vovel.includes(char.toLowerCase()))
        {
            vovel_count++
        }
        else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')
        {
            consonent_count++
        }
    })
    console.log("vovel_count is " + vovel_count)
    console.log("consonent_count is " +consonent_count)
  
    return (
        <div>CountVowelConsonent</div>  
    )
}

export default CountVowelConsonent
const str = "Hello World for vovel count";

str.split('').forEach(char => {
})