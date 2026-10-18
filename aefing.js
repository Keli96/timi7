// aefing 1
//====================
// 1 bua til breytur

const nafn = "Keli";
let aldur = 30;
const gaeludyr = true;
console.log(nafn, aldur, gaeludyr);

// 2 prenta typuna af breytum
console.log(typeof nafn);
console.log(typeof aldur);
console.log(typeof gaeludyr);

// 3 reikna aldur
const faedingarar = 1996;
const reiknaduraldur = 2026 - faedingarar;
console.log("Reiknaður aldur;", reiknaduraldur);

// 4 prenta strenginn "ég heiti ___ og er ___ ára" með bæði bakkommum með $() og með +
console.log("ég heiti " + nafn + " og er " + aldur + " ára!");
console.log(`ég heiti ${nafn} og er ${aldur} ára!`);

// 5 profa að breyta const
// nafn = "Íris";
// aefing.js:25 Uncaught TypeError: Assignment to constant variable. at aefing.js:25:6

//===============================
//aefing 2 if else og foll
//===============================

// 1 skila true eda false
function erFullordinn(aldur) {
  return aldur >= 18;
}
console.log(erFullordinn(20));
console.log(erFullordinn(3));
console.log(erFullordinn(18));

// 2 skila "frabaert" ef einkun er 90+, "gott" ef 70-89, "stadid" ef 50-69 og "fall" ef annað
function einkun(stig) {
  if (stig >= 90) {
    return "Frábært";
  } else if (stig >= 70) {
    return "Gott";
  } else if (stig >= 50) {
    return "Staðið";
  } else {
    return "Fall";
  }
}
console.log(einkun(95));
console.log(einkun(81));
console.log(einkun(69));
console.log(einkun(29));

// 3 skila hvort tala se oddatala eda sletttala
function slettEdaOdda(tala) {
  if (tala % 2 === 0) {
    return "slétt tala";
  } else {
    return "odda tala";
  }
}
console.log(slettEdaOdda(8));
console.log(slettEdaOdda(5));

// 4 reikna verd eftir afslatt
function verdEftirAfslatt(verd, afslattur) {
  return verd - (verd * afslattur) / 100;
}
console.log(verdEftirAfslatt(1000, 20));

// 5 skila stærstutölu af 3
function staerst(tala1, tala2, tala3) {
  if (tala1 >= tala2 && tala1 >= tala3) {
    return tala1;
  } else if (tala2 >= tala3) {
    return tala2;
  } else {
    return tala3;
  }
}
console.log(staerst(9, 3, 5));
console.log(staerst(5, 9, 3));
console.log(staerst(3, 5, 9));

//===========================
// aefing 3
//===========================

// 1
