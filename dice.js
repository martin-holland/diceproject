"use strict";

module.exports = class Dice {
  constructor() {
    this.dotCount = 0;
    this.upperBound = 6;
  }
  get minimumValue() {
    return 1;
  }
  get maximumValue() {
    return this.upperBound; // can test if defined by commenting this line out
  }
  get dots() {
    return this.dotCount;
  }
  roll() {}
};
