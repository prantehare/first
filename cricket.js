
let score = {
  win: 0,
  lost: 0,
  tie: 0,
  displayScore: function () {
    return `User win:  ${score.win}  User Lost:  ${score.lost} User Tie: ${score.tie}`
  },
};


function generatecCompuerChoice() {
  let randomnumber = Math.random() * 3;
  let Choice;
  if (randomnumber > 0 && randomnumber <= 1) {
    return 'Bat';
  } else if (randomnumber > 1 && randomnumber <= 2) {
    return 'Ball';
  }
  else {
    return 'Stamp';
  }
}

function getResult(userMove, computerMove) {
  if (userMove === 'Bat') {
    if (computerMove === 'Ball') {
      score.win++;
      return 'User Won ';
    } else if (computerMove === 'Bat') {
      score.tie++;
      return `It's a tie`;

    } else if (computerMove === 'Stamp') {
      score.lost++;
      return 'Computer has won ';

    }
  }

  else if (userMove === 'Ball') {
    if (computerMove === 'Ball') {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === 'Bat') {
      score.lost++;
      return 'Computer has won ';
    } else if (computerMove === 'Stamp') {
      score.win++;
      return 'User Won ';

    }
  }

  else {
    if (computerMove === 'Ball') {
      score.lost++;
      return 'Computer has won ';
    } else if (computerMove === 'Bat') {
      score.win++;
      return 'User Won ';
    } else if (computerMove === 'Stamp') {
      score.tie++;
      return `It's a tie`;
    }
  }
}

function showResult(userMove, computerMove, result) {
  document.querySelector('p').innerHTML = `${score.displayScore()}`;
  localStorage.setItem('Score' , JSON.stringify(score));
  // console.log(score);
  document.querySelector('h1').innerHTML = (`You have chosen ${userMove}. Computer Choice is ${computerMove} and ${result}  `);
}