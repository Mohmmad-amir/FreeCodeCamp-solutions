//1.1 Comment Your JavaScript Code
// This is an in-line comment.
/* This is a
    multi-line comment */

//1.2 Declare JavaScript Variables
var myName;

//1.3 Storing Values with the Assignment Operator
var a;
a = 7;

//1.4 Assigning the Value of One Variable to Another
var a;
a = 7;

var b;
b = a;

//1.5 Initializing Variables with the Assignment Operator
var a = 9;

//1.6 Understanding Uninitialized Variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//1.7 Understanding Case Sensitivity in Variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//1.8 Add Two Numbers with JavaScript
var sum = 10 + 10;

//1.9 Subtract One Number from Another with JavaScript
var difference = 45 - 33;

//1.10 Multiply Two Numbers with JavaScript
var product = 8 * 10;

//1.11 Divide One Number by Another with JavaScript
var quotient = 66 / 33;

//1.12 Increment a Number with JavaScript
var myVar = 87;
myVar = myVar++;

//1.13 Decrement a Number with JavaScript
var myVar = 11;
myVar--;

//1.14 Create Decimal Numbers with JavaScript
var ourDecimal = 5.7;
var myDecimal = 5.7;

//1.15 Multiply Two Decimals with JavaScript
var product = 2.0 * 2.5;

//1.16 Divide One Decimal by Another with JavaScript
var quotient = 4.4 / 2.0;

//1.17 Finding a Remainder in JavaScript
var remainder;
remainder = 11 % 3;

//1.18 Compound Assignment With Augmented Addition
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

//1.19 Compound Assignment With Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

//1.20 Compound Assignment With Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

//1.21 Compound Assignment With Augmented Division
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

//1.22 Declare String Variables
var myFirstName = "Brendan";
var myLastName = "Eich";

//1.23 Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//1.24 Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//1.25 Escape Sequences in Strings
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

//1.26 Concatenating Strings with Plus Operator
var myStr = "This is the start. " + "This is the end.";

//1.27 Concatenating Strings with the Plus Equals Operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//1.28 Constructing Strings with Variables
var myName = "Brendan";
var myStr = "My name is " + myName + " and I am well!";

//1.29 Appending Variables to Strings
var someAdjective = "fun";
var myStr = "Learning to code is ";
myStr += someAdjective;

//1.30 Find the Length of a String
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

//1.31 Use Bracket Notation to Find the First Character in a String
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

//1.32 Understand String Immutability
var myStr = "Jello World";
myStr = "Hello World";

//1.33 Use Bracket Notation to Find the Nth Character in a String
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

//1.34 Use Bracket Notation to Find the Last Character in a String
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

//1.35 Use Bracket Notation to Find the Nth-to-Last Character in a String
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//1.36 Word Blanks
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb; // Change this line

//1.37 Store Multiple Values in one Variable using JavaScript Arrays
var myArray = ['one', 1];

//1.38 Nest one Array within Another Array
var myArray = [["Bulldogs", 23], ["Eels", 45]]

//1.39 Access Array Data with Indexes
var myArray = [50, 60, 70];
var myData = myArray[0];

//1.40 Modify Array Data With Indexes
var myArray = [18, 64, 99];
myArray[0] = 45;

//1.41 Access Multi-Dimensional Arrays With Indexes
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[2][1];

//1.42 Manipulate Arrays With push()
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

//1.43 Manipulate Arrays With pop()
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

//1.44 Manipulate Arrays With shift()
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

//1.45 Manipulate Arrays With unshift()
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//1.46 Shopping List
var myList = [
    ["Chocolate 1", 15],
    ["Chocolate 2", 15],
    ["Chocolate 3", 15],
    ["Chocolate 4", 15],
    ["Chocolate 5", 15]
];

//1.47 Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

//1.48 Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(1, 2);

//1.49 Global Scope and Functions
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//1.50 Local Scope and Functions
function myLocalScope() {
    'use strict';
    var myVar;
    console.log('inside myLocalScope', myVar);
}

myLocalScope();
console.log('outside myLocalScope', myVar);

