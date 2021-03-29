/*
Remember in the JS fn the following are true:
--We can call the function with a number as the argument.
--We can call the function with a string as an argument.
--We can add arguments that weren't originally declared.

-This freedom is loved by some and despised by others.
-TS helps us solve this issue by providing some possibilities for constraints.
-TS allows us to bring types to our parameters and limits to the num of arguments we pass in.
*/
/* *****************
  ** ANNOTATIONS **
********************/
//TS brings type safety to parameters and keeps us from adding unneeded arguments to fns
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//works
addNumbers(1, 2);
console.log(addNumbers(1, 2));
//errs
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, 'Foo');
//PRACTICE - add another Ts fn that concatenates two strings(firstName & lastName) and returns a fullName.
function twoStrings(firstName, lastName) {
    return firstName + lastName;
}
twoStrings('Chelsey ', 'Tschida');
console.log(twoStrings('Chelsey ', 'Tschida'));
/* *****************
  ** RETURN TYPES **
********************/
/*
1) We create a type for our parameter, a string.
2) We use the colon followed by a type to denote a return type.
3) We call the fn and pass in a string argument. The argument satisfies the return type. So this fn works.
4) We call the fn and pass in the wrong return type. The argument does not satisfy the return type, and so this would break.
*/
function sayHello(name) {
    return name;
}
sayHello('Chelsey');
console.log(sayHello('Chelsey'));
// err
// sayHello(1);
function practiceFn(username, password) {
    if (username === 'elevenfiftyuser' && password === 'Letmein1234!') {
        return true;
    }
    return false;
}
practiceFn('elevenfiftyuser', 'Letmein1234');
practiceFn('chelsey', '1234');
console.log(practiceFn('elevenfiftyuser', 'Letmein1234'));
console.log(practiceFn('chelsey', '1234'));
/* *****************
  ** OPTIONALS **
********************/
//allow for flexibility in our parameters.
//can allow an argument to be left out if needed
//declared using ? after them.
/*
-The first two parameters are not optional.
-someString parameter is optional.
    --since optional, it does not require an argument when the fn is called.
--We can also call the fn with an argument provided for someString.
--If you hover over the fn call, you'll notice the type of is a union type of string | undefined
    --If a value is passed in, it should be of type string. If value is not passed in, it is of
        --type undefined.

KEY RULE:
Optional params must go after all required params
*/
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, 'This is optional');
console.log(addNumbersWithOptional(1, 2));
console.log(addNumbersWithOptional(1, 2, 'This is optional'));
/*
PRACTICE:
- Write a function that has three parameters: first, middle, last.
- The middle param should be optional and the first and last should be required strings.
- If a value is passed in for middle, concatenate the full name and include the middle name.
- If a value is not passed in for middle, concatenate the full name with just first and last.
*/
function practiceWithOptional(first, last, middle) {
    if (typeof middle === 'string') {
        return first + middle + last;
    }
    return first + last;
}
practiceWithOptional('Chelsey ', 'Tschida', 'Lynne ');
practiceWithOptional('Chelsey ', 'Tschida');
console.log(practiceWithOptional('Chelsey ', 'Tschida', 'Lynne '));
console.log(practiceWithOptional('Chelsey ', 'Tschida'));
//# sourceMappingURL=02-functions.js.map