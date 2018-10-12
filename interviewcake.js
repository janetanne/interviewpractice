// // MERGING RANGES //

// function mergeRanges(meetings) {

//   // Merge meetings ranges. Given an array of meeting time ranges, return an array of condensed ranges.
  

//   return [];
// }


// // Tests

// let desc = 'meetings overlap';
// let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
// let expected = [{ startTime: 1, endTime: 4 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meetings touch';
// actual = mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]);
// expected = [{ startTime: 5, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meeting contains other meeting';
// actual = mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]);
// expected = [{ startTime: 1, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meetings stay separate';
// actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
// expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'multiple merged meetings';
// actual = mergeRanges([
//   { startTime: 1, endTime: 4 },
//   { startTime: 2, endTime: 5 },
//   { startTime: 5, endTime: 8 },
// ]);
// expected = [{ startTime: 1, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meetings not sorted';
// actual = mergeRanges([
//   { startTime: 5, endTime: 8 },
//   { startTime: 1, endTime: 4 },
//   { startTime: 6, endTime: 8 },
// ]);
// expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'oneLongMeetingContainsSmallerMeetings';
// actual = mergeRanges([
//   { startTime: 1, endTime: 10 },
//   { startTime: 2, endTime: 5 },
//   { startTime: 6, endTime: 8 },
//   { startTime: 9, endTime: 10 },
//   { startTime: 10, endTime: 12 }
// ]);
// expected = [
//   { startTime: 1, endTime: 12 }
// ];
// assertArrayEquals(actual, expected, desc);

// desc = 'sample input';
// actual = mergeRanges([
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 }, 
// ]);
// expected = [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ];
// assertArrayEquals(actual, expected, desc);

// function assertArrayEquals(a, b, desc) {
//   const arrayA = JSON.stringify(a);
//   const arrayB = JSON.stringify(b);
//   if (arrayA !== arrayB) {
//     console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
//   } else {
//     console.log(`${desc} ... PASS`);
//   }
// }

// REVERSE STRING IN PLACE //

function reverse(arrayOfChars) {
  // Reverse the input array of characters in place
  let left = 0;
  let right = (arrayOfChars.length - 1);

  while (left < right) {
    
    let holder = arrayOfChars[left];
    arrayOfChars[left] = arrayOfChars[right];
    arrayOfChars[right] = holder;

    left ++;
    right --;
  }

}

// // Tests

// let desc = 'empty string';
// let input = ''.split('');
// reverse(input);
// let actual = input.join('');
// let expected = '';
// assertEqual(actual, expected, desc);

// desc = 'single character string';
// input = 'A'.split('');
// reverse(input);
// actual = input.join('');
// expected = 'A';
// assertEqual(actual, expected, desc);

// desc = 'longer string';
// input = 'ABCDE'.split('');
// reverse(input);
// actual = input.join('');
// expected = 'EDCBA';
// assertEqual(actual, expected, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }

// REVERSE WORDS //

function reverseChars(message, left, right) {
  while (left < right) {
    let holder = message[left];
    message[left] = message[right];
    message[right] = holder;
    left++;
    right--;
  }
}

function reverseWords(message) {

  // Decode the message by reversing the words
    reverseChars(message, 0, (message.length - 1));

    let currentWordStart = 0;

    for (let i = 0; i <= message.length; i++) {
      if (i === message.length || message [i] === ' ') {
        reverseChars(message, currentWordStart, i - 1);
        currentWordStart = i + 1;
      }
    }
}

// // Tests

// let desc = 'one word';
// let input = 'vault'.split('');
// reverseWords(input);
// let actual = input.join('');
// let expected = 'vault';
// assertEqual(actual, expected, desc);

// desc = 'two words';
// input = 'thief cake'.split('');
// reverseWords(input);
// actual = input.join('');
// expected = 'cake thief';
// assertEqual(actual, expected, desc);

// desc = 'three words';
// input = 'one another get'.split('');
// reverseWords(input);
// actual = input.join('');
// expected = 'get another one';
// assertEqual(actual, expected, desc);

// desc = 'multiple words same length';
// input = 'rat the ate cat the'.split('');
// reverseWords(input);
// actual = input.join('');
// expected = 'the cat ate the rat';
// assertEqual(actual, expected, desc);

// desc = 'multiple words different lengths';
// input = 'yummy is cake bundt chocolate'.split('');
// reverseWords(input);
// actual = input.join('');
// expected = 'chocolate bundt cake is yummy';
// assertEqual(actual, expected, desc);

// desc = 'empty string';
// input = ''.split('');
// reverseWords(input);
// actual = input.join('');
// expected = '';
// assertEqual(actual, expected, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }
