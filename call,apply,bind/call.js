//Syntax:- call() attach this into function and invoke the function immediately

var person={
    name:'james smith',
    hello:function(thing){
        console,log(this.name+"says hello"+thing);
    }
}
person.hello("world");
//james smith says hello world

person.hello.call({name:"Parul"},"world");

//parul says hello world

//call() and apply() are same only there invocation way varies