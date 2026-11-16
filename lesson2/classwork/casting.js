let num_str = "42";
let num_value = Number(num_str);
console.log(num_value + 1);

// Wrong behavior:
// console.log(num_str + 1);

let decimal_str = "3.14";
let decimal_value = Number(decimal_str);
console.log(decimal_value + 2.19);

// Wrong behavior:
// console.log(decimal_str + 2.19);

let whole_num = 7;
let same_num_type = Number(whole_num);
console.log(same_num_type);

let decimal_num = 9.99;
let truncated_num = Math.trunc(decimal_num);
console.log(truncated_num);

let num = 100;
let num_str2 = String(num); // Convert number to string
console.log(num_str2);

