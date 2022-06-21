//String conversion
let value =true;
console.log(typeof(value));

value=String(value);
console.log(typeof(value));

//numeric conversion
//It happens in mathematical functinos and expression automatically
console.log("6" / "2"); //Output :3. Strings are converted to numbers
let str="123";
console.log(typeof(str)); // string
let number= Number(str); // become a number
console.log(typeof(number)); // number
console.log(Number("   123   "));// 123
console.log(Number("123z"));// NaN
console.log(Number(true));// 1
console.log(Number(false));// 0

