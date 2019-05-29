//Syntax:- arr.indexOf(item, from) 
//secong args is optional
//looks for item starting from index from, and returns the index where it was found, otherwise -1.

let arr = [1, 0, false];

console.log( arr.indexOf(0) ); //1
console.log( arr.indexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1

//Syntax:- array.includes(element, start)
// secong arg is optional
// search paticular element in the array and returns true or false according to search
console.log( arr.includes(1) )