//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback){
    for (var i = 0; i < array.length; i++) {
    	callback(array[i])
 
    };
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)
// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------
var total 
function reduce(array, callback){
	var total = array[0]

    for (var i = 1; i < array.length; i++) {
	   	total = callback(array[i], total);
	   	console.log(total);
    }
   return total 
};
// tests
// ---
console.assert(		reduce(		[1, 2, 3, 4] , function(v, a){ return a*v }		) === 24		)
// use reduce again, but to get the sum of the array, not the product
var sum = reduce([44, 2, 3, 4] , function (el , total ){ return el + total } )
console.log('Here comes the sum')
console.log(sum)

// ----------------------------
// using forEach() from above, write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback){
	var newarray = [] 
    var forEachCallback = function(z){
    	newarray.push(callback(z))
    }
    forEach(array, forEachCallback)
	return newarray;
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)

// ----------------------------
// using reduce() from above, write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback){
	var results = []
	var isEven;
	forEach(array, function(a){
	isEven=callback(a)
	if(isEven )
	{
		results.push(a)
	}
	})
	return results
}

// tests
// ---
var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)


// ----------------------------
// using reduce() from above, write your own sum()
// that adds up all arguments to sum (note: variadic behavior)
// ----------------------------