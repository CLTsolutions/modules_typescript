/*
TS lets us build a development environment that highly resembles a classical OOP
-- This allows for type safety and for instantiation of custom types/classes.
*/

/* ****************
 ** PROPERTIES **
 ******************/
// With class keyword, created new class called 'Person'.
// - not part of TS but rather ES6
// Created 2 properties with types in that class.
// TS allows us to set types of these properties as in traditional OOP lang
// -- when we instantiate the class & use these props, they must be string values
// We instantiate (create an instance) of the class by:
// - setting the type to Person and calling the NEW keyword
// -- this creates a new instance of the class.
class Person {
  // properties of the class
  // should be above methods
  firstName: string
  lastName: string

  // method - see below notes
  sayHello() {
    // this.firstName refers to the firstName for the specific instance
    console.log('Hello', this.firstName)
  }

  // practice
  sayHelloToFullName() {
    console.log('Hello,', this.firstName, this.lastName)
  }
}

let phil: Person = new Person()
// property of firstName 'Phil' for this specific instance
phil.firstName = 'Phil'
phil.lastName = 'Donahue'

/********************
 ** INSTANTIATION **
 *********************/
/*
// Instantiation means to create a new instance of a class.
// Think of the class as the cookie-cutter and the object as the cookie.
//- The cookie cutter is used over and over to make new cookies.
//- Each cookie might have different property values, but they are all cookies.
*/

/*
Closer look at above pattern:
- We declare a variable with our own custom name.
- We declare the type. It's a custom type of Person.
- We use the 'new' keyword to instantiate a new instance.
- We call the class with parens. The parens invoke the constructor function.
*/
let someVariableName: Person = new Person()

/* *************
 ** METHODS **
 ***************/
/*
// Methods are fns inside the body of a class (see above inside 'Person' class)
// Analysis of sayHello() (above):
// ABOVE:
1) Two variables are properties of the class and should be above the methods.
2) A method is a fn that prints "Hello" then a name to the console.
3) 'this.firstName' will refer to the firstName for the specific instance.

BELOW:
4) We instantiate the Person() class with a variable name of 'kenn'.
5) We set the property of firstName to "Kenn" for this specific instance.
6) We call the method on the kenn object.
- Because the firstName of 'kenn' is set to "Kenn" this will print "Hello Kenn" to the console.

KEY RULE:
with methods in our class that you don't have to use the fn keyword
*/
let kenn: Person = new Person()
kenn.firstName = 'Kenn'
// calling method on kenn obj
kenn.sayHello()

/*
PRACTICE (fn in above class):
- Create a method called sayHelloToFullname that says hello to someone by full name.
- Instantiate(create a new instance of) the person class.
- Set the first name property to 'Sheriff' and the last name property to 'Holler'.
- Call the sayHelloToFullname method on the instance of the class.
*/
let sheriff: Person = new Person()
sheriff.firstName = 'Sheriff'
sheriff.lastName = 'Holler'
sheriff.sayHelloToFullName()

/********************
 ** CONSTRUCTORS **
 *********************/
// constructors allow us to easily and efficiently create an instance of a class
// they enable us to instantiate the class and set properties at the same time

/*
ANALYSIS:
1) We create a new class called Game.
2) The constructor for the class takes in a parameter that is of type string.
3) We set up a property called 'gameName'.
4) The value of gameName is set equal to the value passed into the constructor's arg.
5) We create an instance of the Game class called battleship
6) We pass in values to satisfy the requirements of the constructor.
-- If we do not pass values in for the constructor's arguments, we get an error.
*/
class Game {
  constructor(name: string, maker: string) {
    this.gameName = name
    this.gameMaker = maker
  }
  gameName: string
  gameMaker: string
}

let battleship: Game = new Game('Battleship', 'Hasbro')

// 6) from analysis - throws err because two arguments are required in the parens
// let battleship: Game = new Game();

/*
ANALYSIS:
1) Here we instantiate the class with no constructor.
2) We have to set each of the properties one at a time.
- With a constructor this could be done in one line of code.
*/
class GameWithoutConstructor {
  gameName: string
  gameMaker: string
}

