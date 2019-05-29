//bind attach  this into function and itb needs to be invoked separately
var person = {  
    name: "James Smith",
    hello: function(thing) {
      console.log(this.name + " says hello " + thing);
    }
  }
  
  person.hello("world");  // output: "James Smith says hello world"
  var helloFunc = person.hello.bind({ name: "Jim Smith" });
  helloFunc("world");  // output

  //or
  var helloFunc=person.hello.bind({name:"jim smith"},"world");
  //var data=person.hello.bind();
  helloFunc();