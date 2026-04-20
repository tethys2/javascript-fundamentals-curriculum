// Problem 1
// Create a list of 4 car brands.
// Print the first and last.
// Then add another brand using push() and print the updated list.
let cars = ["Toyota", "BMW", "Subaru", "Tesla"];
console.log(cars[0]);
console.log(cars[cars.length - 1]);
cars.push("Lamborghini");
console.log("After append:", cars);


// Problem 2
// Create a list of 5 numbers.
// Print the number at index 2.
// Then insert a new number at index 2 and print the updated list.

let nums = [13, 26, 39, 52, 65];
console.log(nums[2]);
nums.splice(2, 0, 99);
console.log("After insert:", nums);

// Problem 3
// Create a list of 3 cities.
// Print the length of the list.
// Then remove one city and print the updated list.


let cities = ["Tokyo", "Berlin", "Nairobi"];
console.log(cities.length);
cities.splice(cities.indexOf("Berlin"), 1);
console.log("After remove:", cities);

// Problem 4
// Create a list of 6 file extensions.
// Print a random one.
// Then pop one at index 3 and print the updated list.

let extensions = ["pdf", "docx", "pptx", "xlsx", "jpg", "mp4"];
let rand_index = Math.floor(Math.random() * extensions.length);
console.log(extensions[rand_index]);
extensions.splice(3, 1);
console.log("After pop at index 3:", extensions);

// Problem 5
// Create a list of 8 names.
// Print the one at the middle index using length.
// Then count how many times a specific name appears.

let users = ["alex01", "bravo12", "charlie23", "delta34", "echo45", "foxtrot56", "golf67", "hotel78"];
let mid_index = Math.floor(users.length / 2);
console.log(users[mid_index]);
users.push("alex01");
console.log("Count of 'alex01':", users.filter((user) => user === "alex01").length);