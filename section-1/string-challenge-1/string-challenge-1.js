
function stripPuncutation(str) {
  var output = '';
  for (var i = 0; i < str.length; i++) {
//   if (str[i] !== ',' && str[i] !== '.' && str[i] !== ':') {
//     output += str[i];
//   }
//   return output;
// }
    if ('.,:'.indexOf(str[i]) === -1){
      output += str[i]
    }
  }
  return output;
}


function stringReverser(str) {
  var output = '';
  for (var i = str.length - 1; i > -1; i--) {
    output += str[i];
  }
  return output;
}

function truncate(sentence) {
  // var output = '';
  return sentence.substr(0, 15) + '...';
}

function truncateByCount(sentence, count) {
  return sentence.substr(sentence, count) + '...';
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
