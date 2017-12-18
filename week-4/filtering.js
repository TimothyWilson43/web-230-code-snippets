// one dimensional array
var names = ["Steve", "John", "Chris", "Adam"];

// function - two comma-separated list of identifiers
function getName(arr, filterValue) {
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === filterValue) {
            return arr[k];
        }
    }
}

// display the array's contents
console.log("-- DISPLAYING NAMES --");
for (var j = 0; j < names.length; j++) {
    console.log(names[j]);
}

// new line
console.log("\n");

// unit test
console.log(" -- SELECTED VALUE --");
console.log(getName(names, "John"));

// new line
console.log("\n");

// unit test
console.log(" -- SELECTED VALUE --");
console.log(getName(names, "Adam"));

