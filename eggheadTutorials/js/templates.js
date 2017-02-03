// String Templates in ES6


var salutation = 'Hello';
//var greeting = salutation + ', World';
//console.log('greeting is: ', greeting);


// ES6 allows you to put your variables INTO strings...
//greeting = `${salutation}, World`;
//console.log('greeting is: ', greeting);


// Templating respects white space, tabs and crlfs, too!
// PLUS you can replace any string wth a variable.
// PLUS you can replace any string with an expression.
//var someVariable = 'Florida';
//var x = 1;
//var y = 2;
//var greetingWithWhiteSpaceAndCRLFs = `
//
//
//    ${salutation},
//
//            ${someVariable}
//
//    I have ${ x + y } dollars!
//
//
//`;
//console.log('greeting is: ', greetingWithWhiteSpaceAndCRLFs);


// You can also parse the template containing strings and values and
// dynamically generate the message.
var message = `It's hour ${new Date().getHours()} I'm sleepy`;
//console.log(message);  // This doesn't work until after 9 pm!  'sleepy' should be a variable.

// Make a function.
function tag(strings, ...values) {
    console.log('strings is: ', strings)   // An array of groups of parsed strings.
    console.log('values is: ', values); // What values returns - the hour.
    if(values[0] < 21) {
        values[1] = "I'm awake";
    } else {
        values[1] = "I'm sleepy";
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}
// 1) 'tag' it, 2) make the last string a value.
var message2 = tag`It's hour ${new Date().getHours()} I'm ${""}`;    // Note no parentheses!
console.log(message2);






