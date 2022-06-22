/* function helloWorld() {
    return "hello world";
}
helloWorld();
// default value

function showMessage(text="default text"){
    console.log(text);
}
//default value function
function showMessage2(text=helloWorld()){
    console.log("message is "+ text);
}
showMessage2();

//function expression

let sayHi= function(){
    console.log("hello");
};
sayHi();

let fun=sayHi;
fun();



// callback functions
//PS: THIS WON'T WORK ON NODE SINCE THERE'S NO confirm function on node so test them on brower dev tool

function ask(question,yes,no){
    if (confirm(question)) yes();
    else no();

}

ask("do you agree",
function(){alert("you agreed");},// anonymous function
function(){alert("you canceled");});// anonymous function

// another way of doing it
function showCancel(){
    alert("you canceled");
}
function showAgree(){
    alert("you agreed");
}
ask("do you agree",showAgree,showCancel);// showAgree and showCancel are callback functions

// function expression vs function declaration
//  function expression is only created when the execution reaches it and is ONLY USABLE from that moment
// function declaration can be used EARLIER than it's defined: it is visiblle to the whole script no matter where it is.

// for example this works

examplefunc("yazid");
function examplefunc(name){
    console.log(`hello, ${name}`);
}

 */

//Arrow functions

let sum=(a,b) => a+b;
console.log(sum(4,5));
// function parameters
let double = n => n*2;
console.log(double(5));
