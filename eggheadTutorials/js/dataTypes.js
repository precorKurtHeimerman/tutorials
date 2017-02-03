function testMe() {
    console.log('hi there from node and window')
}

let testNumber = 2;

// Javascript Data Types.
if(testNumber == 1) {
// undefined.
    var a;
    console.log('undefined (declared, but unassigned) a is', a);
    console.log('typeof a is', typeof a);


// number
    a = 7;
    console.log('number a is', a);
    console.log('typeof a is', typeof a);

// string
    a = 'kurt';
    console.log('string a is', a);
    console.log('typeof a is', typeof a);

// boolean
    a = true;
    console.log('boolean a is', a);
    console.log('typeof a is', typeof a);

// object
    a = {first: 'kurt'};
    console.log('object a is', a);
    console.log('typeof a is', typeof a);

// array
    a = ['aaa', 'bbb'];
    console.log('array a is', a);
    console.log('typeof a is', typeof a);   // Says object rather than array because arrays are objects.

// Emptying an object by setting to null.  'type of' is still 'object'.
    a = null;
    console.log('nulled a is', a);
    console.log('typeof a is', typeof a);

// Emptying an object by setting to undefined
    a = undefined;
    console.log('undefined a is', a);
    console.log('typeof a is', typeof a);

// deleting a.  doesn't seem to work.
    a = 7;
    console.log('number a is', a);
    console.log('typeof a is', typeof a);
    delete a;
    console.log('deleted a is', a);
    console.log('typeof a is', typeof a);

// 'upcasting' follows left to right precedence.
//console.log('volvo + 5', 'volvo' + 5);
//console.log('5 + 4 + volvo', 5 + 4 + 'volvo');
}

// Abstract Equality vs String Equality.   == vs. === (same in value and type)
if(testNumber == 2) {
    let num = 7;
    console.log('num is ' + num);

    let object = new String("7");
    console.log('object is ' + object);

    let string = "7";
    console.log('string is ' + string);

    console.log('num == object', num == object);
    console.log('object == string', object == string);
    console.log('string == num', string == num);

    console.log('num === object', num === object);
    console.log('object === string', object === string);
    console.log('string === num', string === num);
}

// How to iterate over them.
// How to set and get.







