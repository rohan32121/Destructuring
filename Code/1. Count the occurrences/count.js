// function(){

// }

// const str = "The quick brown fox jumps over the lazy dog.";

// Map {
//   "the": 2,
//   "quick": 1,
//   "brown": 1,
//   "fox": 1,
//   "jumps": 1,
//   "over": 1,
//   "lazy": 1,
//   "dog": 1
// }

// //You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.


function wordCount(str) {
 
  const words = str.split(' ');

  const counts = new Map();

  for (const word of words) {
    if (counts.has(word)) {
      counts.set(word, counts.get(word) + 1);
    } else {
      counts.set(word, 1);
    }
  }

  return counts;
}

const str = "The quick brown fox jumps over the lazy dog.";

const counts = wordCount(str);

console.log(counts);


// The has() method on a Map object checks if the Map contains a particular key. In this case, we are using it to check if the Map already contains the word that we are currently iterating over. If it does, we increment the count for that word. If it doesn't, we set the count for that word to 1.

// actully ye apko true false return krega weather key map me present he ya nhi.
