// Maps and WeakMaps with ES6

// The Map is a simple key-value map.

// Objects were used for key-value pairs until Maps in ES6.
//      (So most code we write is using Objects, not Maps.)
//
// Objects vs Maps:
// 1) When it comes to keys:
//      Objects can only use strings.
//      Maps can use primitives, objects or even functions!
//
// 2) Maps come with:  .size, .clear(), .keys(), .values(), .entries().
//
// 3) Object has a Prototype so there are keys in the Map whether the user
//       has added them or not.
//



var myObj = {};
//console.log(myObj) // Displays empty braces.

var myMap = new Map();
//console.log(myMap);  // Note how console.log specifies it is a Map.

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

// .size <-- Note, it's a property.
// .size() gives "TypeError: myMap.size is not a function".
//console.log(myMap.size);

// .clear()
//myMap.clear();
//console.log(myMap.size);

// .has()
//console.log(myMap.has('foo'))
//console.log(myMap.has('qwerty'))

// .keys()      <-- Use a for-of loop.
for(var key of myMap.keys()) {
//    console.log(key)
}

// .values()      <-- Use a for-of loop.
for(var value of myMap.values()) {
//    console.log(value);
}

// .entries()  Returns an Array of key vs values ??????/ COME BACK TO THIS.
for(var entry of myMap.entries()) {
    //console.log(entry);
}

// .entries() returns an array to do the same thing but use destructuring.
for(var [key, value] of myMap.entries()) {
    //console.log(key);
    //console.log(value);
}
//PROJECTS.forEach((value, key, map) => console.log('value: ' , value ));
// Now look at WeakMaps
var myWeakMap = new WeakMap();
//console.log(myWeakMap);  // Note it displays WeakMap type

//myWeakMap.set('string', 'kurt');   // TypeError: Invalid value used as weak map key
{   let xx={}
    myWeakMap.set(xx, xx);
    console.log(myWeakMap.get({}))
    xx.keepalive= true
}
console.log(myWeakMap.get({}))
//myWeakMap.set({}, 'kurt');   // This is ok for now, but ...
//for(var entry of myWeakMap.entries()) {
//    // empty.
//}

// Due to inumerable nature of WeakMaps means that iterator methods are not available.
// So are WeakMaps pointless????

