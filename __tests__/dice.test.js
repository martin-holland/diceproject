"use strict";

const Dice = require("../dice.js");

describe("Method and getters defined", () => {
  const dice = new Dice();

  test("minimumValue defined", () => {
    expect(dice.minimumValue).toBeDefined();
  });
  test("minimumValue is 1", () => {
    expect(dice.minimumValue).toBe(1);
  });
  test("maximumValue is definied", () => {
    expect(dice.maximumValue).toBeDefined();
  });
  test("dots definied", () => {
    expect(dice.dots).toBeDefined();
  });
  test("roll definied", () => {
    expect(dice.roll).toBeDefined();
  });
  //   test('toString definied', () => { // not necessary
  //       expect(dice.toString).toBeDefined();
  //   })
});

describe("Create a dice with no upper bound given", () => {
  const dice = new Dice();

  test("maximumValue is 6", () => {
    expect(dice.maximumValue).toBe(6);
  });
  test("minimumValue is 1", () => {
    expect(dice.minimumValue).toBe(1);
  });
  test("dots is 0", () => {
    expect(dice.dots).toBe(0);
  });
});

describe("Create a dice");
