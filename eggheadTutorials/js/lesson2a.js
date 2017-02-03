var message = 'hi';
var message = 'hi2';
console.log(message);

{
    // Should have no impact on following console.log(), right?  Wrong, it DOES!
    var message = 'bye'
}

console.log(message);


function someFunction() {  // var DOES adhere to function scope.
    var message = 'Im in a function';
    console.log(message);
}
someFunction()
console.log(message);
//someFunction()
// So var doesn't work as expeced in 'block' scope, such as 'for' loops.   'let' to the rescue!!!!!






