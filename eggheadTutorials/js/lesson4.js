var VALUE = 'Hello, world!';
VALUE = 'foo bar';
//console.log('VALUE is ' + VALUE);

const VALUE2 = 'Hello, everyone!';
//VALUE2 = 'pizza';     // Throws TypeError.
//console.log('VALUE2 is ' + VALUE2);

// Now try maps....
const VALUE3 = {};
VALUE3.foo = 'bar';
//VALUE3 = 'BOO!';   // Throws TypeError.
//console.log('VALUE3 is', VALUE3);


// Examples of use:
const API_KEY = 'xxx';
const PORT = '7000';

// 'const' (similar to 'let') adheres to block scope, which is anything between braces.
if(true) {
    const foo = 'bar';
    console.log('foo is ' + foo);   // Should display 'bar'.
}
console.log('foo is ' + foo);   // Should be undefined.



