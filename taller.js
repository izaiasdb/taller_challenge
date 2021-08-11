/*
JS Challenge
Having a list of n digits (0 <= digit <= 9), where n less than or equal to 100, arrange it to move all 0 to right in O (n) time.

Example [4, 8, 0, 9, 2, 5, 0, 3, 3, 0] -> [4, 8, 9, 2, 5, 3, 3, 0, 0, 0]
You must display this list in the console.
After this, the previous list without zeros ([4, 8, 9, 2, 5, 3, 3]) will represent a fictitious integer (4892533). You should add 1 unit to it, leaving the final list as [4, 8, 9, 2, 5, 3, 4]. You must display this list in the console.
Finally, multiply by -1 each digit in even position of the array without zeros. After this, detect the sub-array, whose sum of digits is the maximum and return this sum. Example: [4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9] -> 13. You must display the sum in the console.
*/

function puttZerosToRigth(arr, number) {
  const tmpWithNoZero = [];
  const tmpWithZeros = [];
  const rotated = [];
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== number) {
       tmpWithNoZero.push(arr[i]);
    } else {
      tmpWithZeros.push(arr[i]);
    }
  }
 
  rotated.push(...tmpWithNoZero, ...tmpWithZeros)
  console.log(rotated)
 
  return { rotated, tmpWithNoZero};
}

function addToLastDigite(arr, digit){
  const withDigitAdded = [...arr];
 
  const sliced = withDigitAdded.slice(0, -1);

  sliced.push((arr[arr.length-1]) + digit);
 
  return sliced;
}

function multiplyEvenPosition(arr, number) {
  const result = [];
 
  for (let i = 0; i < arr.length; i++) {
     if (i % 2 === 0) {
       result.push(arr[i] * number);
     } else {
       result.push(arr[i]);
     }
  }
 
  return result;
}

function sumSubArray(arr) {
  const sumAll = arr.reduce((a,b) => a + b, 0);
  const sliced = arr.slice(sumAll, arr.length);
  //detect the sub-array, whose sum of digits is the maximum and return this sum. 
  return sliced.reduce((a,b) => a + b, 0);
}

const {rotated, tmpWithNoZero} = puttZerosToRigth([4, 8, 0, 9, 2, 5, 0, 3, 3, 0], 0);
console.log(rotated)

const withLasDigit = addToLastDigite(tmpWithNoZero, 1);
console.log(withLasDigit)

const multiplyed = multiplyEvenPosition([4, 8, 9, 2, 5, 8, 4, 9], -1);
// [-4, 8, -9, 2, -5, 8, -4, 9]
console.log(multiplyed)
console.log(sumSubArray(multiplyed))
