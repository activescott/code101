
var print = function (message) { // function print(message) {
	console.log(message);
}

var printBang = function(message) {
	console.log(message + '!');
}

function forEach(someArray, callback) {
	for (var i=0; i < someArray.length; i++) {
		callback(someArray[i]);
	}
}

var printIfCat = function(m) {
	if (m == 'cat') {
		console.log('found cat');
	} else {
		console.log(m + ' is not cat');
	}
}
var myArray = ['macy', 'the', 'cat'];
forEach(myArray, printBang);
/*
macy!
the!
cat!
*/
forEach(myArray, printIfCat);
/*
macy is not cat
the is not cat
found cat
*/

// Array already has a field/variable called forEach!
myArray.forEach(printIfCat);

