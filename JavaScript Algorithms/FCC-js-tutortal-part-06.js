/*
TODO : Basic Algorithm Scripting
*/
// !6.1 Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}

convertCtoF(30);
// ! 6.2 Reverse a String
function reverseString(str) {
    var ins = "";
    for (var i = str.length - 1; i >= 0; i--) {
        ins += str[i]
    }
    return ins;
}

reverseString("hello");

// ! 6.3 Factorialize a Number
function factorialize(num) {
    for (var fac = 1; num > 0; num--) {
        fac *= num
    }
    return fac;
}

factorialize(5);

// ! 6.4Find the Longest Word in a String
var words = str.split(' ');
var maxLength = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
        maxLength = words[i].length;
    }
}
return maxLength;

// ! 6.5Return Largest Numbers in Arrays
function largestOfFour(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var maxValue = arr[i][0];
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxValue) {
                maxValue = arr[i][j];
            }
        }
        newArr.push(maxValue);
    }
    return newArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// ! 6.6Confirm the Ending
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// ! 6.7Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    var rs = ""
    while (num > 0) {
        rs += str
        num--
    }
    return rs;
}

repeatStringNumTimes("abc", 3);

// ! 6.8Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "..."
    }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// ! 6.9Finders Keepers
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num
        }
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// ! 6.10Boo who
function booWho(bool) {
    return (typeof bool === "boolean");
}

booWho(null);

// ! 6.11Title Case a Sentence
function titleCase(str) {
    var word = str.split(' ')
    var sen = ""
    for (let i = 0; i < word.length; i++) {
        sen += word[i].charAt(0)
            .toUpperCase() + word[i].slice(1)
                .toLowerCase() + " ";

    }
    return sen.trim();
}

titleCase("I'm a little tea pot");

// ! 6.12Slice and Splice
function frankenSplice(arr1, arr2, n) {
    var newArray = arr2.slice()
    for (let i = 0; i < arr1.length; i++) {
        newArray.splice(n, 0, arr1[i]);
        n++

    }
    return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// ! 6.13 Falsy Bouncer
function bouncer(arr) {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {

            newArr.push(arr[i]);
        }

    }
    return newArr;
}

bouncer([7, "ate", "", false, 9]);

// ! 6.14Where do I Belong
function getIndexToIns(arr, num) {
    arr.sort(function (c, d) {
        return c - d;
    });

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i;
        }
    }
    return arr.length;
}

getIndexToIns([40, 60], 50);

// ! 6.15 Mutations
function mutation(arr) {
    var test2 = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test2.length; i++) {
        if (target.indexOf(test2[i]) < 0) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);

// ! 6.16 Chunky Monkey
function chunkArrayInGroups(arr, size) {
    var array = [];
    for (var i = 0; i < arr.length; i += size) {
        array.push(arr.slice(i, i + size));
    }
    return array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);