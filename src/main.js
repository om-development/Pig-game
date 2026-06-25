let gender = [];
let playerName = [];
let tempEl = [];
const handleSubmit = function (event) {
  event.preventDefault();
  const gender1El = document.querySelector('input[name="gender--1"]:checked');
  const gender2El = document.querySelector('input[name="gender--2"]:checked');
  tempEl[0] = document.getElementById("player--1--input");
  tempEl[1] = document.getElementById("player--2--input");
  gender1 = gender1El ? gender1El.value : "Ghost";
  gender2 = gender2El ? gender2El.value : "Ghost";
  gender[0] = gender1;
  gender[1] = gender2;
  playerName[0] = tempEl[0].value === '' ? 'Player 1': tempEl[0].value ;
  playerName[1] = tempEl[1].value === '' ? 'Player 2': tempEl[1].value;

  document.querySelector(".startGame").classList.remove("hidden");
  document.querySelector(".startGame").classList.add("flex");
  document.querySelector('.loadBtn').classList.toggle('flex');
  document.querySelector('.loadBtn').classList.toggle('hidden');

  console.log(gender[0], gender[1], playerName[0], playerName[1]);

  sessionStorage.setItem("gender", JSON.stringify(gender));
  sessionStorage.setItem("playerName", JSON.stringify(playerName));
};
document.getElementById('backBtn').addEventListener('click', function () {
  document.querySelector(".startGame").classList.toggle("hidden");
  document.querySelector(".startGame").classList.toggle("flex");
  document.querySelector('.loadBtn').classList.toggle('flex');
  document.querySelector('.loadBtn').classList.toggle('hidden');
})
