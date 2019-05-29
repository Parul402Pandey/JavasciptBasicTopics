//apply takes  array like object instead of listing the arguments out one at a time

function personContainer()
{
    var person={
        name:"james",
        hello:function()
        {
            console.log(this.name);
        }
    };
    person.hello.apply(person,arguments);

}
personContainer("world","mars");
