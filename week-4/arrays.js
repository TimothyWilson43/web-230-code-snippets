// one dimensional array
var numbers = [15, 22, 37, 14, 5];

// iterate over the array and output the results
for (var x = 0; x < numbers.length; x++) {
    console.log(numbers[x]);
}


// new line
console.log("\n"); 

// one dimensional array
var names = ["Steve", "John", "Chris", "Adam"];

// function - one identifier (array of values)
function getNames(arr) {
    for (var j = 0; j < names.length; j++) {
        console.log(names[j]);
    }
}

// output the results
getNames(names);