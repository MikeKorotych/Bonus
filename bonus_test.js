const depEl = document.getElementById("dep");
const outEl = document.getElementById("out");
const bonEl = document.getElementById("bon");
const flbEl = document.getElementById("flb");
const resultEl = document.getElementById("result");

let dep = 0;
let out = 0;
let bon = 0;
let flb = 0;

depEl.addEventListener("keyup", (e) => {
  dep = e.target.value;
  bonus(dep, out, bon, flb);
});

outEl.addEventListener("keyup", (e) => {
  out = e.target.value;
  bonus(dep, out, bon, flb);
});

bonEl.addEventListener("keyup", (e) => {
  bon = e.target.value;
  bonus(dep, out, bon, flb);
});

flbEl.addEventListener("keyup", (e) => {
  flb = e.target.value;
  bonus(dep, out, bon, flb);
});

function bonus(deposit = 0, cashout = 0, bonus = 0, fromLastBonus = 0) {
  if (deposit - cashout < 0)
    return (resultEl.innerHTML = `This player don't need a bonus 🚫 `);

  const ggr = deposit - cashout;
  const maxBonusRatio = 0.4;
  const userBonusRatio = bonus / deposit;

  let maxPosibleBonus = deposit * maxBonusRatio - bonus;
  let maxGGRBonus =
    (ggr - bonus) * (1 - userBonusRatio) * (1 - bonus / ggr) * 0.4; // 0.4 changble koeff

  let maxFLBBonus = (maxGGRBonus + fromLastBonus * 0.1 * 3) / 4;

  if (userBonusRatio > maxBonusRatio)
    return (resultEl.innerHTML = `This player don't need a bonus 🚫`);

  if (userBonusRatio > 0.2 && userBonusRatio < 0.3) {
    maxPosibleBonus *= 0.9;
    maxGGRBonus *= 0.9;
  }

  if (userBonusRatio >= 0.3) {
    maxPosibleBonus *= 0.8;
    maxGGRBonus *= 0.8;
  }

  if (maxGGRBonus > maxPosibleBonus) {
    maxGGRBonus = maxPosibleBonus;
  }

  return (resultEl.innerHTML = `Max bonus - ${Math.floor(
    maxPosibleBonus
  )}  <br> <br> <hr> <br> GGR bonus - ${Math.floor(
    maxGGRBonus
  )} <br> <br> <hr> <br> FLB bonus - ${Math.floor(maxFLBBonus)}`);

  // return `Max bonus - ${maxPosibleBonus}, GGR bonus - ${maxGGRBonus} `;
}

// console.log(bonus(900, 500, 100));
// console.log(bonus(1000, 700, 200));
