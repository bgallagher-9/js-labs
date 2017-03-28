

function stripPuncutation(str) {
  var noPunc = '';

  for (var i = 0; i < str.length; i++) {
    if (',.:'.indexOf(str[i]) === -1) {
      noPunc += str[i];
    }
  }
    return noPunc;
}

function stringReverser(str) {
  var reverse = '';
  for (var i = str.length-1; i > -1; i--) {
    reverse += str[i];
  }
  return reverse;
}


function truncate(sentence) {
  var output = '';
  return output = sentence.substr(0, 15)+ '...';
}


function truncateByCount(sentence, count) {
  var output = '';
  return output = sentence.substring(0, count) + '...';
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
