/*
// Interfaces are coding with intent
// Defining what we're going to need for something before we create the thing.
// Aren't used to create objects just shape them.
// Impose on an obj or class to dictate how that obj should be shaped.

ONE RULE: can't instantiate them
- blow throws error
let a: Animal = new Animal();
*/
/*
ANALYSIS:
1) Implementing an interface on the class (imposing its shape) - above
    --class will be required to hold the props and methods of the interface
        --will show an err until those things are implemented
2) implement the setTimeOfPurchase method in the class and provide basic implementation
    --by logging the data to the console.
3) Then create a new instance of the Apples class and call the setTimeOfPurchase method
*/
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log('Apples purchased on', d);
    };
    return Apples;
}());
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=04-interfaces.js.map