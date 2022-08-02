var elP = document.querySelector(".xabar");

var result = Number(prompt("Formula 1 poygasida qatnashish uchun yoshingizni kiriting?").trim());

var age = 16;

if (isNaN(result)) {
  elP.textContent = "Iltimos, yoshingizni sonlarda qiymatini kiriting!";
} 
  else {
  if (result < 0) {
      elP.textContent = "Siz (-) minus son kiritdingiz.";
  }
    else if (result == 14) {
      elP.textContent = "Siz formula 1 poygalariga ikki yildan keyin qatnashishingiz mumkin.";
  }
    else if (result >= age) {
      elP.textContent = "Siz formula 1 poygalariga qatnashishingiz mumkin.";
  }
    else {
      elP.textContent = "Siz hali juda yoshsiz.";
  }
}
