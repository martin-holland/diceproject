# Test cases for Dice class

## Constructor

- upperbound is an integer

  new Dice('s') throw Error
  new Dice(2.5) throw Error

new Dice(2) creates Dice with upper bound 2
new Dice() creates Dice with upper bound 6
new Dice(12) creates Dice with upper bound 12
new Dice(6) creates Dice with upper bound 6
new Dice(20) creates Dice with upper bound 20
test with all upper bounds 2...20

check that dot count is set to 0

new Dice('s') throw `'Upper bound must be an integer'`
new Dice(2.5) throw `'Upper bound must be an integer'`

newDice(21) throws too big
newDice(200) throws too big

new Dice(-4) throws too small
new Dice(1) throws too small

## Test cases for roll

dice.roll()
check if 1 <= dot count <= upperBound

dice = newDice();
dice.roll();
check if 1 <= dot count <= 6

## Test cases for toString()

- Roll the dice and then compare the dots to the string returned from toString method
  dice = new Dice();
  dice.roll();
  expect(dice.toString()).toBe(`${dice.dots}``)

- if not rolled yet, then should return text `'Not rolled yet'`
  dice = new Dice();
  expect(dice.toString()).toBe('Not rolled yet')