let monopoly: GameWithoutConstructor = new GameWithoutConstructor()
monopoly.gameName = 'Monopoly'
monopoly.gameMaker = 'Hasbro'

/********************
 ** INHERITANCE **
 *********************/
// pillar of OOP and as of ES6
// JS allows for inheritance with quasi class based approach

// parent class holds all properties that are universal to all vehicles
// with inheritance can make subclasses of 'Vehicle'
// 'Vehicle' can hold these props along with props unique to the subclass.

/*
ANALYSIS:
1) 'extends' means the class is going to inherit all props and methods from another class.
// - This is called subclassing.
// - Both 'Motorcycle' and 'Automobile' inherit from 'Vehicle'.
2) These are props declared in the subclass.
// - Motorcycle class does not have access to the 'isSelfDriving' prop
// - The 'Automobile' class does not have access to 'easyToDoWheelie'.
3) These are props from the parent class ('Vehicle').
// - They are inherited properties.
*/
class Vehicle {
  type: string
  make: string
  manufactureYear: number
  runs: boolean
  topSpeed: number
}

class Automobile extends Vehicle {
  isSelfDriving: boolean // 2
}

let myCar: Automobile = new Automobile()
myCar.isSelfDriving = false
myCar.topSpeed = 200 // 3
myCar.make = 'Volvo'

class Motorcycle extends Vehicle {
  easyToDoWheelie: boolean
}

let myMotorcycle: Motorcycle = new Motorcycle()
myMotorcycle.easyToDoWheelie = true //2
myMotorcycle.topSpeed = 180 //3

/*
PRACTICE:
1) Create a class called 'Animal' with 3 properties.
2) Create two subclasses, maybe Bear and Tiger, that each has a property unique.
3) Instantiate both classes and add values for properties to each.
*/

class Animal {
  name: string
  teeth: boolean
  fur: boolean
}

class Bear extends Animal {
  hibernates: boolean
}

let someBear: Bear = new Bear()
someBear.fur = true
someBear.hibernates = true
someBear.name = 'Yogi'

class Tiger extends Animal {
  stripes: boolean
}

let someTiger: Tiger = new Tiger()
someTiger.name = 'Tony'
someTiger.stripes = true
someTiger.teeth = true

/****************************
 ** PARAMETERS PROPERTIES **
 *****************************/
// allows classes to be even more streamlined
// - can declare prop and accessor type in constructor parameters.

/*
class Store {
    constructor(name: string, city: string) {
        this.name = name;
        this.city = city;
    }
    name: string;
    city: string;
}

// TS can streamline a lot of the code in the constructor (refactoring below))
class Store {
  constructor(public name: string, public city: string) {}
}

let ikea: Store = new Store('Ikea', 'Fishers');


*/

/*
ANALYSIS
- The code above is a shorter version of the first Store class.
1) Added public accessor (required for this approach).
2) This approach doesn't have to do all of the bindings for props inside of the constructor.
- Don't need this.name = name;
- TS infers there is a property called a name that will be the value of the arg passed into the constructor.
*/
class Store {
  constructor(public name: string, public city: string) {}
}
let ikea: Store = new Store('Ikea', 'Fishers')

/****************
 ** ACCESSORS **
 *****************/
// JS has public and private accessors (taken care of in constructor)
// In terms of classes, allows us to keep certain members private to the class for internal use.
/*
ANALYSIS:
1) Class called Employee that extends Person (from above).
2) Created a private property denoted by the 'private' keyword.
3) Common practice to see private properties in classes start with an underscore.
- not required just a common convention.
4) Have a method called setSalary that takes in a number.
- It sets the value of the private property to the value passed in as an argument.
- Both are num types.
5) Have a method called getSalary that rtns a string.
- Inside the method, we perform so low-level business logic of converting the salary number value to a string in the return statement.
*/
class Employee extends Person {
  private _salary: number

  getSalary(): string {
    return this._salary.toString()
  }

  setSalary(newSalary: number) {
    this._salary = newSalary
  }
}

let newEmployee: Employee = new Employee()
newEmployee.setSalary(30000)
// newEmployee._salary = 0; //This breaks
let salaryResult: string = newEmployee.getSalary()
console.log('The salary is:', salaryResult)
