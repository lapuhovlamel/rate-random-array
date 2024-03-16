// randomArrayUtils.js
const shuffle = require('lodash/shuffle');
const random = require('lodash/random');

/**
 * Shuffles the elements of an array.
 * @param {Array} array The input array.
 * @returns {Array} The shuffled array.
 */
const shuffleArray = (array) => {
  return shuffle(array);
};

/**
 * Generates a random number within a specified range.
 * @param {number} min The minimum value of the range.
 * @param {number} max The maximum value of the range.
 * @returns {number} The random number.
 */
const generateRandomNumber = (min, max) => {
  return random(min, max);
};

module.exports = {
  shuffleArray,
  generateRandomNumber,
};
