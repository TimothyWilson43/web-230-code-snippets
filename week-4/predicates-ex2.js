// array of fruits
var fruits = ["apple", "orange", "mango"];

// function that accepts two arguments, an index placeholder and a filterable value
function getFruit(el, value)
{
    if (el == value)
        return value;
}

console.log(" --Selected value-- ");
// output the results using the console.log() function
console.log (
    fruits.filter // built-in JavaScript function for returning a subset of records
    (
        function (el)
        {
            return getFruit(el, "mango") // use the getFruit function to return a matching fruit
        }
    )[0] // return the first element in the return array
);
