const assert = require("assert");
const substringsPair = require("../Question03");

test("Valida se ao inserir uma string, retorna o número de pares de substrings", () => {
  expect(substringsPair("chocolate")).toEqual(4);
  expect(substringsPair("aba")).toEqual(2);
  expect(substringsPair("kk")).toEqual(1);
  expect(substringsPair("abcd")).toEqual(0);
});
