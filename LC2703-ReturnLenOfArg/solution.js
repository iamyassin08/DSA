
/** 
* @return {number}
*/

//declare a function named argumentsLength. The ...args is called a "rest parameter", which collects all the arguments passed to the function into an array named args.
var argumentsLength = function(...args) {
    //returns the length of the args array, which represents the number of arguments passed to the function.
    //used as the member access operator. It allows you to access properties and methods of objects.
    //to access methods and properties of other objects. ( . )
    return args.length;
};

// /**
// * arugmentsLength(1, 2, 3);
//  */