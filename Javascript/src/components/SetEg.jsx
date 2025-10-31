import React from 'react'

export default function SetEg() {
     const mySet = new Set();

    // Add values
     mySet.add(1);
    mySet.add(2);
    mySet.add(102);
    mySet.add('a');

    console.log(mySet.has(2)); // true
    console.log(mySet.has(3)); // false

    // Delete a value
    mySet.delete(1);
    console.log(mySet); // Set {2, 102, 'a'}

    // Size
    console.log(mySet.size); // 3

   
  
  for (let item of mySet) {
   console.log("~~>>"+item); //~~>2  ~~>102 ~~>a 
  }
  
   // Clear
  mySet.clear();
  console.log(mySet.size); // 0
  return (
    <div>Set</div>
  )
}
