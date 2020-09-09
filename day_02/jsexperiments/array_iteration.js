var txt = "";
var numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
      txt = txt + value + "-";
}

numbers.forEach(myFunction);



// ------------------------------------------------

var numbers1 = [45, 4, 9, 16, 25];
function myFunction2(value, index, array) { return value * 2; }
var numbers2 = numbers1.map(myFunction2);



// -----------------------------------------------

var numbers = [45, 4, 9, 16, 25];
function myFunction3(value, index, array) {return value > 18; }
var over18 = numbers.filter(myFunction3);



// -----------------------------------------------

var numbers1 = [1, 2, 3, 4, 5];
var sum = numbers1.reduce(myFunction4);
function myFunction4(prev, curr, index, array) { return prev + curr;}


// -------------------------------------------------

var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction5);
var allOver18 = numbers.every(myFunction5);
function myFunction5(value, index, array) {return value > 18;}


console.log(someOver18, allOver18)

// ---------------------------------------------------

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction6);
var firstIndex = numbers.findIndex(myFunction6);
function myFunction6(value, index, array) {return value > 18;}

console.log(first, firstIndex)