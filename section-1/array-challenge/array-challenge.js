function arrayReverser(arr) {
  var output = [];
  for (var i = arr.length-1; i > -1; i--) {
    output.push(arr[i]);
  }
  return output;
}


function sumArrayOfNumbers(arr) {
  var i = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


function numbersOver10(arr) {
  var sum = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      return arr[i];
    }
  }
  return sum;
}

function numbersOverX(arr, num) {
}

function stringsLongerThanFourLetters(arr) {
}

function stringsLongerThanXLetters(arr, length) {
}
