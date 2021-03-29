/*
With TS we are more able to build a development environment that highly resembles a classical OOP
environment, allowing for type safety and for instantiation of custom types/classes.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* ****************
 ** PROPERTIES **
******************/
//creating new class called 'Person'. - not part of TS rather ES6
//Created 2 properties with types in that class.
//TS allows us to set types of these properties as in traditional OOP lang
//must hold string values
//We instantiate(create an instance) of the class by setting the type to and calling the keyword 
//--to create a new instance of the class.
var Person = /** @class */ (function () {
    function Person() {
    }
    //method - see below notes
    Person.prototype.sayHello = function () {
        console.log('Hello', this.firstName);
    };
    //practice
    Person.prototype.sayHelloToFullName = function () {
        console.log('Hello,', this.firstName, this.lastName);
    };
    return Person;
}());
var phil = new Person();
phil.firstName = 'Phil';
phil.lastName = 'Donahue';
/********************
 ** INSTANTIATION **
*********************/
/*
Instantiation means to create a new instance of a class. Think of the class as the cookie-cutter,
and the object as the cookie. The cookie cutter is used over and over to make new cookies. Each cookie might have different property values, but at the end of the day, they are all cookies.
*/
/*
Closer look at above pattern:
-We declare a variable with our own custom name.
-We declare the type. It's a custom type of Person.
-We use the 'new' keyword to instantiate a new instance.
-We call the class with parens. The parens invoke the constructor function.
*/
var someVariableName = new Person();
/* *************
  ** METHODS **
 ***************/
/*
-Methods are functions inside the body of a class (see above inside 'Person' class)
**Analysis of sayHello() (above):
ABOVE:
1) These two variables are the properties of the class. They should be above the methods.
2) A method. This is a fn that prints "Hello, " then a name to the console.
3) 'this.firstName' Will refer to the firstName for the specific instance.
BELOW:
4) We instantiate the Person() class with a variable name of 'kenn'.
5) We set the property of firstName to "Kenn" for this specific instance.
6) We call the method on the kenn object. Because the firstName of 'kenn' is set to "Kenn",
    -- this will print "Hello Kenn" to the console.

KEY RULE:
with methods in our class that you don't have to use the fn keyword
*/
var kenn = new Person();
kenn.firstName = 'Kenn';
kenn.sayHello();
/*
PRACTICE (fn in above class):
-Create a method called sayHelloToFullname that says hello to someone by full name.
-Instantiate(create a new instance of) the person class.
-Set the first name property to 'Sheriff' and the last name property to 'Holler'.
-Call the sayHelloToFullname method on the instance of the class.
*/
var sheriff = new Person();
sheriff.firstName = 'Sheriff';
sheriff.lastName = 'Holler';
sheriff.sayHelloToFullName();
/********************
 ** CONSTRUCTORS **
*********************/
//a constructor allows us to more easily and efficiently create an instance of a class by enabling
//--us to instantiate the class (create new instance of the class) and set properties at the same time
/*
ANALYSIS:
1) We create a new class called Game.
2) We create a constructor for the class that takes in a parameter that is of type string.
3) We set up a property called 'gameName'.
4) We set the value of gameName equal to the value that is passed into the constructor's argument.
5) We create an instance of the Game class called battleship
6) We pass in values to satisfy the requirements of the constructor. If we do not pass values in
    --for the constructor's arguments, we get an error.
*/
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
// 6) from analysis - throws error because two arguments are required in the parens
// let battleship: Game = new Game();
/*
ANALYSIS:
1) Here we instantiate the class with no constructor.
2) We have to set each of the properties one at a time. With a constructor this could be done in one line of code.
*/
var GameWithoutConstructor = /** @class */ (function () {
    function GameWithoutConstructor() {
    }
    return GameWithoutConstructor;
}());
var monopoly = new GameWithoutConstructor();
monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';
/********************
 ** INHERITANCE **
*********************/
//pillar of OOP and as of ES6, JS allows for inheritance with quasi class based approach
//parent class - holds all properties that are going to be universal to all vehicles
//with inheritance can make subclasses of 'Vehicle' that hold these properties along with
//properties that are unique to the subclass.
/*
ANALYSIS:
1) The 'extends' keyword declares that the class is going to inherit all of the properties and
    -- methods from another class. This is called subclassing. Both 'Motorcycle' and 'Automobile'
        -- inherit from 'Vehicle'.
2) Note that these are properties declared in the subclass. The Motorcycle class does not have
    -- access to the 'isSelfDriving' property and the 'Automobile' class does not have access to
        --'easyToDoWheelie'.
3) These are properties from the parent class, the 'Vehicle' class. They are inherited properties.
*/
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200; //3
myCar.make = 'Volvo';
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180; //3
/*
PRACTICE:
1) Create a class called 'Animal' with 3 properties.
2) Create two subclasses, maybe Bear and Tiger, that each has a property unique.
3) Instantiate both classes and add values for properties to each.
*/
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animal));
var someBear = new Bear();
someBear.fur = true;
someBear.hibernates = true;
someBear.name = 'Yogi';
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tiger;
}(Animal));
var someTiger = new Tiger();
someTiger.name = 'Tony';
someTiger.stripes = true;
someTiger.teeth = true;
/****************************
 ** PARAMETERS PROPERTIES **
*****************************/
//allows classes to be even more streamlined by allowing property and accessor type declaration
//--in constructor parameters.
// class Store {
//     constructor(name: string, city: string) {
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }
// let ikea: Store = new Store('Ikea', 'Fishers');
//TS can streamline a lot of the code in the constructor (refactoring above)
/*
ANALYSIS
- Again, the code above is a shorter version of the first Store class.
1) Added public accessor. It's required for this approach.
2) This approach doesn't have to do all of the bindings for properties inside of the constructor.
    -- Don't need this.name = name;
    -- TS infers there is a property called a name that will be the value of the argument
        --passed into the constructor.
*/
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
/****************
 ** ACCESSORS **
*****************/
//JS has public and private accessors which are taken care of in the constructor
//In terms of classes, allows us to keep certain members private to the class for internal use.
/*
ANALYSIS:
1) Have a class called Employee that extends Person (from above).
2) Created a private property denoted by the 'private' keyword.
3) Common practice to see private properties in classes start with an underscore.
    -- not required just a common convention.
4) Have a method called setSalary that takes in a number. It sets the value of the private
    -- property to the value that is passed in as an argument. Both are number types.
5) Have a method called getSalary that returns a string. Inside the method, perform so low-level
    -- business logic of converting the salary number value to a string in the return statement.
*/
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks
var salaryResult = newEmployee.getSalary();
console.log('The salary is:', salaryResult);
//# sourceMappingURL=03-classes.js.map