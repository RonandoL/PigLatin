describe('pigLatin', function() {

  it("will identify if word begins with a vowel and add 'ay' at the end", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("will slice the first consanant and move to the end and add 'ay'", function() {
    expect(pigLatin("bug")).to.equal("ugbay");
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
