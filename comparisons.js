//string comparisons
console.log('A'>'Z');// JavaScript uses the dictionay order
console.log("glee">"glow");// compares character by character o is greater than e so glow is greater than glee

// Comparison of different types
console.log('2'>1);//true , string '2' becomes a number 2 
console.log('01'==1);// true, sting '01' becomes a number 1


//strict equality
console.log(0==false);//true, == cannot differentiate 0 from false
console.log(''==false);//true.
// This happens because different types to numbers by the equality operator ==. THAT'S WHY WE USE THE STRICT EQUALITY OPERATOR === 
console.log(0 === false);//false, we can now differentiate the types from each other