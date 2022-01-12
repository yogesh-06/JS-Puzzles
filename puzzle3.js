// define a number to each alphabet

let alphabets = "abcdefghijklmnopqrstuvwxyz";
let inputName = "praxis";
let splitString = inputName.split("");
let reverseArray = splitString.reverse();
let baseCalculation;
let finalValue = 0;
isPrime(finalValue);

reverseArray.forEach((rc, index) => {
  let reverseIndex = alphabets.indexOf(rc) + 10;
  // console.log(reverseIndex, index);

  baseCalculation = reverseIndex * Math.pow(36, index);
  finalValue = finalValue + baseCalculation;
});

console.log("finalValue:", finalValue);

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
