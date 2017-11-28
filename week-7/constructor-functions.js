// object literal
var book = {
    title: "JavaScript: The Definitive Guide, 6th edition",
    author: "Flanagan",
    publicationDate: "2011"
};
console.log(book.title);

console.log(""); // new line

// constructor object
function Book(title, author) {
    this.title = title;
    this.author = author;
}

var books = [
    new Book("Don Quixote", "Miguel De Cervantes"),
    new Book("A Tale of Two Cities", "Charles Dickens"),
    new Book("The Lord of the Rings", "J.R.R. Tolkien")
];

for (var x = 0; x < books.length; x++) {
    console.log(books[x].title);
}