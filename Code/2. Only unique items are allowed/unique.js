// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements.

function removeDuplicates(numbers) {
    let uniqueSet = new Set(numbers);
    let uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
  }
  let numbers = [1, 2, 3, 4, 4, 5, 6, 5, 3, 2];
  let uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers);