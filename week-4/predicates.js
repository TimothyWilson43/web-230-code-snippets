function predicate_example(x) {
    return x > 8;
}

// filter() example
var even_numbers = [2, 4, 6, 8, 10];

var filtered_numbers = even_numbers.filter(predicate_example);

console.log(filtered_numbers[0]);
