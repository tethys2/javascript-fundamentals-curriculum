// Problem 1
// Create a variable for height in centimeters.
// Print "Tall" if the height is greater than 170, otherwise print "Short".

let height = 178;
if (height > 170){
    console.log("tall");
}
else{
    console.log("short");
}


// Problem 2
// Create a variable for age.
// If they are 18 or older, print "Adult", else print "Minor".

let age = 16;
if (age >= 18) {
    console.log("Adult");
}
else{
    console.log("Minor");
}

// Problem 3
// Create a variable for a number.
// Print "Fizz" if it is divisible by 3, "Buzz" if divisible by 5,
// print "FizzBuzz" if divisible by both 3 and 5,
// otherwise print the number itself.

let num = 30;
if ( num % 3 == 0 && num % 5 == 0){
    console.log("FizzBuzz");
}
else if(num % 3 == 0){
    console.log("Fizz");
}
else if(num % 5 == 0){
    console.log("Buzz");
}
else{
    console.log(num);
}



// Problem 4
// Create a variable for a password.
// If the password is "sova" or "coding", print "Access granted".
// Otherwise print "Access denied".

let password = "sova";

if (password = "sova" || password == "coding"){
    console.log("Access granted");
}
else{
    console.log("Access denied");
}


// Problem 5
// Create a variable for a test score (0-100).
// Print the grade based on score:
//   90 and above: "A"
//   80 to 89: "B"
//   70 to 79: "C"
//   60 to 69: "D"
//   below 60: "F"
// Use nested if or else if statements.

let score = 83;
if (score >= 90){
    console.log("A");
}
else if (score >= 80){
    console.log("B");
}
else if (score >= 80){
    console.log("B");
}
else if (score >= 70){
    console.log("C");
}
else if (score >= 60){
    console.log("D");
}
else{
    console.log("F");
}