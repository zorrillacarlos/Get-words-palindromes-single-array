// Palabra Palindrome
function getPalindrome(str) {
  let strReverse = str.split("").reverse().join("");
  if (str.toLowerCase() === strReverse.toLowerCase()) {
    return `${str} es palindrome`;
  } else {
    return `${str} No es palindrome`;
  }
}
console.log(getPalindrome("oso"));

// Arreglo Palabras Palindrome

function getPalindromesArray(arrayPalindrome) {
    return arrayPalindrome.filter(element => {
    const originalWord = element.toLowerCase().slice(0, Math.ceil(element.length/2));
    const reverseWord = element.toLowerCase().slice(Math.floor(element.length/2)).split('').reverse().join('');
    return originalWord === reverseWord;
    });
}

const wordsArr = ['1001', 'oso', 'Otto', 'Ana', 'Juan'];

console.log(getPalindromesArray(wordsArr));