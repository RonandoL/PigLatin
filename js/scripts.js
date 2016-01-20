// Business Logic
var pigLatin = function(englishWord) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i++) {
    var vowel = vowels[i];
   if (englishWord[0] === vowel) {
     return englishWord + "ay";  // add 'ay' if starts with vowel
   } else {
     return englishWord.slice(1) + englishWord[0] + "ay"  // slice first consanent (which is not a vowel) move to end add 'ay'
   }

  }

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
