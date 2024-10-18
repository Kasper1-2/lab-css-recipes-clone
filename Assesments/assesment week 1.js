function maxOfThreeNumbers(a, b, c) {
    if (a >= b && a >= c) {
      return a; // a is the greatest
    } else if (b >= a && b >= c) {
      return b; // b is the greatest
    } else {
      return c; // c is the greatest
    }
  }
  

console.log(maxOfThreeNumbers(5, 10, 15))
console.log(maxOfThreeNumbers(41, 20, 87))
console.log(maxOfThreeNumbers(84, 30, 93))

// 5 //

/* create a function named sumArray that receives an array of numbers as an argument.
the function should return the sum of all the numbers in the array. */

function sumArray (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// 6 // 
/* create a function named maxOfArray that receives an array of numbers as argument.
/* the function should return the greatest number out of the numbers provided in the array. */

function maxOfArray(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// console log //
console.log(maxOfArray([1, 2, 3, 4, 5]));


// 7 //
/* create a function named longestString that receives an array of strings as an argument
/* the function should return the longest string in the array. */

function longestString(strings) {
    let longest = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}

// console log //

console.log(longestString(["Kakaroto", "world", "goodbye", "hi"]));

// 8 //
/* create a function named getFullName that receives and object as an argument
/* the function should return the concatenated string containing the firstName and lastName property values from the object
/* specifically, the returned string should represent a person's full name based on the provided object
/* that contains the first and last name properties */

function getFullName(person) {
    return person.firstName + " " + person.lastName;
}

// console log //

console.log(getFullName({firstName: "Juan", lastName: "Perez"}));

// 9 //

/* create a function name doesWordExist that receies two arguments
/* an array of strings, a strin with the word we want to check if it exists in that array
/* the function should return true/false depending on if the word exists in the array or not */

function doesWordExist(wordsArr, word) {
    for (let i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i] === word) {
        return true
      }
    }
    return false;
  }
  
  console.log(doesWordExist(["Hello", "World", "goodbye", "cruel world"]))

// 10 //
/* create a function named findUnique that receives an array of words as an argument
/* the function should return the first found unoque (non-repeating) word. */

function findUnique(wordsArr) {
    for (let i = 0; i < wordsArr.length; i++) {
        let word = wordsArr[i];
        let isUnique = true;
        for (let j = 0; j < wordsArr.length; j++) {
            if (i !== j && word === wordsArr[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            return word;
        }
    }
    return null;
}

// console log //

console.log(findUnique(["hello", "world", "hello", "goodbye", "cruel", "world"]));