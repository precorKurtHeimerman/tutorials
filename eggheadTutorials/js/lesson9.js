// Destructuring Assignment in ES6


// Normally, if you want to display the value in an object,
// you address it via:  <objectName>.<propertyName>
var obj = {
    color: 'blue'
}
//console.log(obj.color);

//var {color} = {  // "Look for the property whose name matches the variable name and assign its value to the variable."
//    color: 'red'
//}
//console.log(color);

// Works with multiple properties, too.
//var {color, year} = {
//    color: 'green',
//    year: 2016,
//    month: 'dec'
//}
//console.log(color);
//console.log(year);


// A common scenario is when a function returns some object:
function generateObject() {
    return {
        color: 'orange',
        year: '2017'
    }
}

//var {color, year} = generateObject();
//console.log(color);
//console.log(year);  // LOOK AT THAT!!!!


// You can also do a form aliasing like the 'AS' in SQL.
function generateObject2() {
    return {
        color: 'white',
        year: '2018'
    }
}
var {color:myFavoriteColor, year:myFavoriteYear} = generateObject2();
//console.log(myFavoriteColor);
//console.log(myFavoriteYear);


// The above destructured an object into another object.
// You can do it with arrays, too.
//var [first,...kurt] = ['red', 'yellow', 'green', 'blue', 'orange'];
//console.log(first);
//console.log(...kurt);

// Let's work with a large object.
var people = [
    {
        name: 'Abner',
        lastName: 'Abercromby'
    },
    {
        name: 'Bart',
        lastName: 'Bradfield'
    },
    {
        name: 'Chris',
        lastName: 'Kringle'
    }
]

// To get ALL properties...
people.forEach(function(item) {
    //console.log('Regular function:', item);
});

// Change to arrow function...
people.forEach((item) => {
   // console.log('Arrow function:', item);
});

// Now use destructuring...
people.forEach(({lastName}) => {
    console.log('Arrow function:', lastName);
});






