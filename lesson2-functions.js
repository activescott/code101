
// Create/define a function:
function myAddFunc(a, b) {
    return a+b;
}

// call a function:
var result = myAddFunc(1,1);
console.log(result);

// log is just another function:
function log(message) {
    console.log(message);
}
/* THIS IS EXACTLY THE SAME THING:
var log = function(message) {
    console.log(message);
}
*/
log('my message');
