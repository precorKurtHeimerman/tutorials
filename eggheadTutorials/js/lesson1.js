// Basic Javscript function.
function basicJavascriptFunction(message, name) {
    "use strict";
    alert("In basicJavascriptFunction: " + message + ', ' + name);
}

// Assigning a function to a variable.
var functionAssignedToVariable = function(message, name) {
    "use strict";
    alert("In functionAssignedToVariable: " + message + ', ' + name);
}

// Basic arrow function.
// 1) 'function' on left replaced by 'fat arrow' on right.
var arrowFunction = (message, name) => {
    "use strict";
    alert("In arrowFunction: " + message + ', ' + name);
}

// Refined arrow function.
// 1) Can remove braces (or is this just because it is a single line of code to run?).
// 2) Move everything up to same line.
// 3) Remove 'return' keyword.
// 4) No parens if only 1 arg.
var refinedArrowFunction = message => alert("In createGreeting4: " + message + ", Mr. Kurt");



var deliveryBoy = {
    name: "John",

    handleMessage: function(message, handler) {
        handler(message);
    },

    receive: function() {
        var that = this;

        this.handleMessage("hello", function(message) {
            alert("Your message is " + message + ", Mr. " + that.name);
        })
    }
};

var person = {
    firstName: 'kurt',
    lastName: 'butterknife',
    fullName: function() {
        alert("firstName is " + firstName);
    },
    fullNameWithThis: function() {
        alert("firstName with 'this' is " + this.firstName);

    }
};