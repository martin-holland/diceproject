# Dice Class (API)

This is a Dice class for dice games. Dice holds the number of dots. The number of dots is between 1 and given upper bound (included). THe maximum upper bound is 20. If the dice hasnt been rolled, the number of dots is 0. After the dice has been rolled, the dot count can't become 0 again.

## Operations

### **constructor(upperBound)**

- Intializes the dice with the upper bound that is passed as a parameter
- If no upperBound is given, the default upper bound is 6.
- Initializes the dot count to 0

- if upperBound is not an integer, throw an exception
  `'upper bound must be an integer'`

- if upperBound is not between 2 and 20, an exception is thrown:
  - upperBound >20 `'Upper bound too big'`
  - upperbound <20 `'Upper bound too small'`

### Methods

#### \*roll()\*\*\*

- roll the dice
- when rolled, the dot count becomes a random number between 1 and upper bound (included)
- returns nothing

#### **toString()**

- return dot count as a string. For example: `'4'`
- if the dice hasn't been rolled yet, returns a text `'Not rolled yet'`

### Getters

#### \*_dots_

- returns the number of dots

#### **minimumValue**

- returns the minimum number of dots of the dice

#### **maximumValue**

- returns the maximum number of the dots of the dice

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

  check that dot count is set to 0

  newDice(21) throws too big
  newDice(200) throws too big

  new Dice(-4) throws too small
  new Dice(1) throws too small
