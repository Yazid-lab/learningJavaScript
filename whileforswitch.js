// while loop syntax
let i=0;
while (i<3) {
    console.log(i);
    i++;
}
//do while
do {
    console.log(i);
    i++;
} while (i<6);

//for loop + break
for (let index = 0; index < 5; index++) {
    if (index==3){console.log("you hit break condition");
    break;}
    console.log(index);
}
// for loop + continue 
for (let index = 0; index < 5; index++) {
    if (index==3){console.log("you hit break condition");
    continue;}
    console.log(index);
}

//switch statement

let a=2+2;
switch (a) {
    case 3:
        console.log("too small");    
        break;
    case 4:
        console.log("right answer");
        break;
    default:
        console.log("wrong answer");
}