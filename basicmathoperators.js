let x=1;
x=-1;
console.log(x);// -1, unary negation was applied

//string concatenation
let s="my"+"string";
console.log(s);// mystring , concatenation
console.log("1"+2);// 12
console.log('1'+2+2);// 122 NOT 14 !!!!!
console.log(6-'2');// 4, converts '2' to number
console.log('6'/'2');// 3 , converts both operands to number

//numeric conversion, +unary
let y=-1;
console.log(+y);//-1, has no effect on numbers

console.log(+true);// 1 , converts non numbers
console.log(+"");// 0

let apples="2";
let oranges="3";
console.log(+apples + +oranges);//5


//modify in place
let n=2;
n*=5+3//16, right part evaluated first.
console.log(n);