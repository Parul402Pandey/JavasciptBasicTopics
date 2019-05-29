//map is an object in javascipt that holds values in key value pair
 //Syntax:- new Map([it])
 // it- it is an iterable objects whose values stored as key,value pair
 //if parameter is not specified then a new map is created that is Empty
var map1=new Map([[1 , 2], [2 ,3 ] ,[4, 5]]);
console.log(map1);

//arr.map();
//map() doesnot change original array
//map() creates  a new array with the result of calling a function for  evry array element
var numbers = [4, 9, 16, 25];
numbers.Map(Math.sqrt);
