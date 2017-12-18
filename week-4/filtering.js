// one dimensional array
var fruits = ["apple", "orange", "banana", "mango"];

// function - two comma-separated list of identifiers
function getFruit(arr, filterValue) {
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === filterValue) {
            return arr[k];
        }
    }
}

// display the array's contents
console.log("-- DISPLAYING FRUITS --");
for (var j = 0; j < fruits.length; j++) {
    console.log(fruits[j]);
}

// new line
console.log("\n");

// unit test
console.log(" -- SELECTED VALUE --");
console.log(getFruit(fruits, "apple"));

// new line
console.log("\n");

// unit test
console.log(" -- SELECTED VALUE --");
console.log(getFruit(fruits, "orange"));

