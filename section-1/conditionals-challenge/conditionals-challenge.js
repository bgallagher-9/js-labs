function fullName(firstName, lastName, middleInitial) {

  if (lastName === undefined && middleInitial === undefined) {
   return firstName;
 }

  else if  (middleInitial === undefined) {
    return firstName + ' ' + lastName;
  }

  else {
    return firstName + ' ' + middleInitial + ' ' + lastName;
  }
}


function returnSmaller(first, second) {
  if (first < second) {
    return first;
  }
  else {
    return second;
  }
}


// ||  || animal === 'guppy')
function tankDeterminer(animal, size) {
  if (animal === 'turtle' && size === 'large') {
    return 'turtle';
  }
  else if (animal === 'clown fish' && size === 'small') {
    return 'small saltwater';
  }
  else if (animal === 'clown fish' && size === 'large') {
    return 'medium saltwater';
  }
  else if (animal === 'guppy' && size === 'small' || size === 'large') {
    return 'small freshwater';
  }
}
