
function whoWins(first, second) {
  if (first === 'rock' && second === 'scissors') {
    return 'rock';
  }
  else if (first === 'scissors' && second === 'rock') {
    return 'rock';
  }
  else if (first === 'paper' && second === 'rock') {
    return 'paper';
  }
  else if (first === 'rock' && second === 'paper') {
    return 'paper';
  }
  else if (first === 'scissors' && second === 'paper') {
    return 'scissors';
  }
  else if (first === 'paper' && second === 'scissors') {
    return 'scissors';
  }
  else if (first === 'paper' && second === 'paper') {
    return 'tie';
  }
  else if (first === 'rock' && second === 'rock') {
    return 'tie';
  }
  else if (first === 'scissors' && second === 'scissors') {
    return 'tie';
  }
}