//1.51 Global vs. Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

myOutfit();

//1.52 Return a Value from a Function with Return
function timesFive(num) {
    return num * 5;
}
var answer = timesFive(5);

//1.53 Understanding Undefined Value returned from a Function
var sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

addThree();
addFive();

//1.54 Assignment with a Returned Value
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

//1.55 Stand in Line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//1.56 Understanding Boolean Values
function welcomeToBooleans() {
    return true;
}

//1.57 Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
}

//1.58 Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

//1.59 Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

//1.60 Practice comparing different values
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

//1.61 Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

//1.62 Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

//1.63 Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

//1.64 Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

//1.65 Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

//1.66 Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

//1.67 Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

testLogicalAnd(10);

//1.68 Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

testLogicalOr(15);

//1.69 Introducing Else Statements
function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    return result;
}

testElse(4);

//1.70 Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

//1.71 Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

//1.72 Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
        return 'Tiny'; 1
    } else if (num < 10) {
        return 'Small';
    } else if (num < 15) {
        return 'Medium';
    } else if (num < 20) {
        return 'Large';
    } else {
        return 'Huge';
    }
}

testSize(7);

//1.73 Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    switch (true) {
        case (strokes === 1):
            return names[0];
            break;
        case (strokes <= (par - 2)):
            return names[1];
            break;
        case (strokes === (par - 1)):
            return names[2];
            break;
        case (strokes === par):
            return names[3];
            break;
        case (strokes === par + 1):
            return names[4];
            break;
        case (strokes === par + 2):
            return names[5];
            break;
        default:
            return names[6];
            break;
    }
}

golfScore(5, 4);

//1.74 Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

caseInSwitch(1);

//1.75 Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

switchOfStuff(1);

//1.76 Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

sequentialSizes(1);

//1.77 Replacing If Else Chains with Switch
function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}
chainToSwitch(7);

//1.78 Returning Boolean Values from Functions
function isLess(a, b) {
    return a <= b;
}

isLess(10, 15);

//1.79 Return Early Pattern for Functions
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//1.80 Counting Cards
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//1.81 Build JavaScript Objects
var myDog = {
    "name": "Ashie",
    "legs": 4,
    "tails": 1,
    "friends": ["Tiny", "Bear"]
};

//1.82 Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//1.83 Accessing Object Properties with Bracket Notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

//1.84 Accessing Object Properties with Variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line

//1.85 Updating Object Properties
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

//1.86 Add New Properties to a JavaScript Object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

//1.87 Delete Properties from a JavaScript Object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.tails;

//1.88 Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
        " ": "undefined"
    }
    result = lookup[val];
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

//1.89 Testing Objects for Properties
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

//1.90 Manipulating Complex Objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    // Add a data here
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    }
];

//1.91 Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside['glove box'];

//1.92 Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

//1.93 Record Collection
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && !records[id].hasOwnProperty("tracks")) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }

    return records;
}

updateRecords(collection, 5439, 'artist', 'ABBA');

//1.94 Iterate with JavaScript While Loops
var myArray = [];

var i = 5;
while (i > -1) {
    myArray.push(i);
    i--;
}

//1.95 Iterate with JavaScript For Loops
var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

//1.96 Iterate Odd Numbers With a For Loop
var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

//1.97 Count Backwards With a For Loop
var myArray = [];


for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

//1.98 Iterate Through an Array with a For Loop
var myArr = [2, 3, 4, 5, 6];

var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total = total + myArr[i];
}

//1.99 Nesting For Loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//1.100 Iterate with JavaScript Do...While Loops
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 11);

//1.101 Replace Loops using Recursion
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

//1.102 Profile Lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

lookUpProfile("Akira", "likes");

//1.103 Generate Random Fractions with JavaScript
function randomFraction() {
    return Math.random();
}

//1.104 Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

//1.105 Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//1.106 Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");

//1.107 Use the parseInt Function with a Radix
function convertToInteger(str) {
    return parseInt(str, 2);
}
convertToInteger("10011");

//1.108 Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

//1.109 Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
            : "zero";
}

checkSign(10);

//1.110 Use Recursion to Create a Countdown
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}

//1.111 Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}
