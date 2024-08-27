function analyzeSentence(sentence) {
    let length = 0;
    let words = 1;
    let vowels = 0;
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
  
      // Increment length
      length++;
  
      // Check for word boundaries (spaces)
      if (char === ' ') {
        words++;
      }
  
      // Check for vowels
      if (isVowel(char)) {
        vowels++;
      }
    }
  
    return {
      length,
      words,
      vowels
    };
  }
  
  function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vowels.includes(char);
  }
  
  // Example usage
  const sentence = "This is a sample sentence.";
  const result = analyzeSentence(sentence);
  console.log("Length:", result.length);
  console.log("Words:", result.words);
  console.log("Vowels:", result.vowels);