/* eslint-disable no-console */

//Задача № 1. Расстояние между двумя точками в прямоуголной системе координат.

const point1x = -1;
const point1y = 4;

const point2x = 5;
const point2y = -2;

const distance = Math.sqrt(
  Math.pow(point1x - point2x, 2) + Math.pow(point1y - point2y, 2)
);

console.log(`Расстояние между точками cоставляет: ${distance}`);

//Задача №2. Проверить удовлетворяют ли три числа теоереме Пифагора.

const a = 3;
const b = 4;
const c = 6;

const resultYes = a ** 2 + b ** 2 === c ** 2;

let output = " ";
if (resultYes) {
  output = "удовлетворяют";
} else {
  output = "неудовлетворяют";
}
console.log(
  `Если a = ${a}, b = ${b}, c = ${c}, то три числа ${output} теореме Пифагора`
);

//Задача №3. Убедиться, что три числа могут быть сторонами треугольника.

const d = 1;
const e = 3;
const f = 7;

let result = "";

if (d + e > f && e + f > d && f + d > e) {
  result = "могут";
} else {
  result = "не могут";
}
console.log(
  `Если d = ${d}, e = ${e}, f = ${f}, то эти три числа ${result} быть сторонами треугольника`
);

//задача №3. Решение с применением тернарного оператора.
const g = 5;
const h = 3;
const i = 7;

const condition = g + h > i && h + i > g && i + g > h;
let result2 = condition ? "могут" : "не могут";
console.log(
  `Если g = ${g}, h = ${h}, i = ${i}, то эти три числа ${result2} быть сторонами треугольника`
);
