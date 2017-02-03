
"use strict";  // This is needed even though 'prefer strict' is checked.
let message = 'hi';
//console.log('message is ', message);

//let message = 'hi2';   // Causes syntax error.

{
    let message = 'bye';  // Declares message at block scope.  Has no impact on value of previous 'let'.
    //console.log('message in block is ', message);
}
//console.log('message is ', message);  //



// MORE DETAILED EXAMPLE...............................
var arrayOfFunctions = [];  // Declare a function array.

// Populate each element with a simple function using 'var'.
for(var i=0 ; i<10 ; i++) {
console.log("i is " + i)
    arrayOfFunctions.push(
        function() {
            console.log(i);
        }
    )
}
console.log('what is i finally?', i)
var i=0;
//// Now call each function in the array.
arrayOfFunctions.forEach(

    function(functionInElement) {
        functionInElement();
        i++;
    }
);


// Populate each element with a simple function using 'let'.
//for(let i=0 ; i<10 ; i++) {
//    arrayOfFunctions.push(
//        function() {
//            console.log(i);
//        }
//    )
//}
////
////// Now call each function in the array.
//arrayOfFunctions.forEach(
//    function(functionInElement) {
//        functionInElement();
//    }
//);






