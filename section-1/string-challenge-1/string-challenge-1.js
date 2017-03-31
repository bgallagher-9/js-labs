
function stripPuncutation(str) {
  var output = '';
  for (var i = 0; i < str.length; i++) {
    if (':.,'.indexOf(str[i]) === -1) {
      output += str[i];
    }
  }
  return output;
}

function stringReverser(str) {
  var output = '';
  for (var i = str.length -1; i > -1; i--) {
      output += str[i];
  }
  return output;
}

function truncate(sentence) {
  return sentence.slice(0, 15) + '...';
}

function truncateByCount(sentence, count) {
  return sentence.substring(sentence, count) + '...';
}

function capitalizeEveryOtherLetter(str) {
  var output = '';
  for (var i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      output += str[i].toUpperCase();
    }
    else {
      output += str[i];
    }
  }
  return output;
}
