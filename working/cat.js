function forEach(someArray, callback) {
	for (var i=0; i < someArray.length; i++) {
		callback(someArray[i]);
	}
}

var printBang = function(message) {
	console.log(message + '!');
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
forEach(myArray,printIfCat);
