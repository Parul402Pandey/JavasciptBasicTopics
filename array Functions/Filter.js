//Syntax:  array.filter(function(currentValue, index, arr), thisValue)

var ages=[32,33,16];
function myFunction(age)
{
    return age>=18;
}
ages.filter(myFunction);
// returns an array of new eleemnts that passes the test
//index,arr,thisvalue is optional but currentValue is required.

//2. example

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);
  
  alert(someUsers.length);