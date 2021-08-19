/*
// Interfaces are coding with intent
// Defining what we're going to need for something before we create the thing.
// Aren't used to create objects just shape them.
// Impose on an obj or class to dictate how that obj should be shaped.

ONE RULE: can't instantiate them
- blow throws error
let a: Animal = new Animal();
*/

/****************
 ** PROPERTIES **
 *****************/
interface Animal2 {
  name: string
  numberOfLegs: number
}

// err is a result of not having implemented the props for the interface
// implemented interface with ':Animal2" so lassie obj needs to have the shape of the interface
// still throws err because missing my animal props from 03-classes
let lassie: Animal2 = {
  name: 'Lassie',
  numberOfLegs: 4,
}

/****************
 ** METHODS **
 *****************/
// Interfaces have methods
// - They can only be method signatures, not the implementation of the method
/*
ANALYSIS:
1) method/function signature
-- includes the fn's name, a name parameter and its type, and a rtn type of string
2) code inside curly braces is method implementation (what's happening inside fn when called, including result)
*/
// sayHello(name: string) : string {
//     let someNum = 1 + 2;
//     let someOtherNum = 1+2;
//     return name;
// }

// With a class, we could provide full implementation of the method.
// In an interface, we create the method signature
// - obj will provide its own implementation of the method - its own logic)
interface Product {
  name: string
  price: number
  setTimeOfPurchase(d: Date)
}
/*
ANALYSIS:
1) Implementing an interface on the class (imposing its shape) - above
- class will be required to hold the props and methods of the interface
-- will show an err until those things are implemented
2) implement the setTimeOfPurchase method in the class
// - provide basic implementation by logging the data to the console.
3) Then create a new instance of the Apples class and call the setTimeOfPurchase method
*/
class Apples implements Product {
  name: 'Apples'
  price: 5.5
  setTimeOfPurchase(d: Date) {
    console.log('Apples purchased on', d)
  }
}
let myApples: Apples = new Apples()
myApples.setTimeOfPurchase(new Date(Date.now()))
