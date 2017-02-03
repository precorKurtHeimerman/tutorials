// Shorthand properties (ez way to get data 'in') are THE OPPOSITE of destructuring (an ez way to get data 'out').
"use strict";
let firstName = 'kurt';
let lastName = 'heimerman';

let person = {
    firstName: firstName,    // ES5 syntax
    lastName                // ES6 syntax
}
//console.log('person is ', person);

let mascot = 'moose';

let team = {mascot, person};
// Same as:
//let team = {
//    mascot: mascot,
//    person: person
//}


console.log('team is ', team);

// Shorthand properties are a way of writing cleaner code by taking advantage of the fact you're probably going to
// end up naming the key the same as the value anyway.
