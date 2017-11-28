var person = {
    fullName: "John Doe",

    get name() {
        return this.fullName;
    },

    set name(val) {
        this.fullName = val;
    }
};

console.log("Before");
console.log(person.name);

person.name = "Jane Doe";

console.log(""); // new line

console.log("After");

console.log(person.name);