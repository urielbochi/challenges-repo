function pyramid(num) {
  const structure = "*";
  let line = "";
  let position = num;
  let holder = "";

  for (let row = 0; row < num; row += 1) {
    for (let column = 0; column <= num; column += 1) {
      if (column < position) {
        line += " ";
      } else {
        line += structure;
      }
    }

    console.log(line);
    line = "";
    position -= 1;
  }
}
pyramid(6);

module.exports = pyramid;
