//arr.splice(str) This method can be used to insert,remove and replace array elements

//syntax:- arr.splice(index,deleteCount,elem1,....,elemN)


//          SCENARIO FIRST
var arr=["I","study","javascript"];
var arr=arr.splice(1,1,"Es6");
console.log(arr);

//Explanation:-starts from index position removes the deletecount element then inserts the more element
//returns the array of delete items.
//the original array get changed



//          SCENARIO SCEOND
//splice method is also able to insert the elements without deletion
let arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex", "language");

console.log( arr ); // "I", "study", "complex", "language", "JavaScript"
