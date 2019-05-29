// Syntax:- arr.forEach(function(currentValue,index,arr),thisValue)
var numbers=[65,44,12,4];
function myFunction(item)
{
    sum+=item;
    return sum;
}
console.log(numbers.forEach(myFunction));
// the forEach() calls the particular callback function for each element of the array
