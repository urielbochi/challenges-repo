const assert = require("assert");
const verifyDeboraPassword = require("../Question02");

test("Valida se ao entrar com uma senha não segura, o código indica as strings que faltam.", () => {
  expect(verifyDeboraPassword("Ya3")).toEqual(3);
  expect(verifyDeboraPassword("YUMe2")).toEqual(1);
  expect(verifyDeboraPassword("Akshan44")).toEqual(1);
  expect(verifyDeboraPassword("")).toEqual(6);
});
