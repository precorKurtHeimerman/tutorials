// Default Values for Function Parameters in ES6

//function greet(greeting, name) {
//    console.log(greeting + ", " + name);
//}
//greet();

//function greet2(greeting, name = 'kurt') {
//    console.log(greeting + ", " + name);
//}
//greet2('Bye');

/////////////////////////////////// now for functions ///////////////////////////////////////////////////////
function receive(callback) {
    callback();
}
//receive();  // TypeError:  callback is not a function.

// Call receive() but now pass a function.
//receive(() => {
//    console.log('hi');
//});   // logs 'hi'.

// Assign default value to callback.
//function receive2(callback = function() {
//        console.log('hi');
//    }) {
//    callback();
//}
////
//receive2();
//
//// 1st stage of 'arrowing'.
//function receive3Arrowed1(callback = () => {
//    console.log('hi!!!');
//}) {
//    callback();
//}
//
//// 2nd stage of 'arrowing':  single lines need no braces.
 receive3Arrowed1 = (callback = () => console.log('hi???!11') ) => {
    callback();
}
//
receive3Arrowed1()