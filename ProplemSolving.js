// Find FindMissing Letter
function FindMissingLetter(Letters) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let start = alpha.indexOf(Letters[0]);
    console.log(start);
    
    for (let i = 0; i < Letters.length; i++) {
        
        if (Letters[i] !== alpha[start + i]) {
          return alpha[start + i];
        }
      }
    
      return "No Missing Letter In Sequence";
}
console.log(FindMissingLetter("defgi")); // h
console.log(FindMissingLetter("abcdeghi")); // f
console.log(FindMissingLetter("xyz")); // No Missing Letter In Sequence

console.log("########################################################");

// Number To Reversed Array

function convert(no) {
    return no.toString().split("").map((x) => +x).reverse();
  }
  
  console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
  console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]
  
  console.log("########################################################");
//Remove Duplicate Words From String

  function removeDuplicateWordsFrom(sentence) {
    let wordsList = sentence.split(" ");
    let result = [];
    for (let i = 0; i < wordsList.length; i++) {
      if (result.indexOf(wordsList[i]) === -1) {
        result.push(wordsList[i]);
      }
    }
    return result.join(" ");
  }
  console.log(removeDuplicateWordsFrom("Hello World Hello Planet Hello World"));
  // Hello Elzero Web School
  
  console.log("------------------");
  function removeDuplicateWordsFrom(sentence) {
    let wordsList = sentence.split(" ");
    let uniqueWords = wordsList.reduce((accumulator, currentWord) => {
      if (!accumulator.includes(currentWord)) {
        accumulator.push(currentWord);
      }
      return accumulator;
    }, []);
    return uniqueWords.join(" ");
  }


  console.log(removeDuplicateWordsFrom("Hello World Hello Planet Hello World"));
  // Hello Elzero Web School

  console.log("------------------");

  function removeDuplicateWordsFrom(sentence) {
    return [...new Set(sentence.split(" "))].join(" ");
  }
  
  console.log(removeDuplicateWordsFrom("Hello World Hello Planet Hello World"));
  // Hello Elzero Web School


console.log("########################################################");

function removeCharFrom(sentence , char) {
  return sentence.split("").filter((eachChar) => eachChar.toLowerCase() !== char.toLowerCase() ).join("");
}
console.log(removeCharFrom("HellodD FromD  dConsle", "d"));
console.log(removeCharFrom("Hellox From  Consle", "x"));
console.log(removeCharFrom("Hello@ From@@  @@Consle", "@"));

console.log("########################################################");

// Find Longest Word In a String
function longestWordIn(sentence) {
  let longestWord = sentence.split(" ").reduce(function (longest, current) {
    console.log(longest);
    console.log(current);
    console.log("$".repeat(10));
    return current.length > longest.length ? current : longest;
  });

  return longestWord;
  
}

longestWordIn("I Love you sooooo much");
// Arrow Function Version

// function longestWordIn(sentence) {
//   let longestWord = sentence.split(" ").reduce((l, c) => (c.length > l.length ? c : l));
//   return longestWord;
// }

console.log("########################################################");

function addCommasAndUnderscore(num) {
  // Convert To String
  let result = num.toLocaleString(); 
  // Convert To Array
  result = result.split("");
  // Update The Last Comma Value
  result[result.length - 4] = "_";
  // Convert To String
  result = result.join("");
  return result;
}

console.log(addCommasAndUnderscore(120)); // 120
console.log(addCommasAndUnderscore(1530)); // 1_530
console.log(addCommasAndUnderscore(120510650)); // 120,510_650
console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032

// Another Soultion



// function addCommasAndUnderscore(num) {
//   let result = num.toString();

//   result = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//   result = result.replace(/,(?=\d{3}$)/, "_");

//   return result;
// }

// console.log(addCommasAndUnderscore(120)); // 120
// console.log(addCommasAndUnderscore(1530)); // 1_530
// console.log(addCommasAndUnderscore(120510650)); // 120,510_650
// console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
// console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032
