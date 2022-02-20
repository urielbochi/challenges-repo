function verifyDeboraPassword(pass) {
  let problemsCount = 0;
  let wordsLeft = 6;

  if (!pass.match(/[A-Z]/g)) {
    problemsCount += 1;
  }
  if (!pass.match(/[a-z]/g)) {
    problemsCount += 1;
  }
  if (!pass.match(/[0-9]/)) {
    problemsCount += 1;
  }
  if (!pass.match(/[!@#$%^&*()-+]/)) {
    problemsCount += 1;
  }
  if (pass.length < 6) {
    problemsCount = wordsLeft - pass.length;
  }
  return problemsCount;
}

// Execução
console.log(verifyDeboraPassword("Ya3")); // 3 words left (special character, length)
console.log(verifyDeboraPassword("Urielbochi")); // 2 words left (special character, number)
console.log(verifyDeboraPassword("deVel0per")); // 1 word left (special character)

module.exports = verifyDeboraPassword;
