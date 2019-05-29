//way to achieve inheritance in javascript
let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal;
  var data=rabbit.jumps;
  console.log(data);