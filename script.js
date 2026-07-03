let wins = 0;
let losses = 0;
let streak = 0;

document.addEventListener("keydown", (e) => {

  if (e.code === "NumpadAdd") {
    wins++;
    streak++;
    update();
  }

  if (e.code === "NumpadSubtract") {
    losses++;
    streak = 0;
    update();
  }

  if (e.code === "Delete") {
    wins = 0;
    losses = 0;
    streak = 0;
    update();
  }

});

function update() {

  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("streak").textContent = streak;

  let total = wins + losses;
  let wr = total === 0 ? 0 : Math.round((wins / total) * 100);

  document.getElementById("wr").textContent = "WR " + wr + "%";

  document.getElementById("barFill").style.width = wr + "%";
}

update();
