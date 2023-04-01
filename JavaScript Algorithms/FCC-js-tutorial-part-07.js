/*
TODO : Object Oriented Programming
TODO : chapter : 07
*/


/*
!no: 1
!name: Create a Basic JavaScript Object
*/
let dog = {
    "name": "tommy",
    "numLegs": 1
};

/*
!no:2
!name:Use Dot Notation to Access the Properties of an Object
*/
let dog = {
    name: "Spot",
    numLegs: 4
};
// Only change code below this line
console.log(dog.name, dog.numLegs);

/*
!no:3
!name:Create a Method on an Object
*/
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + dog.numLegs + " legs.";
    }
};

dog.sayLegs();

/*
!no:4
!name:Make Code More Reusable with the this Keyword
*/
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();

/*
!no:5
!name:Define a Constructor Function
*/
function Dog() {
    this.name = "ashie";
    this.color = "black";
    this.numLegs = 4;
}

/*
!no:6
!name:Use a Constructor to Create Objects

*/
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog()

/*
!no:7
!name:Extend Constructors to Receive Arguments

*/
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("tommy", "brown")

/*
!no:8
!name:Verify an Object's Constructor with instanceof

*/
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4);
myHouse instanceof House
/*
!no:9
!name:Understand Own Properties

*/
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property)
    }

}
/*
!no:10
!name: Use Prototype Properties to Reduce Duplicate Code

*/
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4

// Only change code above this line
let beagle = new Dog("Snoopy");

/*
!no:11
!name:Iterate Over All Properties

*/
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}
/*
!no: 12
!name: Understand the Constructor Property

*/
function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

/*
!no: 13
!name: Change the Prototype to a New Object

*/
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

/*
!no: 14
!name: Remember to Set the Constructor Property when Changing the Prototype

*/
function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,//write this line only
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

/*
!no:15
!name: Understand Where an Object’s Prototype Comes From

*/
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle)
/*
!no:16
!name:Understand the Prototype Chain

*/
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

/*
!no:17
!name: Use Inheritance So You Don't Repeat Yourself

*/
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
    // eat: function () {
    //     console.log("nom nom nom");
    // }
    // remove this also
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
    // eat: function() {
    //   console.log("nom nom nom");
    // }
    //copy this code
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    // and paste here
    eat: function () {
        console.log("nom nom nom");
    }
};

/*
!no:18
!name:Inherit Behaviors from a Supertype

*/
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

/*
!no:19
!name:Set the Child's Prototype to an Instance of the Parent

*/
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);// use this line
// Only change code below this line


let beagle = new Dog();

/*
!no:20
!name:Reset an Inherited Constructor Property

*/
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird//write this line
Dog.prototype.constructor = Dog//write this line


let duck = new Bird();
let beagle = new Dog();

/*
!no:21
!name:Add Methods After Inheritance

*/
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof!");
};


// Only change code above this line

let beagle = new Dog();

/*
!no:22
!name:Override Inherited Methods

*/
function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
};


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

/*
!no:23
!name:Use a Mixin to Add Common Behavior Between Unrelated Objects

*/
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line
let glideMixin = function (obj) {
    obj.glide = function () {
    }
};

glideMixin(bird);
glideMixin(boat);
/*
!no:24
!name: Use Closure to Protect Properties Within an Object from Being Modified Externally

*/
function Bird() {
    let weight = 15;

    this.getWeight = function () {
        return weight;
    };
}

/*
!no:25
!name:Understand the Immediately Invoked Function Expression (IIFE)

*/
(function () {
    console.log("A cozy nest is ready");
}

)();

/*
!no:26
!name:Use an IIFE to Create a Module

*/
let isCuteMixin = function (obj) {
    obj.isCute = function () {
        return true;
    };
};
let singMixin = function (obj) {
    obj.sing = function () {
        console.log("Singing to an awesome tune");
    };
};


let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();