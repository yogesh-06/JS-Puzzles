// get input from user
// print the numbers from 1 to users input
// use for loop for for step 1
// then check wheather the number is divisile by 3 and 5

let userInput = 5;
for (i = 1; i <= userInput; i++) {
  if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 15 === 0) {
    console.log("BuzzFizz");
  } else {
    console.log(i);
  }
}
