// *********************************************** Class Number 2 ******************************************* //

// ********************************************** TYPE ANNOTATIONS ***************************************** //

// Important Points ************************************************** //

// (a:number,b:number): Inside the parentheses, this is called type annotations.
// You can use `const` or `let`, and this is called a named function:

const variable1 = (a:number, b:number) => {
    return (
        a + b
    );
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
let nanValue5:any = null;
console.log(nanValue5);

// ************************************************** Examples ************************************************ //

// Example No. 1

let x = null;
// You can check the datatype using typeof:
console.log(typeof x); 

// Example No. 2

let y;
console.log(y);

// Example No. 3

// let z = "abc" / 2; 
// console.log(z); 
// console.log(typeof z);

// (a:number):boolean This represents a return datatype ****************************************;

function isEven(a:number):boolean {
    return (
        a % 2 === 0
    );
}

// Function call
console.log(isEven(5)); 

// You can convert simple text into uppercase or lowercase ****************************;

let var1:string = "summai";
let var2 = var1.toLowerCase();
let var3:string = "shah";
let var4 = var3.toUpperCase();

console.log(var2, var4); 

// `null` means empty
// `NaN` stands for Not-a-Number
// `undefined` occurs when no initial value is provided

// The datatype of `null` is an object:
let value = null; 
console.log(value); 
console.log(typeof value); 

// The datatype of `NaN` is a number:
// let invalidCalculation = "hello" * 5; 
// console.log(invalidCalculation); 
// console.log(typeof invalidCalculation); 

// The datatype of `undefined` is undefined:
let notAssigned; 
console.log(notAssigned); 
console.log(typeof notAssigned); 



