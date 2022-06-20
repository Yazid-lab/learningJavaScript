let message="hello";
message=123124;
//JavaScript is dynamically typed: variables are not bound to any data type.

//NUMBER

let n= 123;
n= 12,34;
//the number type represents both integers and floating point numbers

//INFINITY
//respresents the mathematical infinity. It's a special value that's greater than any number

alert(1/0);//alerts infinity

alert(Infinity);//  we can reference it directly

//NAN: Not A Number is a result of an incorrect mathematical operation for instance:
alert("not a number"/2);// NaN , such division is erroneous
//NaN is sticky . Any operation on NaN will return NaN
alert(NaN+1);//NaN
alert(NaN*3);//NaN
alert("not a number"/2 -1);//NaN
//there only one exception to that
alert(NaN **0);//returns 1




//BigInt : Number can't represent integer values larger than 2^53 -1 (9007199254740991) or less than -2^53 -1 for negatives
// a BigInt value is created by appending an n to the end of the integer

const BigInt=12312312313212313123123n;


//String
// a string in javascript must be surrounded by quotes
// in javascript there's three types of quotes
let str="hello";// double quotes
let str2='single quotes are ok too';//single quotes
let phrase=`can embed another ${str}`;//backticks : theses allow us to to embed variables and expressions into strings by using ${}

let name = "john";
//embed a variable
alert(`Hello,${name}`);
//embed an expression
alert(`the result is ${1+2}`);

// THERE'S NO  CHARACTER TYPE IN JAVASCRIPT.




//BOOLEAN


let isGreater= 4>1;
alert(isGreater);//true



// the null value:it's a special value that represents "nothing" or "empty" or "value unknown"
let age=null;// age is unknown


//the undefined value: it's meaning is "value not assigned"
let test;
alert(test);// shows "undefined"

