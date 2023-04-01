/*
TODO : Functional Programming
TODO : chapter : 08
*/
/*
*NO.:1
*Name:Learn About Functional Programming

*/

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line

/*
*NO.:2
*Name: Understand Functional Programming Terminology

*/

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea;
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea(), 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea(), 13);
// Only change code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);

/*
*NO.:3
*Name: Understand the Hazards of Using Imperative Code

*/
// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
    // Only change code below this line
    var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
    // Only change code above this line
    return this;
};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

/*
*NO.:4
*Name: Avoid Mutations and Side Effects Using Functional Programming

*/
// The global variable
let fixedValue = 4;

function incrementer() {
    // Only change code below this line

    return fixedValue + 1

    // Only change code above this line
}

/*
*NO.:5
*Name:Pass Arguments to Avoid External Dependence in a Function

*/

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {

    return fixedValue + 1

    // Only change code above this line
}

/*
*NO.:6
*Name:Refactor Global Variables Out of Functions

*/

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
    let newArr = [...arr];
    newArr.push(bookName);
    return newArr;
}


// Change code below this line
function remove(arr, bookName) {
    let newArr = [...arr];
    var book_index = newArr.indexOf(bookName);
    if (book_index >= 0) {
        newArr.splice(book_index, 1);
        return newArr;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


/*
*NO.:7
*Name:Use the map Method to Extract Data from an Array

*/
// add below code in the same of the positions of watchList array
var ratings = watchList
    .map(movie => {
        return {
            title: movie.Title,
            rating: movie.imdbRating
        };
    });



/*
*NO.:8
*Name:Implement map on a Prototype

*/
Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((element, index, originalArr) =>
        newArray.push(callback(element, index, originalArr))
    );
    // Only change code above this line
    return newArray;
};


/*
*NO.:9
*Name:Use the filter Method to Extract Data from an Array

*/
// add this code after the array and before the console.log.
var filteredList = watchList
    .map(movie => {
        return {
            title: movie.Title,
            rating: movie.imdbRating
        };
    })
    .filter(movie => {
        return parseFloat(movie.rating) >= 8.0;
    });

/*
*NO.:10
*Name:Implement the filter Method on a Prototype

*/
Array.prototype.myFilter = function (callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    // Only change code above this line
    return newArray;
};


/*
*NO.:11
*Name:Return Part of an Array Using the slice Method

*/

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line

    var newArray = anim.slice(beginSlice, endSlice);
    return newArray;
    // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


/*
*NO.:12
*Name:Remove Elements from an Array Using slice Instead of splice

*/

function nonMutatingSplice(cities) {
    // Only change code below this line
    var newArray = cities.slice(0, 3);
    return newArray;

    // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

/*
*NO.:13
*Name:Combine Two Arrays Using the concat Method

*/

function nonMutatingConcat(original, attach) {
    // Only change code below this line

    return original.concat(attach)

    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

/*
*NO.:14
*Name:Add Elements to the End of an Array Using concat Instead of push

*/

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);

    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

/*
*NO.:15
*Name:Use the reduce Method to Analyze Data

*/

// Only change code below this line
//make changes in the func and write this code there 
let averageRating =
    watchList
        .filter(film => film.Director === "Christopher Nolan")
        .map(film => Number(film.imdbRating))
        .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    watchList.filter(film => film.Director === "Christopher Nolan").length;

// Only change code above this line
return averageRating;

/*
*NO.:16
*Name:Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

*/

const squareList = arr => {
    // Only change code below this line
    return arr
        .filter(num => num > 0 && num % parseInt(num) === 0)
        .map(num => Math.pow(num, 2));
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/*
*NO.:17
*Name:Sort an Array Alphabetically using the sort Method

*/

function alphabeticalOrder(arr) {
    // Only change code below this line

    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    });
    // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


/*
*NO.:18
*Name:Return a Sorted Array Without Changing the Original Array

*/

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    return [].concat(arr).sort(function (a, b) {
        return a - b;
    });

    // Only change code above this line
}

nonMutatingSort(globalArray);

/*
*NO.:19
*Name:Split a String into an Array Using the split Method

*/

function splitify(str) {
    // Only change code below this line

    return str.split(/\W/);
    // Only change code above this line
}

splitify("Hello World,I-am code");

/*
*NO.:20
*Name:Combine an Array into a String Using the join Method

*/
function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(" ");


    // Only change code above this line
}

sentensify("May-the-force-be-with-you");
/*
*NO.:21
*Name:Apply Functional Programming to Convert Strings to URL Slugs

*/

// Only change code below this line
function urlSlug(title) {
    return title
        .split(/\W/)
        .filter(obj => {
            return obj !== "";
        })
        .join("-")
        .toLowerCase();

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

/*
*NO.:22
*Name:Use the every Method to Check that Every Element in an Array Meets a Criteria

*/

function checkPositive(arr) {
    // Only change code below this line


    // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
/*
*NO.:23
*Name:Use the some Method to Check that Any Elements in an Array Meet a Criteria

*/

function checkPositive(arr) {
    // Only change code below this line


    // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

/*
*NO.:24
*Name:Introduction to Currying and Partial Application

*/

function add(x) {
    // Only change code below this line


    // Only change code above this line
}

add(10)(20)(30);