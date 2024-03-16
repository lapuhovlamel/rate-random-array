# Random Array Utils

This module provides utilities for generating random numbers and manipulating arrays.

## Installation

You can install this module via npm: `npm install random-array-utils`

## Usage

### Shuffle Array

```javascript
const { shuffleArray } = require('random-array-utils');

const array = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(array);
console.log('Shuffled Array:', shuffledArray);

