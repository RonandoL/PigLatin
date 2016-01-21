// Business Logic
var pigLatin = function(englishWord) {
  if (!hasConsonantAt(englishWord, 0)) {  // if it doesn't have a vowel at this position
     var translatedWord = englishWord; // it starts with vowel
   } else if (hasConsonantAt(englishWord, 1)) {
    var translatedWord = englishWord.slice(2) + englishWord.slice(0, 2);
  } else if (hasConsonantAt(englishWord,  0)){
    var translatedWord = englishWord.slice(1) + englishWord.slice(0, 1);   // this is a consonant, slice first consonant (which is not a vowel) move to end add 'ay'
  }
   return translatedWord + "ay"; // add 'ay' if starts with vowel
};

var hasConsonantAt = function(word, position) {
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < vowels.length; i++) {
     if (word[position] === vowels[i]) {
       return false;
     }
  }
  return true;
};

var indexOfFirstVowel = function(word) {
  return 0;
}









// User Interface Logic
