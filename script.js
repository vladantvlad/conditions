// Задача 1
/*
((5 >= 7) || ("javascript" != "java")) && !(((11 * 3) == 99) && true)

(false || ("javascript" != "java")) && !(false && true)

(false || true) && !(false)

true && true

true
*/
console.log("Задача 1");
console.log((5 >= 7 || "javascript" != "java") && !(11 * 3 == 99 && true)); // true

// Задача 2

console.log("\nЗадача 2");
const getRandomInRange = (min = 0, max = 1000) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};
const age = getRandomInRange(1, 100);
console.log("age:", age);
if (18 <= age && age <= 59) {
  console.log('"Вам еще работать и работать"');
} else if (age > 59) {
  console.log('"Вам пора на пенсию"');
} else if (1 <= age && age <= 17) {
  console.log('"Вам еще рано работать"');
}

// Задача 3

console.log("\nЗадача 3");
const ravensCount = getRandomInRange();
const lastNum = ravensCount % 10;
const twoLastNum = ravensCount % 100;
let ending = "";
if (
  lastNum == 0 ||
  (lastNum >= 5 && lastNum <= 9) ||
  (twoLastNum >= 11 && twoLastNum <= 19)
) {
  ending = "";
} else if (lastNum == 1) {
  ending = "а";
} else {
  ending = "ы";
}

let sentence = `"на ветке сидело ${ravensCount} ворон${ending}"`.trim();

console.log(sentence);

// Задача 4

console.log("\nЗадача 4");
const a = getRandomInRange(-100, 100);
const b = getRandomInRange(-100, 100);
const c = getRandomInRange(-100, 100);
console.log(`a= ${a}, b= ${b}, c= ${c}`);

if (a <= b && b <= c) {
  console.log(`Наибольшее число: ${c}\nНаименьшее число: ${a}`);
} else if (a <= c && c <= b) {
  console.log(`Наибольшее число: ${b}\nНаименьшее число: ${a}`);
} else if (b <= a && a <= c) {
  console.log(`Наибольшее число: ${c}\nНаименьшее число: ${b}`);
} else if (b <= c && c <= a) {
  console.log(`Наибольшее число: ${a}\nНаименьшее число: ${b}`);
} else if (c <= a && a <= b) {
  console.log(`Наибольшее число: ${b}\nНаименьшее число: ${c}`);
} else {
  console.log(`Наибольшее число: ${a}\nНаименьшее число: ${c}`);
}

// Задача 5

console.log("\nЗадача 5");
const appleCount = getRandomInRange(0, 10);
const orangeCount = getRandomInRange(0, 10);

const appleWeight = 100 * appleCount;
const orangeWeight = 150 * orangeCount;

console.log(`Яблок: ${appleCount}\nАпельсинов: ${orangeCount}`);

if (appleWeight > orangeWeight) {
  console.log("Бери яблоки!");
} else {
  console.log("Бери апельсины!");
}