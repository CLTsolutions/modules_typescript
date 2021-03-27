/*
1) declare variable
2) declare the variable type
3) initialize the variable with a value of that type
*/
let username: string = 'instructor';
let password: string = 'Letmein1234';
let instructorId: number = 5;

//can also declare a value and type w/out initialization
let pw: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

//implicit typing - don't have to declare a type
//hover over and should see type
let greeting = 'Hello';

/* compile time errors (occurring during the compile time) / can't execute a single line of code until all syntax errors removed
-Syntax errors
-Typechecking errors
-Compiler crash

-below would cause errors
let password: string;
password = 1234;
*/

/* ****************
 ** BASIC TYPES **
******************/
//NUMBERS - most common primitive types and declared with the 'number' keyword
let age: number = 34;
let currentYear: number = 2020;
//ts also supports ES6 octal literals:
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//STRINGS - most common primitive types and declared with 'string' keyword
let companyName: string;
companyName = 'Eleven Fifty';
let appName: string = 'Twitter';
appName = 'Instagram';

//BOOLEANS - same syntax
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

//ARRAY - expressed two diff ways
let studentList: string[] = ['Tom', 'Tracy', 'John'] // more prevalent
let allScores: Array<number> = [100, 92, 95, 96];

//ANY - toggle off forced types if not known during deployment (i.e 3rd party package)
//type for variable can change when declaring 'any' type just like with js
    //--allows for dynamic flexibility
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

//VOID - no type at all (not common with variables). Seen in fns returning no value
function sayHelloToAll() : void {
    console.log('Hello to all!');
}

//Null and Undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

/*
-TUPLE - allows us to create an arr with multi diff types (suffix of 'multiple')
-still have fixed number of items in arr, but items need to be diff types
-may want for key value pairs
*/
//Declare a tuple type
let usernameAndId: [number, string];
//Init it
usernameAndId = [1, 'chelseyismyname']; //OK
//IMPORTANT note - values must be entered in proper order
//below won't work
// usernameAndId = ['chelseyismyname', 1];

//ENUM - allows us to give names to numeric values
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword
//like arrs, enums start at 0 but starting index can be assigned diff num
enum CardType { Ace = 1, Two, Three, Four }
let cardType: string = CardType[2]
console.log(cardType);

/* ****************
 ** UNION TYPES **
******************/
//allow more flexibility with variables but still keep intent of declaring a specific type for our variables

let x: number | string;
let y: number | null;
x = '1234';
x = 1234;
//below throws error
// x = true;
// y = false;