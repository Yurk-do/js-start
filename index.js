/* eslint-disable no-console */

// Задание 1.1. Заполнить массив 20 числами которые делятся на 3, или на 5, или на 15 и вывести его на экран.

const a = [];
for (let i = 3; a.length < 20; i += 1) {
  if (i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
    a.push(i);
  }
}
console.log(
  `Массив "a" заполнен 20 числами, которые делятся на 3, или на 5, или на 15: ${a}`
);

// 1.2. Посчитать произведение всех элементов находящихся в каждой третьей позиции массива "a".

let product = 1;

for (let i = 2; i < a.length; i += 3) {
  product *= a[i];
}
console.log(
  `Произведение всех элементов массива "a", находящихся в каждой третьей позиции = ${product}`
);

// 1.3. Посчитать среднее арифметическое всех чисел массива "a".

let sum = 0;
for (let i = 0; i < a.length; i += 1) {
  sum += a[i];
}
const avarage = sum / a.length;
console.log(`Среднее арифметическое всех чисел массива "a" = ${avarage}`);

// 1.4. Найти максимальное и минимальное число в массиве "а".

let maxNumber = 0;

for (let i = 0; i < a.length; i += 1) {
  if (a[i] > maxNumber) {
    maxNumber = a[i];
  }
}

let minNumber = maxNumber;
for (let i = 0; i < a.length; i += 1) {
  if (a[i] < minNumber) {
    minNumber = a[i];
  }
}

console.log(
  `максимальное число массива "a" = ${maxNumber}, минимальное число массива "а" = ${minNumber}`
);

// 2.1. Вывести матрицу таблицы умножения.

let col1 = [0];
let col2 = [0];
let col3 = [0];
let col4 = [0];
let col5 = [0];
let col6 = [0];
let col7 = [0];
let col8 = [0];
let col9 = [0];
let col10 = [0];

for (let i = 1; i <= 10; i += 1) {
  col1.push(i);
  col2.push(col1[i] + i);
  col3.push(col2[i] + i);
  col4.push(col3[i] + i);
  col5.push(col4[i] + i);
  col6.push(col5[i] + i);
  col7.push(col6[i] + i);
  col8.push(col7[i] + i);
  col9.push(col8[i] + i);
  col10.push(col9[i] + i);
  console.log(
    col1[i],
    col2[i],
    col3[i],
    col4[i],
    col5[i],
    col6[i],
    col7[i],
    col8[i],
    col9[i],
    col10[i]
  );
}

// 2.2. Посчитать сумму чисел находящихся на главной диагонали таблицы умножения.
