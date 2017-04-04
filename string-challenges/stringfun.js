function onlyDigits(str) {
	return isFinite(str);
	// return parseFloat(str) && isFinite(str);
	// return !isNaN(parseFloat(str)) && isFinite(str);
	//for (var i = 0; i < str.length; i++) {
	//if ('abcdefghijklmnopqrstuvwxyz'.indexOf(str[i]) > -1) {
	//return false;
	//}
	//return true;
}




function formatPhoneNumber(str) {
	var output1 = str.slice(0, 3).toString();
	var output2 = str.slice(3, 6).toString();
	var output3 = str.slice(6, 10).toString();
	//console.log('(' + output1 + ')' + output2 + '-' + output3);
	var phone =  '(' + output1 + ') ' + output2 + '-' + output3;
	return phone;
}

function formatCreditCardNumber(str) {
	var output1 = str.slice(0, 4).toString();
	var output2 = str.slice(4, 8).toString();
	var output3 = str.slice(8, 12).toString();
	var output4 = str.slice(12, 16).toString();
	//console.log(output1 + ' ' + output2  + ' ' + output3  + ' ' + output4);
	var ccnum = output1 + ' ' + output2  + ' ' + output3  + ' ' + output4;
	return ccnum;
}

function missingInteger(str) {
	for (var i = 0; i <= 9; i++) {
		if (str.indexOf(i)===-1){
			return i;
		}
	}
}
// 	var zeroToTen = 45
// 	var sum = 0;
//   for (var i = 0; i < str.length; i++) {
// 		//if (str.indexOf(i) === -1) {
// 		//return i;
// 	//}
// 	//output++;
//       sum += parseInt(str[i],10);
//   }
//   return zeroToTen - sum;
// }

function repeatChar(char, count) {
	return char.repeat(count);
}
//
// var output = '';
// for (var i = 0; i < count; i++){
// 	output += char;
// }
// return output;

function delimitWord(str, char) {
   var array = str.split('');
	 return array.join('.');
}
// var result = '';
// 	for (var i = 0; i < str.lenght; i++) {
// 		result += str[i] + char;
// 	}
// 	return result;
//


function reverseWord(str) {
	var arr = str.split('');
	var output = [];
	for (var i = str.length - 1; i > -1; i--) {
		output += arr[i];
		arr.push(output[i]);
	}
	return output.split();
}
// var output = '';
// for (var i = str.length - 1; i < 0; i--) {
// 	output += str[i];
// }
// return output;
// }


function reverseSentence(str) {
	var arr = str.split(' ');
	var output = [];
	var output2 = '';
	var output3 = ''
	for (var i = arr.length - 1; i > -1; i--) {
		output += arr[i] + ' ';
		// console.log(arr.push(output));
		output2 = output.split();
		output3 = output2.toString();
	}
	// console.log(output3.trim(output2));
	return output3.trim(output2);
}

function kabobCase(str) {
	// console.log(str.split(' ').join('-'));
	return str.split(' ').join('-');
}

function camelCase(str) {
// 	var output1 = '';
// 	var output2 = '';
// 	// console.log(str.split(' ').join(''));
// 	output1 = str.split(' ').join('');
// 	output2 = output1.replace('c', 'C').replace('i', 'I').replace('o', 'O').replace('a', 'A').replace('m', 'M');
// 	// console.log(output2);
// 	return output2;
// }

var strArray = str.split(' ');
var output = '';
for (var i = 0; i < strArray.length; i++) {
	if (i === 0) {
		output += strArray[i].toLowerCase();
	}
	else {
		var string = strArray[i];
		var firstLetter = string[0].toUpperCase();
		var restOfLetter = string.slice(1).toLowerCase();
		output += firstLetter + restOfLetter;
		}
	}
	return output;
}
