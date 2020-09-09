/* eslint-disable no-console */

//Задача № 1. Расстояние между двумя точками в прямоуголной системе координат.

const distanceForTwoPoint = (point1, point2) =>
  Math.sqrt(
    (point1.x - point2.x) * (point1.x - point2.x) +
      (point1.y - point2.y) * (point1.y - point2.y)
  );

const point1 = {
  x: 4,
  y: 3,
};
const point2 = {
  x: 12,
  y: 13,
};
console.log(
  `Расстояние между точками c координатами ${point1.x}:${point1.y} и ${
    point2.x
  }:${point2.y} cоставляет: ${distanceForTwoPoint(point1, point2)}`
);

//Задача №2. Проверить удовлетворяют ли три числа теоереме Пифагора.

const PythagoreanTheoremForThreeNumbers = (a, b, c) =>
  a ** 2 + b ** 2 === c ** 2 ? "удовлетворяют" : "не удовлетворяют";

const number1 = 3;
const number2 = 4;
const number3 = 5;
const output = PythagoreanTheoremForThreeNumbers(number1, number2, number3);
console.log(
  `Tри числа: ${number1}, ${number2}, ${number3} - ${output} теореме Пифагора`
);

//Задача №3. Убедиться, что три числа могут быть сторонами треугольника.

// Излишне усложненный вариант.

// const sideOfTriangle = (a, b, c) =>
//   a + b > c && b + c > a && c + a > b ? "могут" : "не могут";

// const showResult = (a, b, c, funct) =>
//   console.log(
//     `Три числа: ${a}, ${b}, ${c} - ${funct} быть сторонами треугольника`
//   );
// const side1 = 5;
// const side2 = 3;
// const side3 = 3;
// const funct = sideOfTriangle(side1, side2, side3);
// showResult(side1, side2, side3, funct);

const sideOfTriangle = (a, b, c) =>
  a + b > c && b + c > a && c + a > b ? "могут" : "не могут";

const side1 = 5;
const side2 = 3;
const side3 = 3;

console.log(
  `Три числа: ${side1}, ${side2}, ${side3} - ${sideOfTriangle(
    side1,
    side2,
    side3
  )} быть сторонами треугольника`
);

// МАССИВЫ.

// Задание 1.1. Заполнить массив 20 числами которые делятся на 3, или на 5, или на 15 и вывести его на экран.
const arrayOfNumbers = (numbers) => {
  const array = [];
  for (let i = 3; array.length < numbers; i += 1) {
    if (i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
      array.push(i);
    }
  }
  return array;
};
const numbers = 20;
const arrayExample = arrayOfNumbers(numbers);
console.log(
  `Массив заполнен ${numbers} числами, которые делятся на 3, или на 5, или на 15: ${arrayOfNumbers(
    numbers
  )}`
);

// 1.2. Посчитать произведение всех элементов находящихся в каждой третьей позиции массива.
// 1.3. Посчитать среднее арифметическое всех чисел массива.
// 1.4. Найти максимальное и минимальное число в массиве.
const productOfElementsArray = (array) => {
  let product = 1;
  let sum = 0;
  let max = array[0];
  let min = array[0];
  for (let i = 2; i < array.length; i += 3) {
    product *= array[i];
  }
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    max = array[i] > max ? array[i] : max;
    min = array[i] < min ? array[i] : min;
  }
  return [product, sum / array.length, max, min];
};
const statArray = productOfElementsArray(arrayExample);
console.log(
  `1.2. Произведение всех элементов, находящихся в каждой третьей позиции массива = ${statArray[0]}, 
  1.3. Среднее арифметическое всех чисел массива = ${statArray[1]}, 
  1.4. Mаксимальное число в массиве = ${statArray[2]}, минимальное число в массиве = ${statArray[3]}`
);

// 2.1. Вывести матрицу таблицы умножения.

// const valueForMatrix = [
//   (i, j) => (i + 1) * (j + 1),
//   (i, j) => (i + j) / 2,
//   (i, j) => `${i} - ${j}`,
//   (i, j) => Math.floor(Math.random() * Math.floor((i + 2) * (j + 2))),
// ];

const generateMatrix = (rows, cols, value) => {
  const matrix = [];
  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; j < cols; j += 1) {
      row.push(value(i, j));
    }
    matrix.push(row);
  }
  return matrix;
};

const tabFormatMatrix = (value) => `${value.toString()}\t`;

const printMatrix = (matrix, format) => {
  for (let i = 0; i < matrix.length; i += 1) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j += 1) {
      row += format(matrix[i][j]);
    }
    console.log(row);
  }
};

const mTable = generateMatrix(9, 9, (i, j) => (i + 1) * (j + 1));
printMatrix(mTable, tabFormatMatrix);

// 2.2. Посчитать сумму чисел находящихся на главной диагонали.
// 2.3. Посчитать среднее геометрическое чисел, находящихся на вспомогательной диагонали.

const statDiagonalMatrix = (matrix) => {
  let sum = 0;
  let productOfDiagonal = 1;
  let count = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    sum += matrix[i][i];
    productOfDiagonal *= matrix[i][8 - i];
    count += 1;
  }
  return [sum, Math.pow(productOfDiagonal, 1 / count)];
};
const sumDiagonal = statDiagonalMatrix(mTable)[0];
const geometricMean = statDiagonalMatrix(mTable)[1];
console.log(
  `2.2. Сумма чисел, находящихся на главной диагонали таблицы умножения = ${sumDiagonal}`
);
console.log(
  `2.3. Среднее геометрическое чисел на вспомогательной диагонали = ${geometricMean}`
);

