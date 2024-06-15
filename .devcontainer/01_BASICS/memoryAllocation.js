// Stack memory (Primitive data types) -- get copy of every varible
//Heap memory (Non Primitive data types) -- get reference of every variable

let myYouTubeName= "Rohini Raut"
let anotherName=myYouTubeName
//console.log(anotherName);

anotherName="Rooooooooo Raut"
// console.log(myYouTubeName);
// console.log(anotherName);

let userOne={
    email:"roraut@gmail.com",
    age:23
}

console.log(userOne);

let userTwo=userOne;
console.log(userTwo);

userTwo.email="rohini@gmail.com";

console.table(userTwo);