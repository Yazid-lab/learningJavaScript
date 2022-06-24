// strings are immutable in JavaScript

let str="hi";
str[0]='p'; //doesn't work
console.log(str[0]);// shows error noramlly on a browser console

// a workarround this is creating a whole new string
str = 'p'+str[1];
console.log(str);

// changing the case
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//looking for a substring

str= "Widget with id";
console.log(str.indexOf("Widget"));// 0
console.log(str.indexOf("widget"));//-1, because the search is case sensitive
console.log(str.indexOf("id"));//1 in w"id"get
console.log(str.indexOf("id",2));//12



//includes, startsWith, endsWith
console.log("widget with id".includes("widget")); // return true
console.log("widget with id".includes("widget",3)); // false 
console.log("widget".startsWith("wid"));// true
console.log("widget".endsWith("get")); //true
