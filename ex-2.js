let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  if(words.length >= 5){
    return words;
  }
}

const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]
