// Business Logic
var pigLatin = function(englishWord) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i++) {
     if (englishWord[0] === vowels[i]) {
     var startsWithVowel = true;
     break;
   }
  }

   if (startsWithVowel) {
     var translatedWord = englishWord; // it starts with vowel
   } else {
     var translatedWord = englishWord.slice(1) + englishWord[0];   // this is a consonant, slice first consonant (which is not a vowel) move to end add 'ay'
   }
   return translatedWord + "ay";  // add 'ay' if starts with vowel
};












// VOWELS
// var isVowel = function(englishWord) {
//   var vowels = ["a", "e", "i", "o", "u"];
//
//   for (var i = 0; i < vowels.length; i++) {
//     var vowel = vowels[i];
//    if (englishWord[0] === vowel) {
//      return true;
//    }
//
//   }
//
// };



// User Interface Logic
