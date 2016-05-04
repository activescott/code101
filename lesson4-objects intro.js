

// Create an object variable:
var myEmptyObject = { };

// console object with a log function:
var myConsole = { };
myConsole.log = function(message) {
    console.log(message);
}
myConsole.log('hello world');

// Below is the same thing!
var myOtherConsole = {
    log: function(message) {
        console.log(message);
    }
};

// We can also put string and number fields on objects:
var anotherObject = {
    someNumber: 11,
    someString: 'hello',
    someFunction: function(message) {
        console.log(message);
    }
};
anotherObject.yetAnotherField = 'world';




