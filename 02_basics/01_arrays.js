// array

const myArr = [0, 1, 2, 3, 4]

//  arrays methods

// myArr.push(6);
// myArr.pop();

// myArr.unshift(0);
// myArr.shift();

 
// console.log(myArr.includes(9)); // false(bool) => n=emans asking Ques. => includes ?
// console.log(myArr.indexOf(9))  // -1 => value is not in array

// const newArr = myArr.join() // concverts arr type to String (removes [])

// console.log(myArr);
// console.log(newArr);


//  slice, spice 
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // does'nt includes 3 => (didn't includes end)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);





