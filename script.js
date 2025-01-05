console.log('Hello!');
// 1. Given an array of numbers, filter the even numbers into a new array.

const nums = [12, 5, 20, 7, 8, 15, 30];
const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// 2. Given an array of strings, filter the strings that have length greater than 5 into a new array.

const words = ['kiwi', 'mango', 'apple', 'orange', 'banana'];
const filterWords = words.filter((word) => word.length > 5);
console.log(filterWords);

// 3. Given an array of strings, filter the strings that start with letter 'S' into a new array. Explore .startsWith() method.

const words2 = ['Sun', 'Moon', 'Star', 'Planet', 'Saturn'];
const startsWithS = words2.filter((word) => word.charAt(0) === 'S');
console.log(startsWithS);

// 4. Given an array of numbers, filter the numbers that are not multiples of 3 into a new array.

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notMul = threeMultiples.filter((num) => num % 3 !== 0);
console.log(notMul);

// 5. Given an array of numbers, filter the numbers divisible by both 7 and 3 into a new array.

const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const sevenAnd3 = numbs.filter((num) => num % 7 == 0 && num % 3 == 0);
console.log(sevenAnd3);

// 6. Given an array of strings, filter the strings that are in lowercase into a new array.

const words4 = ['APPLE', 'banana', 'KIWI', 'orange', 'GRAPE'];
const lwc = words4.filter((word) => word == word.toLowerCase());
console.log(lwc);

// 7. Given an array of strings, filter the strings that do not contain with the letter 'a' in them.

const wordsY = ['happy', 'sad', 'sunny', 'cloudy', 'rainy'];
const doesnot = wordsY.filter((word) => word.includes('a'));
console.log(doesnot);

// 8. Given an array of numbers, filter the numbers that are multiples of either 2 or 3 into a new array.

const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mulOf2and3 = numsOnetoTen.filter((num) => num % 2 === 0 || num % 3 === 0);
console.log(mulOf2and3);

// 9. Given an array of strings, filter the strings that includes the letter 'y' or 'a' into a new array.

const feelingWords = ['happy', 'sad', 'weepy', 'sleepy', 'rainy'];
const includesYorA = feelingWords.filter(
  (word) => word.includes('y') || word.includes('')
);
console.log(includesYorA);
// 10.Given an array of numbers, filter the numbers between 20 to 40 into a new array.

const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];
const filNums = newNums.filter((num) => num >= 20 && num < 40);
console.log(filNums);
