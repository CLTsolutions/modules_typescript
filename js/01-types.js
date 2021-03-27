/*
1) declare variable
2) declare the variable type
3) initialize the variable with a value of that type
*/
var username = 'instructor';
var password = 'Letmein1234';
var instructorId = 5;
//can also declare a value and type w/out initialization
var pw;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
//implicit typing - don't have to declare a type
//hover over and should see type
var greeting = 'Hello';
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
var age = 34;
var currentYear = 2020;
//ts also supports ES6 octal literals:
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//STRINGS - most common primitive types and declared with 'string' keyword
var companyName;
companyName = 'Eleven Fifty';
var appName = 'Twitter';
appName = 'Instagram';
//BOOLEANS - same syntax
var isLoggedIn = true;
var isGoldLevelUser = true;
//ARRAY - expressed two diff ways
var studentList = ['Tom', 'Tracy', 'John']; // more prevalent
var allScores = [100, 92, 95, 96];
//ANY - toggle off forced types if not known during deployment (i.e 3rd party package)
//type for variable can change when declaring 'any' type just like with js
//--allows for dynamic flexibility
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//VOID - no type at all (not common with variables). Seen in fns returning no value
function sayHelloToAll() {
    console.log('Hello to all!');
}
//Null and Undefined
var undefinedVariable = undefined;
var nullVariable = null;
/*
-TUPLE - allows us to create an arr with multi diff types (suffix of 'multiple')
-still have fixed number of items in arr, but items need to be diff types
-may want for key value pairs
*/
//Declare a tuple type
var usernameAndId;
//Init it
usernameAndId = [1, 'chelseyismyname']; //OK
//IMPORTANT note - values must be entered in proper order
//below won't work
// usernameAndId = ['chelseyismyname', 1];
//ENUM - allows us to give names to numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
//like arrs, enums start at 0 but starting index can be assigned diff num
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
/* ****************
 ** UNION TYPES **
******************/
//allow more flexibility with variables but still keep intent of declaring a specific type for our variables
var x;
var y;
x = '1234';
x = 1234;
//below throws error
// x = true;
// y = false;
//# sourceMappingURL=01-types.js.map