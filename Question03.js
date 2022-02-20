/* Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocadas para formar
 a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.
*/

function anagramCheck(stringOne, stringTwo) {
  const holderObj = {};

  for (let i = 0; i < stringOne.length; i++) {
    const char = stringOne[i];
    if (holderObj[char]) {
      holderObj[char]++;
    } else {
      holderObj[char] = 1;
    }
  }

  for (let j = 0; j < stringTwo.length; j++) {
    const char = stringTwo[j];
    if (holderObj[char]) {
      holderObj[char]--;
    } else {
      return false;
    }
  }

  return true;
}

function substringsCheck(string) {
  let i,
    j,
    result = [];

  for (i = 0; i < string.length; i++) {
    for (j = i + 1; j < string.length + 1; j++) {
      result.push(string.slice(i, j));
    }
  }
  return result;
}

function count(currentIndex, arr) {
  const element = arr[currentIndex];
  const size = arr.slice(currentIndex + 1);
  let counter = 0;

  for (let i = 0; i < size.length; i++) {
    if (element.length === size[i].length && anagramCheck(element, size[i])) {
      counter++;
    }
  }

  return counter;
}

function substringsPair(s) {
  const duplicates = s.split("").filter((v, i) => s.indexOf(v) !== i).length;

  if (!duplicates) return 0;
  let totalAnagrams = 0;

  const callback = substringsCheck(s);

  for (let i = 0; i < callback.length; i++) {
    totalAnagrams += count(i, callback);
  }

  return totalAnagrams;
}

console.log(substringsPair("chocolate")); // 4
console.log(substringsPair("abcd")); // 0
console.log(substringsPair("kk")); // 1

module.exports = substringsPair;
