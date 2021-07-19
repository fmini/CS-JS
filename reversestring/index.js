// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa';
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;

// SOLUTION 1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// SOLUTION 2
// function reverse(str) {
//   let reversed = '';

//   for (let char of str) {
//     // add current character of the loop to the front of reveresed
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// SOLUTION 3
// function reverse(str) {
//   return str.split('').reduce((reversed, char) => char + reversed, '');
// }
