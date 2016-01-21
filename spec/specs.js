describe('pigLatin', function() {

  it("will identify if word begins with a vowel and add 'ay' at the end", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("will slice the first consanant and move to the end and add 'ay'", function() {
    expect(pigLatin("cat")).to.equal("atcay");
  });

  it("takes two consonants at the beginning of a word and moves them to the end", function() {
    expect(pigLatin("tricky")).to.equal("ickytray");
  });
});

describe("hasConsonantAt", function() {
  it("returns true if a word has a consonant in the specified location", function() {
    expect(hasConsonantAt("peanut", 0)).to.equal(true);
  });

  it("returns false if a word does not have a consonant in the specified spot", function() {
    expect(hasConsonantAt("peanut", 1)).to.equal(false);
  });
});

describe("indexOfFirstVowel", function() {
  it("returns 0 for a word that starts with a vowel ", function() {
    expect(indexOfFirstVowel("apple")).to.equal(0);
  });
});




// describe('isVowel', function() {
//
//   it("Is first letter of input word a vowel?", function() {
//     expect(isVowel("apple")).to.equal(true);
//   });
//
//   it("For words that start with a vowel, add 'ay' to the end ", function() {
//     expect(pigLatin("apple")).to.equal("appleay");
//   });
//
// });
