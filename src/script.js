let playing = true;
const diceImg = document.getElementById("dice");
const rollBtn1 = document.getElementById("roll--1");
const rollBtn2 = document.getElementById("roll--2");
const points1 = document.getElementById("score--1");
const points2 = document.getElementById("score--2");
const hold1 = document.getElementById("hold--1");
const hold2 = document.getElementById("hold--2");
const current1 = document.querySelector(".current--1");
const current2 = document.querySelector(".current--2");
let scores = [0, 0];
let currentScore = 0;
let activeplayer = 1;
let gender1, gender2, player1, player2;

const gender = JSON.parse(sessionStorage.getItem("gender")) || ["boy", "girl"];
const playerName = JSON.parse(sessionStorage.getItem("playerName")) || ["Player 1", "Player 2"];
console.log(gender, playerName);

const players = [
  {
    name: playerName[0],
    gender: gender[0],
    win: 0,
  },
  {
    name: playerName[1],
    gender: gender[1],
    win: 0,
  },
];

const flexHidden = function (classs) {
  const replace = String(classs);
  document.querySelector(`.${replace}`).classList.toggle("flex");
  document.querySelector(`.${replace}`).classList.toggle("hidden");
};
const resultWin = function (number) {
  playing = false;
  let winner, losser;
  if (number === 1) {
    winner = 1;
    losser = 2;
  } else {
    winner = 2;
    losser = 1;
  }
  if (winner === 1) {
    if (players[0].gender === "boy") {
      document.querySelector(`.win--1`).style.backgroundImage = "url(assets/win-boy.gif)";
    } else if (players[0].gender === "girl") {
      document.querySelector(`.win--1`).style.backgroundImage = "url(assets/win-girl.gif)";
    } else {
      document.querySelector(`.win--1`).style.backgroundImage = "url(assets/ghost-win.gif)";
    }
    if (players[1].gender === "boy") {
      document.querySelector(`.lose--2`).style.backgroundImage = "url(assets/lose-boy.gif)";
    } else if (players[1].gender === "girl") {
      document.querySelector(`.lose--2`).style.backgroundImage = "url(assets/lose-girl.gif)";
    } else {
      document.querySelector(`.lose--2`).style.backgroundImage = "url(assets/ghost-lose.gif)";
    }
    flexHidden(`win--1`);
    document.querySelector(`.win--1--text`).textContent = `${players[0].name} wins!`;
    flexHidden(`results`);
    flexHidden(`game`);
    flexHidden(`lose--2`);
    document.querySelector(`.lose--2--text`).textContent = `${players[1].name} loses!`;
  } else if (winner === 2) {
    if (players[1].gender === "boy") {
      document.querySelector(`.win--2`).style.backgroundImage = "url(assets/win-boy.gif)";
    } else if (players[1].gender === "girl") {
      document.querySelector(`.win--2`).style.backgroundImage = "url(assets/win-girl.gif)";
    } else {
      document.querySelector(`.win--2`).style.backgroundImage = "url(assets/ghost-win.gif)";
    }
    if (players[0].gender === "boy") {
      document.querySelector(`.lose--1`).style.backgroundImage = "url(assets/lose-boy.gif)";
    } else if (players[0].gender === "girl") {
      document.querySelector(`.lose--1`).style.backgroundImage = "url(assets/lose-girl.gif)";
    } else {
      document.querySelector(`.lose--1`).style.backgroundImage = "url(assets/ghost-lose.gif)";
    }
    flexHidden(`results`);
    flexHidden(`win--2`);
    document.querySelector(`.win--2--text`).textContent = `${players[1].name} wins!`;
    flexHidden(`lose--1`);
    document.querySelector(`.lose--1--text`).textContent = `${players[0].name} loses!`;
    flexHidden(`game`);
  }
};

const switchPlayer = function (number) {
  document.querySelector(`.notify--${activeplayer}`).classList.toggle(`hidden`);
  activeplayer = number === 1 ? 2 : 1;
  document.querySelector(`.notify--${activeplayer}`).classList.toggle(`hidden`);
};

const roll = function (number) {
  const player = number;
  if (playing) {
    let random = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `assets/${random}_dots.png`;
    if (random === 1) {
      currentScore = 0;
      switchPlayer(number);
      document.querySelector(`.current--${player}`).textContent = currentScore;
    } else {
      currentScore = currentScore + random;
      document.querySelector(`.current--${player}`).textContent = currentScore;
    }
  }
};

const hold = function (number) {
  if (playing) {
    scores[number - 1] += currentScore;

    if (scores[number - 1] >= 100) {
      resultWin(number);
    } else {
      currentScore = 0;
      document.querySelector(`.current--${number}`).textContent = currentScore;
      document.querySelector(`#score--${number}`).textContent =
        scores[number - 1];
      switchPlayer(number);
    }
  }
};
//player1

rollBtn1.addEventListener("click", function () {
  if (activeplayer === 1) {
    roll(1);
  } else {
  }
});
rollBtn2.addEventListener("click", function () {
  if (activeplayer === 2) {
    roll(2);
  }
});
hold1.addEventListener("click", function () {
  if (activeplayer === 1) {
    hold(1);
  }
});
hold2.addEventListener("click", function () {
  if (activeplayer === 2) {
    hold(2);
  }
});

console.log(`started`);
