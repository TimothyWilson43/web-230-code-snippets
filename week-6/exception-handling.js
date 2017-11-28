try {
    var x = 0;
    var y = 1;

    var sum = y / x;

    if (sum == Infinity) throw "DivideByZeroException";

    console.log(sum);

} catch (err) {
    console.log("Catch clause: " + err);
} finally {
    console.log("Finally clause: End of program ...");
}