// *********************************************** Class Number 2 ******************************************* //
// ********************************************** TYPE ANNOTATIONS ***************************************** //
// Important Points ************************************************** //
// (a:number,b:number): Inside the parentheses, this is called type annotations.
// You can use `const` or `let`, and this is called a named function:
var variable1 = function (a, b) {
    return (a + b);
};
// This is a function call:
console.log(variable1(12, 34));
// Datatypes ************************************************************** //
// You can use single numbers, double numbers, decimal numbers, and negative numbers.
// You can add multiple variables.
// `any` accepts all types of data:
// let myFavNum:number = 5;
// let myAge:number = 29;
// let pi:number = 3.147;
// let myNegVal:number = -5;
// let invalidResult2:number = Math.sqrt(8);
// let myAge1:string = "Summai Shah";
// let myAge2:string = "Muhammad Nadeem Khan";
// let invalidResult:string = myAge1 + myAge2;
// let invalidResult:string = myAge1 + myAge2 + " and I am 15 years old";
// let nanValue1:boolean = true;
// let nanValue2:boolean = false;
// let nanValue3:any = NaN;
// let nanValue4:any = undefined;
var nanValue5 = null;
console.log(nanValue5);
// ************************************************** Examples ************************************************ //
// Example No. 1
var x = null;
// You can check the datatype using typeof:
console.log(typeof x); // Output: object
// Example No. 2
var y;
console.log(y); // Output: undefined
// Example No. 3
// let z = "abc" / 2; // Invalid math operation
// console.log(z); // NaN
// console.log(typeof z); // "number"
// (a:number):boolean This represents a return datatype ****************************************;
function isEven(a) {
    return (a % 2 === 0);
}
// Function call
console.log(isEven(5)); // Output: false
// You can convert simple text into uppercase or lowercase ****************************;
var var1 = "summai";
var var2 = var1.toLowerCase();
var var3 = "shah";
var var4 = var3.toUpperCase();
console.log(var2, var4); // Output: summai SHAH
// `null` means empty
// `NaN` stands for Not-a-Number
// `undefined` occurs when no initial value is provided
// The datatype of `null` is an object:
var value = null; // Assigned as empty
console.log(value); // Output: null
console.log(typeof value); // Output: object
// The datatype of `NaN` is a number:
var invalidCalculation = "hello" * 5; // String multiplied by a number
console.log(invalidCalculation); // Output: NaN
console.log(typeof invalidCalculation); // Output: number
// The datatype of `undefined` is undefined:
var notAssigned; // Variable declared but no value assigned
console.log(notAssigned); // Output: undefined
console.log(typeof notAssigned); // Output: undefined
