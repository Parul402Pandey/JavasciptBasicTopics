class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // proof: User is a function
  alert(typeof User); // function

  //class is similar to function in ES5