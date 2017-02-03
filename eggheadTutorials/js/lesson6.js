var color = 'red';
var speed = 10;

// Note this example of shorthand ES6 syntax instead of ES5 syntax.
var car = { color, speed};
//console.log('car.color is ', car.color);
//console.log('car.speed is ', car.speed);

// Now include functions
function go() {
    console.log('vroom!');
}
var car = { color, speed, go };
//car.go();

// You can declare functions within the object.
var car = {
    color,
    speed,
    go() {    // This is for ES6.  For ES5:  go: function () {
        console.log('vroom!!!!!');
    }
};
//car.go();

// You can have a 'computed property'.
var car = {
    color,
    speed,
    ['go']: function() {
        console.log('vroom!!! bracket');
    }
};
//car.go();

// You can extract and use string generation or concatenation.
var drive = 'go';
var car = {
    color,
    speed,
    [drive]: function() {
        console.log('vroom!!!!');
    }
};
car.go();    // This I don't understand.  What matches .go() to 'go'?

// BONUS LESSON!!!!
//  Should I still use semi-colons in ES6?
/**
 * Stackoverflow:  http://stackoverflow.com/questions/8108903/are-semicolons-mandatory-in-javascript-statements
 *
 * ANSWER 1:
 * No, semicolons are usually optional in JavaScript (google for
 * ASI / automatic semicolon insertion). Using them makes the
 * code look much cleaner though and ASI is a horrible
 * mis-feature (at least in my opinion)
 *
 * ANSWER 2:
 *Certain ECMAScript statements (empty statement, ...
 * variable statement,
 * expression statement,
 * do-while statement,
 * continue statement,
 * break statement,
 * RETURN statement,
 * and throw statement) must be terminated with semicolons.
 *          (Hmmm, I see a pattern but hard to remember if you had a big lunch ...)
 * Such semicolons may always appear explicitly in the source text.
 * For convenience, however, such semicolons may be omitted from the source text in certain situations.
 * These situations are described by saying that semicolons are automatically inserted into the source
 * code token stream in those situations.
 *
 *
 * But look at this!:
 * function something(a, b) {
 *   return
 *   a + b;
 * }
 *     ... becomes this ...
 * function something(a, b) {
 *   return;
 *   a + b;
 * }
 *
 */

// Let's try it!
function iReturnWithoutSemicolon() {
    let i=5
    i++
    console.log('i is ', i)
    return
    i
}

var temp = iReturnWithoutSemicolon();
console.log('temp is ', temp);   // 'temp' is undefined!

//// Its an unhelpful feature, so use when in doubt use them.


