var obj={name:"Parul"};
var a=function()
{
    console.log(this.name);
}
var b=()=>
{
    console.log(this.name);
}
a(obj);
b();