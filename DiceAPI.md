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
