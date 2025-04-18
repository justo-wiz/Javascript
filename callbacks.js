

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2,) {
    let sum = num1 + num2;
    return sum;
}
let result = myCalculator(5, 10);
myDisplayer(result);


// mySecond();
// myFirst();
