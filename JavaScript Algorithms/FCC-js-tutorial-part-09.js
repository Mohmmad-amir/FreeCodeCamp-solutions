/*
TODO : Functional Programming
TODO : chapter : 09
*/


/*
*NO.:1
*Name:Sum All Numbers in a Range

*/

function sumAll(arr) {
    return 1;
}

sumAll([1, 4]);

/*
*NO.:2
*Name:Diff Two Arrays

*/

function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
        for (var i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
*NO.:3
*Name:Seek and Destroy

*/
function destroyer(arr, ...args) {
    let argsArr = [...args]
    for (let i = 0; i < argsArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === argsArr[i]) {
                delete (arr[j])
            }
        }
    }
    var filtered = arr.filter(function (el) {
        return el != null;
    });
    return filtered;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
*NO.:4
*Name:Wherefore art thou

*/
function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);
    return collection.filter(function (obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if (
                !obj.hasOwnProperty(srcKeys[i]) ||
                obj[srcKeys[i]] !== source[srcKeys[i]]
            ) {
                return false;
            }
        }
        return true;
    });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


/*
*NO.:5
*Name:Spinal Tap Case

*/
function spinalCase(str) {
    let tokens = str.split(/\s|_|(?=[A-Z])/)
    let tokens_combined = tokens.join("-")
    let tokens_spinal = tokens_combined.toLowerCase()
    return tokens_spinal
}

spinalCase('This Is Spinal Tap');


/*
*NO.:6
*Name:Pig Latin

*/

function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    let pigLatin = "";
    if (myConsonants !== null) {
        pigLatin =
            str
                .replace(consonantRegex, "")
                .concat(myConsonants)
                .concat("ay")
    } else {
        pigLatin =
            str
                .concat("way");
    }
    return pigLatin
}

translatePigLatin("consonant");

/*
*NO.:7
*Name:Search and Replace

*/
function myReplace(str, before, after) {
    let tokens = str.split(" ")
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i] == before) {
            if (before[0] === before[0].toUpperCase()) {
                tokens[i] = after[0].toUpperCase() + after.substring(1)
            } else {
                tokens[i] = after[0].toLowerCase() + after.substring(1)
            }
        }
    }
    let tokens_combined = tokens.join(" ")
    return tokens_combined;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/*
*NO.:8
*Name:DNA Pairing

*/

function pairElement(str) {
    let letters = str.split("")
    let newArr = []
    for (var i = 0; i < letters.length; i++) {
        console.log(letters[i])
        switch (letters[i]) {
            case 'G':
                newArr.push(['G', 'C'])
                break;
            case 'C':
                newArr.push(['C', 'G'])
                break;
            case 'A':
                newArr.push(['A', 'T'])
                break;
            case 'T':
                newArr.push(['T', 'A'])
                break;
            default:
                break;
        }
    }
    console.log(newArr);
    return newArr;
}

pairElement("ATCGA")

/*
*NO.:9
*Name:Missing letters

*/

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingPoint = alphabet.indexOf(str[0]);

    for (let i = 0; i < str.length + 1; i++) {
        if (str[i] !== alphabet[startingPoint + i]) {
            return alphabet[startingPoint + i];
        }
    }
    return undefined;
}

fearNotLetter("abce");

/*
*NO.:10
*Name:Sorted Union

*/

function uniteUnique(...arr) {
    let newArr = []
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.indexOf(arr[i][j]) === -1 ? newArr.push(arr[i][j]) : console.log("This item already exists");
        }
    }
    console.log(newArr)
    return newArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
/*
*NO.:11
*Name:Convert HTML Entities

*/

function convertHTML(str) {
    let chars = str.split("");
    let newSentence = "";
    for (var i = 0; i < chars.length; i++) {
        newSentence += chars[i]
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("\"", "&quot;")
            .replace("'", "&apos;")
    }
    return newSentence;
}
convertHTML("Hamburgers < Pizza < Tacos")


/*
*NO.:12
*Name: Sum All Odd Fibonacci Numbers

*/

function sumFibs(num) {
    var prev = 0;
    var curr = 1;
    var result = 0;
    while (curr <= num) {
        if (curr % 2 !== 0) {
            result += curr;
        }
        curr += prev;
        prev = curr - prev;
    }
    return result;
}

sumFibs(4);

/*
*NO.:13
*Name:Sum All Primes

*/

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function sumPrimes(num) {
    let result = 0;
    while (num >= 0) {
        if (isPrime(num)) {
            result += num;
        }
        num--;
    }
    return result;
}


sumPrimes(10);

/*
*NO.:14
*Name:Smallest Common Multiple

*/

function smallestCommons(arr) {
    arr.sort(function (a, b) {
        return b - a;
    });

    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }

    var quot = 0;
    var loop = 1;
    var n;

    do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }

        loop++;
    } while (n !== newArr.length);

    return quot;
}

smallestCommons([1, 5]);

/*
*NO.:15
*Name:Drop it
*/

function dropElements(arr, func) {
    return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });

/*
*NO.:16
*Name:Steamroller
*/

function steamrollArray(arr) {
    var result = [];

    var flatten = function (arg) {
        if (!Array.isArray(arg)) {
            result.push(arg);
        } else {
            for (var a in arg) {
                flatten(arg[a]);
            }
        }
    };

    arr.forEach(flatten);
    return result;
}

steamrollArray([1, [2], [3, [[4]]]]);

/*
*NO.:17
*Name:Binary Agents

*/

function binaryAgent(str) {
    let tokens = str.split(" ")
    let digit = 0
    let letter = ""
    let sentence = ""
    for (var i = 0; i < tokens.length; i++) {
        digit = parseInt(tokens[i], 2);
        letter = String.fromCharCode(digit);
        sentence += letter;
    }
    return sentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*
*NO.:18
*Name:Everything Be True

*/

function truthCheck(collection, pre) {
    let ctr = 0;
    for (let c in collection) {
        console.log(collection[c][pre])
        if (collection[c].hasOwnProperty(pre)) {
            if (Boolean(collection[c][pre])) {
                ctr++;
            }

        }
    }
    return ctr == collection.length;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");

/*
*NO.:19
*Name:Arguments Optional

*/
function addTogether() {
    if (arguments.length > 1) {
        if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
            return undefined
        }
        if (arguments[0] === undefined || arguments[1] === undefined) {
            return undefined;
        }
        return arguments[0] + arguments[1];
    }

    if (arguments.length === 1) {
        var arg1 = arguments[0];
        if (typeof arg1 !== "number") {
            return undefined
        }

        return function (arg2) {
            if (typeof arg2 !== "number") {
                return undefined
            }
            if (arg1 === undefined || arg2 === undefined) {
                return undefined;
            } else {
                return arg1 + arg2;
            }
        };
    }
}

addTogether(2, 3);


/*
*NO.:20
*Name:Make a Person

*/
var Person = function (firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(" ")[0];
    };

    this.getLastName = function () {
        return fullName.split(" ")[1];
    };

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function (name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function (name) {
        fullName = name;
    };
};
var bob = new Person('Bob Ross');
bob.getFullName();


/*
*NO.:21
*Name:Map the Debris

*/
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];

    var getOrbPeriod = function (obj) {
        var c = Math.pow(earthRadius + obj.avgAlt, 3);
        var b = Math.sqrt(c / GM);
        var orbPeriod = Math.round(a * b);
        return { name: obj.name, orbitalPeriod: orbPeriod };
    };

    for (var elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

