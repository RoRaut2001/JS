const name="Rohini"
const repoCOunt= 20
//console.log(name+repoCOunt);

//  backticks  ---> button bellow the Esc on keyboard
console.log(`Hello ${name} and repo count is ${repoCOunt}`);

const gameName= new String("Rohini Raut")

//console.log(gameName);

//console.log(gameName.__proto__); // output--> {} (Object)(which contain number of values which we can see in console)
//inbuild methods for string  or inbuild functions
//ex- toUpperCase(), charAt(2), indexOf(("t")) etc.

//slicing
const newString = gameName.substring(0,4) //does not include char at index 4
//console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

/* The slice method is called on gameName with the arguments -8 and 4.
In the slice method, 
if the start index is negative, it is treated as stringLength + startIndex. 
So -8 becomes 11 - 8 = 3 (where 11 is the length of "Rohini Raut").
The endIndex is 4.
The slice method then extracts characters from index 3 to index 4 (excluding index 4).
Character Extraction:

The character at index 3 in "Rohini Raut" is 'i'.
Since the end index 4 is exclusive, only the character at index 3 is included in the result.
Result:

The result of the slicing operation is the string 'i'.*/

// .trim() --> it removes spaces in the string
// replace()

// console.log(gameName.replace('Rohini','Rohan'));
// console.log(gameName.includes('Raut'));
// console.log(gameName.includes('raut'));

const str= "Rohini-Raut-Mangalwedha";
console.log(str.split('-'));
