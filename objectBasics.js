/* let obj= new Object(); // "object constructor" syntax
let object = {} // "object literal" syntax

let user = {//object
    name: "john",// by key "name" store value "John"
    age: 30// by key "age" store value 30
};

// Access property values
console.log(user.name);

// Value can be of any type , to add one :
user.Isadmin= true;

// We can remove a property:
delete user.age;



let user2={
    name: "yazid",
    age: 21,
    "like birds": false // Multiword property name
};

//The dot access doesn't work with multiword property names
//that's why we use brackets
user2["like birds"]=true;
console.log(user2["like birds"]);
delete user2["like birds"]


// Computed Properties:

let fruit = prompt("which fruit to buy","fruit");
let bag ={
    [fruit]: 5 // The property name should be taken from the fruit variable. If a user enters apple bag will become {apple: 5}
    [fruit + "Computers"] // we can use complex operation inside property names so : bag.fruitComputers = 5
};

// Property shorthand :
// In real code, we often use existing variables as values for property names

function makeUser(name,age){
    return {
        name:name,
        age:age
    };
}
let User3=makeUser("yazid",32);
console.log(User3);
// while this work there's a shorter way for the function

function makeUserShorter(name,age){
    return {
        name,
        age
    };
}
User3=makeUserShorter("john",43);
console.log(User3);



// Object References and Copying
// Objects are stored somewhere in the memory and variable has a reference (adress) to it

let user = {name:"John"};
let admin = user; // copy the references: we have two variables that reference to the same object.

admin.name="yazid"// changed by the admin references
console.log(user.name); // yazid , yet the changes are seen in 'user' reference


// Comparison by reference

let a ={};
let b = a ;
console.log(a==b);// true
console.log(a===b);// true

// now we compare independent objects:

let c = {};
let d = {};
console.log(c==d);// false

 */

// Cloning objects:

let user ={
    name: "yazid",
    age: 30
};
let clone ={};
for( let key in user){
    clone[key]=user[key];
}
clone.name="peter";
console.log(clone);

// We can also use the Object.assign method

let permission1 = {canView: true};
let permission2 = {canEdit: true};
Object.assign(user,permission1,permission2);
console.log(user);

// TODO Garbage Collection