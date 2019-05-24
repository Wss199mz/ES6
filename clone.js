function deepClone(obj) {
    let isArray = Array.isArray(obj)
    let cloneObj = isArray ? [] : {}
    for (let key in obj) {
        cloneObj[key] = deepClone(obj[key])
    }

    return cloneObj
}
var a = [{name: '张三', age: 1}]
var b = deepClone(a)

console.log(b == a)

var globalVar = "abc";

// Parent self invoking function 
(function outerFunction (outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope 
    var outerFuncVar = 'x';
    // Closure self-invoking function 
    (function innerFunction (innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y";
        console.log(
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFuncVar = " + innerFuncVar + "\n" +
            "globalVar = " + globalVar);

    }// end of scope innerFunction)(5); // Pass 5 as parameter 
}// end of scope outerFunction )(7); // Pass 7 as parameter 
innerFunction is closure that is defined inside outerFunc
