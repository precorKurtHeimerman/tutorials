// Converting an array-like object into an Array with Array.from()
// See lesson11.html.


function buttonClicked() {
    let itemsInList = document.querySelectorAll('.item');
    //console.log('itemsInList is: ', itemsInList); // Note that they are a NodeList

    // A NodeList is similar to an Array but it doesn't have .filter() or .forEach() or .reduce().
    // So let's convert to an Array so we can have utilize those methods.
    let itemsInArray = Array.from(document.querySelectorAll('.item'));
    //console.log('productsInArray is: ', itemsInArray);  // Looks the same

    let itemsInArrayFiltered = itemsInArray
        .filter(thuan => (thuan.innerHTML > 50))     // .filter() is handy!  'item' is name of arg passed into callback.
                        // To right of arrow is expression that evaluates to true or false to include or not.
    //console.log('These are greater than 50: ', itemsInArrayFiltered);

    let redItemsAreGreaterThan50 = itemsInArrayFiltered.map( item => item.style.color = 'red' );
    console.log('Note how redItemsAreGreaterThan50 in the html UI!')

    // Bottom line is that Array.from() is awesome.
}


