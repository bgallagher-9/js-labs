

describe('Rock Paper Scissors', function() {

  it('rock beats scissors.', function() {

    var first = 'rock';
    var second = 'scissors';

    var result = whoWins(first, second);

    chai.assert.equal(result, 'rock');
  });

  it('rock beats scissors - reverse order.', function() {

    var first = 'scissors';
    var second = 'rock';

    var result = whoWins(first, second);

    chai.assert.equal(result, 'rock');
  });

  it('paper beats rock', function() {

    var first = 'paper';
    var second = 'rock';

    var result = whoWins(first, second);

    chai.assert.equal(result, 'paper');
  });

  it('paper beats rock - reverse order', function() {

    var first = 'rock';
    var second = 'paper';

    var result = whoWins(first, second);

    chai.assert.equal(result, 'paper');
  });

  it('scissors beats paper', function() {

    var first = 'scissors';
    var second = 'paper';

    var result = whoWins(first, second);

    chai.assert.equal(result, 'scissors');
  });

  it('scissors beats paper - reverse order', function() {

    var first = 'paper';
    var second = 'scissors';

    var result = whoWins(first, second);

    chai.assert.equal(result, 'scissors');
  });

  it('both paper, neither wins.', function() {

    var first = 'paper';
    var second = 'paper';

    var result = whoWins(first, second);

    chai.assert.equal(result, 'tie');
  });

  it('both scissors, neither wins.', function() {

    var first = 'scissors';
    var second = 'scissors';

    var result = whoWins(first, second);

    chai.assert.equal(result, 'tie');
  });

  it('both rock, neither wins.', function() {

    var first = 'rock';
    var second = 'rock';

    var result = whoWins(first, second);

    chai.assert.equal(result, 'tie');
  });

});
