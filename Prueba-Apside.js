// Palabra Palindrome
const getPalindrome = (str) =>{
  let strReverse = str.split("").reverse().join("");
  if (str.toLowerCase() === strReverse.toLowerCase()) {
    return `${str} es palindrome`;
  } else {
    return `${str} No es palindrome`;
  }
}
console.log(getPalindrome("oso"));

// Arreglo Palabras Palindrome

const palabrasPalindromas = (palabras) => {
  const esPalindromo = (palabra) => {
    palabra = palabra.toLowerCase().replace(/ /g, '');
    return palabra === palabra.split('').reverse().join('');
  }
  // Filtra el array de palabras y devuelve solo las palíndromos
  return palabras.filter(palabra => {
    return esPalindromo(palabra);
  });
}

let listaDePalabras = ["reconocer", "oso", "casa", "anilina", "Coc "];
let palindromos = palabrasPalindromas(listaDePalabras);
console.log("Palíndromos encontrados:", palindromos);
