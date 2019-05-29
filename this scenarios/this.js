//this has four scenarios
// in strict mode
var a=function data()
{
    console.log(this); //throws an error
}

//without strict mode
var a=function data()
{
    console.log(this);
}


//using arrow function
var reg={
    name:"parul",
    gfg1: function()
    {
        console.log(this.name);
    },
    gfg2 :()=>
    {
         name="kajal";
        console.log(this.name);
    }
};
reg.gfg1();