// 2.4. посчитать сумму всех элементов для каждого чётного столбца.
const sumForColumn = (matrix) => {
  const sumColumn = [];
  for (let j = 0; j < matrix.length; j += 2) {
    let sum = 0;
    for (let i = 0; i < matrix[j].length; i += 1) {
      sum += matrix[i][j];
    }
    sumColumn.push(sum);
  }
  return sumColumn;
};
console.log(
  `Cумма элементов каждого четного столбца = ${sumForColumn(mTable).toString()}`
);

// 2.5. Посчитать среднее арифметическое сумм каждой нечётной строки.

const arithmeticMean = (matrix) => {
  const output = [];
  for (let i = 1; i < matrix.length; i += 2) {
    let sum = 0;
    let count = 0;
    for (let j = 0; j < matrix.length; j += 1) {
      sum += matrix[i][j];
      count += 1;
    }
    output.push(sum / count);
  }
  return output;
};
console.log(
  `Среднее арифметическое сумм каждой нечетной строки = ${arithmeticMean(
    mTable
  ).toString()}`
);

// 2.6. найти максимальное и минимальное число: 1. для всей матрицы; 2. для каждого столбца; 3. для каждой строки.

const statMinMaxMatrix = (matrix) => {
  let maxNumberForMatrix = matrix[0][0];
  let minNumberForMatrix = matrix[0][0];
  const maxNumberForRow = [];
  const minNumberForRow = [];
  const maxNumberForColumn = [];
  const minNumberForColumn = [];

  for (let i = 0; i < matrix.length; i += 1) {
    let maxRow = matrix[i][0];
    let minRow = matrix[i][0];
    let maxColumn = matrix[i][0];
    let minColumn = matrix[i][0];
    for (let j = 0; j < matrix[i].length; j += 1) {
      maxNumberForMatrix =
        matrix[i][j] > maxNumberForMatrix ? matrix[i][j] : maxNumberForMatrix;
      minNumberForMatrix =
        matrix[i][j] < minNumberForMatrix ? matrix[i][j] : minNumberForMatrix;
      maxRow = matrix[i][j] > maxRow ? matrix[i][j] : maxRow;
      minRow = matrix[i][j] < minRow ? matrix[i][j] : minRow;
      maxColumn = matrix[j][i] > maxColumn ? matrix[j][i] : maxColumn;
      minColumn = matrix[j][i] < minColumn ? matrix[j][i] : minColumn;
    }
    maxNumberForRow.push(maxRow);
    minNumberForRow.push(minRow);
    maxNumberForColumn.push(maxColumn);
    minNumberForColumn.push(minColumn);
  }
  return [
    maxNumberForMatrix,
    minNumberForMatrix,
    maxNumberForColumn,
    minNumberForColumn,
    maxNumberForRow,
    minNumberForRow,
  ];
};

const minMax = statMinMaxMatrix(mTable);
console.log(`Максимальное число для всей матрицы: ${minMax[0]}, минимальное число: ${minMax[1]}.
Максимальные числа для каждого столбца: ${minMax[2]}, минимальные: ${minMax[3]}.
Максимальные числа для каждой строки: ${minMax[4]}, минимальные: ${minMax[5]}.`);

// 2.7. Найти строку с наибольшим количеством чисел больше 50-ти.

const moreNumber = (matrix, topNumber) => {
  let startNumber = 0;
  let rowNumber = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    let count = 0;
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] > topNumber) {
        count += 1;
      }
    }
    if (count > startNumber) {
      startNumber = count;
      rowNumber = i;
    }
  }
  return rowNumber;
};
const topNumber = 50;
console.log(
  `Наибольшее количество чисел больше ${topNumber} содержится в строке № ${moreNumber(
    mTable,
    topNumber
  )}`
);

// 2.8. Обойти матрицу в шахматном порядке и все чёрные клеточки заменить на 0, а
// для всех белых найти среднее арифметическое и максимальное число.

const createBlackCell = (matrix) => {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const BlackCell = i % 2 === 0 ? j % 2 !== 0 : j % 2 === 0;
      if (BlackCell) {
        matrix[i][j] = 0;
      }
    }
  }
  return printMatrix(matrix, tabFormatMatrix);
};
createBlackCell(mTable);

const statWhiteCell = (matrix) => {
  let sum = 0;
  let count = 0;
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const WhiteCell = i % 2 !== 0 ? j % 2 !== 0 : j % 2 === 0;
      if (WhiteCell) {
        sum += matrix[i][j];
        count += 1;
        max = matrix[i][j] > max ? matrix[i][j] : max;
      }
    }
  }
  return [sum / count, max];
};
console.log(
  `Cреднее арифметическое для всех белых клеточек = ${
    statWhiteCell(mTable)[0]
  }, а максимальное число = ${statWhiteCell(mTable)[1]}`
);

// 2.9. Посчитать сумму чисел в верхнем треугольнике относительно главной диагонали

const sumUpTriangle = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length - i; j += 1) {
      sum += matrix[i][j];
    }
  }
  return sum;
};
console.log(`Сумма чисел верхнего треугольника = ${sumUpTriangle(mTable)}`);

// 2.10. Посчитать сумму чисел в нижнем треугольнике относительно вспомогательной диагонали

const sumDownTriangle = (matrix) => {
  let sum = 0;
  for (let i = 8; i >= 0; i -= 1) {
    for (let j = 0 + i; j < matrix.length; j += 1) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

console.log(`Сумма чисел верхнего треугольника = ${sumDownTriangle(mTable)}`);
