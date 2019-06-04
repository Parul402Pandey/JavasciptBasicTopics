var keepHisWord;
keepHisWord=false;
var promise=new Promise(function(resolve,reject)
{
    if(keepHisWord)
    {
        resolve("success");
    }
    else{
        reject("error");
    }
}
);
//console.log(promise);
// flow for promises
// promise => fullfilled => .then() => async actions
// promise => reject => .then() || .catch() => if called .then() => return promise => if .catch() => error handling

//another example
/*var promise=new Promise(function(resolve,reject)
{
const x="Parul";
const y="paru";
if(x==y)
{
    resolve();
}
else
{
    reject();
}

});*/
/*promise.then(function(result)
{
    //success call
},function(error){
    //error call
});*/
 promise.then(function(success){}).catch(function(error){
     console.log(error);
 });

// async 
//if we apply async to the  function then it always returns a promise object
async function f() {
    return Promise.resolve(1);
  }
  
  f().then(alert); // 1
  // await always works inside the async function only
  async function f() {
    // waits for 1 second, then result becomes 2
    let result = await new Promise(); // wait until the promise response is get then execute next line
    alert(result);
  }