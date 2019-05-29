//Syntax:--array.find(function(currentValue, index, arr),thisValue)
//returns new array that satisfy the condition .

//once it finds true for an array element it doesnot  check for the next value

var ages = [4, 12, 16, 20];
function checkAdult(age)
{
    return age >=12;
}
ages.find(checkAdult);

//doesnot change the original array
//doenot work on empty arrays.