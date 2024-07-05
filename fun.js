console.log("😁😁😁")
console.log(a) // not defined - error | undefined - value and data type
var a =10;
// Interpreted language - First step is compilation and second step is execution.
// Javascript hoisting

var price = 300;

function getPrice(){
    console.log("The price is old:",price)
    var price = 500
    console.log("The price is new:",price)
}

getPrice()