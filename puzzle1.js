var fs = require("fs");
fs.readFile("input.txt", "utf8", function (err, data) {
  let inputData = data.split("\n");
  let numbers = [];
  inputData.forEach((record) => {
    if (Number.isInteger(parseInt(record))) {
      numbers.push(parseInt(record));
    }
  });
  let counter = 0,
    prevSum = 0,
    currentSum = 0;
  for (let i = 0; i < numbers.length - 2; i++) {
    currentSum = numbers[i] + numbers[i + 1] + numbers[i + 2];
    if (i === 0) {
      currentSum = prevSum;
    }
    if (prevSum < currentSum) {
      counter += 1;
    }
    prevSum = currentSum;
  }
  console.log("answer", counter);
});
