

function countCards(cards) {
  var pass = 0;
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].number === 'Q' || cards[i].number  === 'K' || cards[i].number === 'J') {
      pass += 10;
    }
    else if (cards[i].number !== 'A') {
      pass += cards[i].number;
      console.log(pass);
    }
  }
  // return pass;

  for (var i = 0; i < cards.length; i++) {
    if (cards[i].number === 'A') {
      if (pass + 11 >= 22) {
        pass += 1;
      }
        else {
          pass += 11;
        }
      }
  }
  return pass;
}
