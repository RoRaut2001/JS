// data types are based on the how it is stored in memory and how to access it
// primitive and non primitive data types

//primitive  --7
// string, number, boolean, null, undefined, Symbol, BigInt
//symbol --> to make a value as unique.


// return type of val
// undefined--> undefined
// Null --> Object

// reference type: non primitive 
// arrays, objects, functions


// java script is dynamically typed or statically typed language??
// dynamically typed language

//type script----> whcih define the type of data types
// const score: number=100;

const score=100
const scoreValue= 100.4

const isLoggedIn= true
const outsideTemp= null
let userEmail;

const id=Symbol("123")
const id2=Symbol("123")
console.log(id);
console.log("id2");
console.log(id2);

console.log(id == id2);
//Two Symbols with the same description are not equal because they are different unique instances.

const bigNumber = 3483296429734863278642387n //n -> convert number into bigInt
console.log(bigNumber);


// non primitive

const heros=["sk","pk","gk"]; //array
let myObj={ 
    name:"Rohini",
    age: 22
} // object

const myFun=function(){
    console.log("Hello");
}

console.log(typeof myFun) //object function 
console.log(typeof id);