/* eslint-disable no-console */

//Задача № 1. Расстояние между двумя точками в прямоуголной системе координат.

// function distanceForTwoPoint(x1, y1, x2, y2) {
//   return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
// }

// const distanceForTwoPoint = function (x1, y1, x2, y2) {
//   return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
// };

distanceForTwoPoint = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

const distance = distanceForTwoPoint(-1, 4, 5, -2);
console.log(`Расстояние между точками cоставляет: ${distance}`);

//Задача №2. Проверить удовлетворяют ли три числа теоереме Пифагора.

// function PythagoreanTheoremForThreeNumbers(a, b, c) {
//   const resultYes = a ** 2 + b ** 2 === c ** 2;
//   return resultYes ? "удовлетворяют" : "неудовлетворяют";
// }

// const PythagoreanTheoremForThreeNumbers = function (a, b, c) {
//   const resultYes = a ** 2 + b ** 2 === c ** 2;
//   return resultYes ? "удовлетворяют" : "неудовлетворяют";
// };

const PythagoreanTheoremForThreeNumbers = (a, b, c) => {
  const resultYes = a ** 2 + b ** 2 === c ** 2;
  return resultYes ? "удовлетворяют" : "неудовлетворяют";
};

const number1 = 3;
const number2 = 4;
const number3 = 5;
const output = PythagoreanTheoremForThreeNumbers;
console.log(`Tри числа ${output(number1, number2, number3)} теореме Пифагора`);

//Задача №3. Убедиться, что три числа могут быть сторонами треугольника.

// function sideOfTriangle(side1, side2, side3) {
//   const condition = side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2;
//   return condition ? "могут" : "не могут";
// }

// const sideOfTriangle = function (side1, side2, side2) {
//   condition =
//     side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2;
//   return condition ? "могут" : "не могут";
// };

const sideOfTriangle = (side1, side2, side3) => {
  const condition =
    side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2;
  console.log(
    `Если сторона1 = ${side1}, сторона2 = ${side2}, сторона3 = ${side3}`
  );
  return condition ? "могут" : "не могут";
};

const side1 = 5;
const side2 = 3;
const side3 = 1;
console.log(
  `Три вышеуказанных числа ${sideOfTriangle(
    side1,
    side2,
    side3
  )} быть сторонами треугольника`
);

// МАССИВЫ.

// Задание 1.1. Заполнить массив 20 числами которые делятся на 3, или на 5, или на 15 и вывести его на экран.
function arrayOfTwentyNumbers(nameArray = []) {
  for (let i = 3; nameArray.length < 20; i += 1) {
    if (i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
      nameArray.push(i);
    }
  }
  return nameArray;
}
const arrayExample = arrayOfTwentyNumbers();
console.log(
  `Массив "arrayExample" заполнен 20 числами, которые делятся на 3, или на 5, или на 15: ${arrayExample}`
);

// 1.2. Посчитать произведение всех элементов находящихся в каждой третьей позиции массива.

const productInThirdPosition = (nameArray) => {
  let product = 1;
  for (let i = 2; i < nameArray.length; i += 3) {
    product *= nameArray[i];
  }
  return product;
};

console.log(
  `Произведение всех элементов массива "arrayExample", находящихся в каждой третьей позиции = ${productInThirdPosition(
    arrayExample
  )}`
);

// // 1.3. Посчитать среднее арифметическое всех чисел массива.

const arithmeticMean = (nameArray) => {
  let sum = 0;
  for (let i = 0; i < nameArray.length; i += 1) {
    sum += nameArray[i];
  }
  return sum / nameArray.length;
};

console.log(
  `Среднее арифметическое всех чисел массива "arrayExample" = ${arithmeticMean(
    arrayExample
  )}`
);

// 1.4. Найти максимальное и минимальное число в массиве "а".

function maxNumberForArray(nameArray) {
  let maxNumber = nameArray[0];
  for (let i = 0; i < nameArray.length; i += 1) {
    if (maxNumber < nameArray[i]) {
      maxNumber = nameArray[i];
    }
  }
  return maxNumber;
}

function minNumberForArray(nameArray) {
  let minNumber = nameArray[0];
  for (let i = 0; i < nameArray.length; i += 1) {
    if (minNumber > nameArray[i]) {
      minNumber = nameArray[i];
    }
  }
  return minNumber;
}

console.log(
  `максимальное число массива "arrayExample" = ${maxNumberForArray(
    arrayExample
  )}, минимальное число массива "arrayExample" = ${minNumberForArray(
    arrayExample
  )}`
);
