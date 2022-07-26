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
    const first = element.toLowerCase().slice(0, Math.ceil(element.length/2));
    const second = element.toLowerCase().slice(Math.floor(element.length/2)).split('').reverse().join('');
    return first === second;
    });
}

const wordsArr = ['osO', 'racecar', 'pineapple', 'porcupine', 'pineenip', 'Ana', 'Juan'];

console.log(getPalindromesArray(wordsArr));