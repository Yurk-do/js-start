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

let maxNumber = a[0];
let minNumber = a[0];
for (let i = 0; i < a.length; i += 1) {
  if (maxNumber < a[i]) {
    maxNumber = a[i];
  }
  if (minNumber > a[i]) {
    minNumber = a[i];
  }
}

console.log(
  `максимальное число массива "a" = ${maxNumber}, минимальное число массива "а" = ${minNumber}`
);

// 2.1. Вывести матрицу таблицы умножения.

let matrix = [];

for (let i = 1; i <= 9; i += 1) {
  const row = [];
  for (let j = 1; j <= 9; j += 1) {
    row.push(i * j);
  }
  matrix.push(row);
}

for (let i = 0; i < 9; i += 1) {
  let rowTable = "";
  for (let j = 0; j < 9; j += 1) {
    rowTable += `${matrix[i][j].toString()}\t`;
  }
  console.log(rowTable);
}

// 2.2. Посчитать сумму чисел находящихся на главной диагонали.
let sumMainDiagonal = 0;
for (i = 0; i < matrix.length; i += 1) {
  sumMainDiagonal += matrix[i][i];
}
console.log(
  `Сумма чисел, находящихся на главной диагонали таблицы умножения, = ${sumMainDiagonal}`
);

// 2.3. Посчитать среднее геометрическое чисел находящихся на вспомогательной диагонали.
let productOfDiagonal = 1;
let numberOfNumbers = 0;
for (let i = 0; i < matrix.length; i += 1) {
  productOfDiagonal *= matrix[i][8 - i];
  numberOfNumbers += 1;
}
const geometricMean = Math.pow(productOfDiagonal, 1 / numberOfNumbers);
console.log(`Среднее геометрическое чисел = ${geometricMean}`);

// 2.4. посчитать сумму всех элементов для каждого чётного столбца.
const sumForColumn = [];
for (let j = 2; j < matrix.length; j += 2) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    sum += matrix[i][j];
  }
  sumForColumn.push(sum);
}
console.log(
  `Cумма элементов каждого четного столбца = ${sumForColumn.toString()}`
);

// 2.5. Посчитать среднее арифметическое сумм каждой нечётной строки.

const arithmeticMean = [];
for (let i = 1; i < matrix.length; i += 2) {
  let sum = 0;
  let numberOfNumbers = 0;
  for (let j = 0; j < matrix.length; j += 1) {
    sum += matrix[i][j];
    numberOfNumbers += 1;
  }
  arithmeticMean.push(sum / numberOfNumbers);
}
console.log(
  `Среднее арифметическое сумм каждой нечетной строки = ${arithmeticMean.toString()}`
);

// 2.6. найти максимальное и минимальное число: 1. для всей матрицы; 2. для каждого столбца; 3. для каждой строки.

let maxNumberForMatrix = matrix[0][0];
let minNumberForMatrix = matrix[0][0];
for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix.length; j += 1) {
    if (maxNumberForMatrix < matrix[i][j]) {
      maxNumberForMatrix = matrix[i][j];
    }
    if (minNumberForMatrix > matrix[i][j]) {
      minNumberForMatrix = matrix[i][j];
    }
  }
}

const maxNumberForColumn = [];
const minNumberForColumn = [];

for (let j = 0; j < matrix.length; j += 1) {
  let max = matrix[0][j];
  let min = matrix[0][j];
  for (let i = 0; i < matrix.length; i += 1) {
    if (max < matrix[i][j]) {
      max = matrix[i][j];
    }
    if (min > matrix[i][j]) {
      min = matrix[i][j];
    }
  }
  maxNumberForColumn.push(max);
  minNumberForColumn.push(min);
}

const maxNumberForRow = [];
const minNumberForRow = [];

for (let i = 0; i < matrix.length; i += 1) {
  let max = matrix[i][0];
  let min = matrix[i][0];
  for (let j = 0; j < matrix.length; j += 1) {
    if (max < matrix[i][j]) {
      max = matrix[i][j];
    }
    if (min > matrix[i][j]) {
      min = matrix[i][j];
    }
  }
  maxNumberForRow.push(max);
  minNumberForRow.push(min);
}

console.log(
  `Минимальное число для всей матрицы = ${minNumberForMatrix}, максимальное число для всей матрицы = ${maxNumberForMatrix}`
);
console.log(
  `Минимальные числа для каждого столбца: ${minNumberForColumn}. Максимальные числа для каждого столбца: ${maxNumberForColumn}`
);
console.log(
  `Минимальные числа для каждой строки: ${minNumberForRow}. Максимальные числа для каждой строки: ${maxNumberForRow}`
);

// 2.7. Найти строку с наибольшим количеством чисел больше 50-ти.

let row = [];
for (let i = 0; i < matrix.length; i += 1) {
  let numberMoreFifty = 0;
  for (let j = 0; j < matrix.length; j += 1) {
    if (matrix[i][j] > 50) {
      numberMoreFifty += 1;
    }
  }
  row.push(numberMoreFifty);
}
let maxRow = row[0];
for (let i = 1; i < row.length; i += 1) {
  if (row[i] > maxRow) {
    maxRow = row[i];
  }
}
console.log(
  `Наибольшее количество чисел больше 50-ти содержится в строке № ${row.indexOf(
    maxRow
  )}`
);

// 2.8. Обойти матрицу в шахматном порядке и все чёрные клеточки заменить на 0, а
// для всех белых найти среднее арифметическое и максимальное число.

for (let i = 0; i < matrix.length; i += 1) {
  if (i === 0 || i % 2 === 0) {
    for (let j = 0; j < matrix.length; j += 2) {
      matrix[i][j] = 0;
    }
  } else {
    for (let j = 1; j < matrix.length; j += 2) {
      matrix[i][j] = 0;
    }
  }
}

let sumOfWhiteCell = 0;
let numbersOfWhiteCell = 0;
let maxWhiteCell = matrix[0][1];
for (let i = 0; i < matrix.length; i += 1) {
  if (i === 0 || i % 2 === 0) {
    for (let j = 1; j < matrix.length; j += 2) {
      sumOfWhiteCell += matrix[i][j];
      numbersOfWhiteCell += 1;
      if (maxWhiteCell < matrix[i][j]) {
        maxWhitecell = matrix[i][j];
      }
    }
  } else {
    for (let j = 0; j < matrix.length; j += 2) {
      sumOfWhiteCell += matrix[i][j];
      numbersOfWhiteCell += 1;
      if (maxWhiteCell < matrix[i][j]) {
        maxWhiteCell = matrix[i][j];
      }
    }
  }
}
const arithmeticMeanOfWhiteCell = sumOfWhiteCell / numbersOfWhiteCell;
console.log(
  `Среднее арифметическое для всех белых клеточек = ${arithmeticMeanOfWhiteCell}, а максимальное число для них = ${maxWhiteCell}`
);

// 2.9. Посчитать сумму чисел в верхнем треугольнике относительно главной диагонали

let sumUpTriangle = 0;
for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix.length - i; j += 1) {
    sumUpTriangle += matrix[i][j];
  }
}
console.log(`Сумма чисел верхнего треугольника = ${sumUpTriangle}`);

// 2.10. Посчитать сумму чисел в нижнем треугольнике относительно вспомогательной диагонали

let sumDownTriangle = 0;
for (let i = 8; i >= 0; i -= 1) {
  for (let j = 0 + i; j < matrix.length; j += 1) {
    sumUpTriangle += matrix[i][j];
  }
}
console.log(`Сумма чисел верхнего треугольника = ${sumUpTriangle}`);
