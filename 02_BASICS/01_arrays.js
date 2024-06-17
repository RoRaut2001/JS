//() parentheses 
// [] --> arrays defined in square brackets
// {} --> braces

const myArray = [ 1, 3, 0, 4, 'rohini'] // arrays are resizable in javaScript      
const heros=['pk','gh']
// arrays method -------------------------------------------------------------
// myArray.push(4)
// console.log(myArray);
// myArray.pop()

// myArray.unshift(23) // it insert this value at the first position of array
// console.log(myArray);
// myArray.shift()
// console.log(myArray);
//includes(), indexOf(), etc/
// const newArr = myArray.join() // convert type of array in string
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1,3)
console.log('myn1',myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3) // it delete the splice part from the original array also

console.log("c", myArray);
console.log('myn2',myn2);