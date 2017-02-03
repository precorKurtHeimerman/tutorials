// Promises with ES6.


// This is a basic Promise.
var myPromise = new Promise((resolve, reject) => {
    // Your code goes here.  It should end up calling 'resolve' or 'reject'.
    if(true) {
        resolve("This is resolve's argument.");
    } else {
        reject("This is reject's argument.");
    }
});

// 'then's argument is a callback that is passed 'data', which is the same as resolve's argument.
myPromise.then( (data) => console.log("I'm in the 'then'.  Data passed to me is: " + data) );

// 'catch's argument is a callback that is passed 'error', which is the same as reject's argument.
//myPromise.catch( (error) => console.error("I'm in the 'catch'.  Data passed to me is: " + error) );

// QUESTION:  What is actually calling Promise to run???



// Promises are handy for wrapping code that runs asynchronously.
// Let's simulate that by using a timeout.
//var myPromise2 = new Promise((resolve, reject) => {
//    //throw new Error("Error thrown in Promise!");
//    setTimeout(() => {
//        if (true) {
//            resolve("This is resolve's argument.");
//        } else {
//            reject("This is reject's argument.");
//        }
//    }, 2000);
//});
//myPromise2.then( (data) => console.log("I'm in the 'then'.  Data passed to me is: " + data) );
//myPromise2.catch( (error) => console.error("I'm in the 'catch'.  Data passed to me is: " + error) );


// .then and .catch can be chained.
//myPromise2.then( (data) => console.log("I'm in the 'then'.  Data passed to me is: " + data) )
//    .catch( (error) => console.error("I'm in the 'catch'.  Data passed to me is: " + error) );

// And 2 .thens can be chained, but note what gets passed to the second .then.
//      It's not what .resolve was passed from resolve, but rather .then.
//myPromise2.then( (data) => {
//        console.log("I'm in the FIRST 'then'.  Data passed to me is: " + data);
//        throw new Error("Error thrown in FIRST .then!");
//
//        //return 'Hi, there!';
//    })
//    .then( (data ) => console.log("In the the SECOND 'then'.  Data passed to me is: " + data ))
//.catch( (error) => {console.error("I'm in the 'catch'.  Data passed to me is: " + error); return 'im caught';})


// .catch also catches Errors thrown from either the Promise or .then.
// Uncomment Error in Promise and the one in .then to illustrate.











