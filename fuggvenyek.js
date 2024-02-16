export function elagazas() {
  szam = Number(szam);
  console.log(szam);
  if (!Number.isNaN(szam)) {
    if (szam === 0) {
      console.log("A szám 0");
    } else if (szam % 2 === 0) {
      console.log("A szám paros");
    } else {
      console.log("A szám páratlan");
    }
  }
var szam = "12a";
console.log("A szám változó típusa: " + typeof szam);
}

export function ciklusok() {
  for (let index = 0; index < 10; index++) {
    console.log(`${index}. Az élet szép`);
  }

  let index = 0;
  while (index < 10) {
    console.log(`${index}. Az élet szép`);
    index++;
  }
}
export function udvozles(nev) {
  console.log("Jó reggelt " + nev + "!");
}
