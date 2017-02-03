// Spread operator:  IT 'DESTRUCTURES' DATA!

// Note the output of this:
//console.log([1, 2, 3]);   // Note the brackets are displayed!!!

// Now use spread operator to 'spread' the results without structuring.
///console.log(...[1, 2, 3]);

// SO HOW DO WE USE THIS????
// This allows us to push elements into arrays easier.
//let first = [1, 2, 3];
//let second = [4, 5, 6];
//first.push(second);
//
//// See now pushing second pushes the entire object instead of just the elements.
//console.log(first);

// Now use spread operator...
//first = [1, 2, 3];
//second = [4, 5, 6];
//first.push(...second);
//console.log(first);   // Hey!  No brackets!

// This is good for pushing in an array of parameters.
first = [1, 2, 3];
second = [4, 5, 6];
function addThreeThings(a, b, c) {
    let result = a + b + c;
    console.log('result is ' + result);
}

// Note how elements are destructured then treated like separate arguments.
addThreeThings(...first);




