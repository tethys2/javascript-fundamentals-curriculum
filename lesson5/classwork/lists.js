let colors = ["red", "green", "blue", "yellow", "maroon"];  // Create an array

console.log(colors);  // Print the entire array

console.log("First color: ", colors[0])
console.log("Second color: ", colors[1])
console.log("Third color: ", colors[2])
console.log("Fourth color: ", colors[3])
console.log("Fifth color: ", colors[4])

colors.push("purple");
colors.push("blue");
console.log("After append: ", colors)

colors.splice(2, 0, "pink");
console.log("After insert at index 2: " + colors)

let popped_color = colors.pop()
console.log("Popped color: " + popped_color);
console.log("After pop:", colors)

let popped_color_at_index = colors.splice(1, 1)[0];
console.log("Popped color at index 1:" + popped_color_at_index);
console.log("After pop at index 1: " + colors)


let index_of_blue = colors.indexOf("blue");  // Find the index of an item
console.log("Index of 'blue':", index_of_blue);

colors.push("blue");
console.log(colors);
let blue_count = colors.filter((color) => color == "blue").length
console.log("Count of 'blue': ", blue_count);

colors.sort();
console.log("Sorted array: " + colors);

colors.reverse();  // Reverse the order of the array
console.log("After reverse:", colors);

console.log("Length of the array:", colors.length);  // Get number of items in the array