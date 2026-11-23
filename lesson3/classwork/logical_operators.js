let age = 14;
let has_ticket = "yes";

if (age >= 13 && has_ticket == "yes"){ // AND: both conditions must be true
    console.log("You can enter the PG-13 movie");
}
else{
    console.log("Sorry, you can't enter");
}
console.log("Movie check complete");

let has_pass = "yes";
let has_coins = "no";

if (has_pass == "yes" || has_coins == "yes"){ // OR: at least one condition is true
    console.log("You can ride the bus");
}
else{
    console.log("You can't ride the bus");
}

let homework_done = "no";

if(!(homework_done == "yes")){ // NOT: flips true to false and false to true
    console.log("Go finish your homework!");
}
else{
    console.log("Nice job! You're all done.");
}
console.log("Homework check complete");

let is_raining = "yes";
let has_umbrella = "yes";

if (is_raining == "yes" && !(has_umbrella == "yes")){
    console.log("You might get wet! Stay inside.");
}
else if (is_raining && has_umbrella == "yes"){
    console.log("You're ready to go!");
}
else{
    console.log("No rain; you're good to go");
}