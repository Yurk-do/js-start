/* eslint-disable no-console */

// 1. Создание анкет.

const baseFirstName = [
  "Андрей",
  "Виктор",
  "Геннадий",
  "Семен",
  "Максим",
  "Юрий",
  "Илья",
  "Игорь",
  "Владислав",
  "Валерий",
  "Степан",
  "Глеб",
];
const baseMiddleName = [
  "Степанович",
  "Максимович",
  "Геннадьевич",
  "Владимирович",
  "Викторович",
  "Валерьевич",
  "Семенович",
  "Юрьевич",
  "Сергеевич",
  "Ильич",
  "Владиславович",
  "Дмитриевич",
];
const baseLastName = [
  "Жуков",
  "Дибров",
  "Слепаков",
  "Дмитриев",
  "Барсуков",
  "Поляков",
  "Гордейко",
  "Грецкий",
  "Тихановский",
  "Бабарико",
  "Грак",
  "Суслов",
];

const createProfile = (fn, mn, ln, bD) => ({
  firstName: fn,
  middleName: mn,
  lastName: ln,
  birthDay: bD,
});

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateData = (bFn, bMn, bLn) => {
  const profile = [];
  for (let i = 0; i < 50; i += 1) {
    profile.push(
      createProfile(
        bFn[getRandom(1, bFn.length)],
        bMn[getRandom(1, bMn.length)],
        bLn[getRandom(1, bLn.length)],
        new Date(getRandom(1980, 2002), getRandom(0, 11), getRandom(1, 30))
      )
    );
  }
  return profile;
};

const profiles = generateData(baseFirstName, baseMiddleName, baseLastName);
console.log(profiles);

console.log("+++++++++++++++++++++++++++++++++++++++++++");

// 2. Сортировка по ФИО.

const sortName = (a, b) => {
  if (a.firstName === b.firstName) {
    if (a.middleName === b.middleName) {
      return a.lastName > b.lastName ? "ask" : "desk";
    }
    return a.middleName > b.middleName ? "ask" : "desk";
  }
  return a.firstName > b.firstName ? "ask" : "desk";
};

const sort = (array, operation, askOrDesk = "ask") => {
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = 0; j < array.length - 1 - i; j += 1) {
      if (operation(array[j], array[j + 1]) === askOrDesk) {
        const x = array[j];
        array[j] = array[j + 1];
        array[j + 1] = x;
      }
    }
  }
  return array;
};

console.log(sort(profiles, sortName));

console.log("+++++++++++++++++++++++++++++++++++++++++++");

// 3. Самый молодой и самый старый.
const operationAge = (a, b) => (a > b ? "old" : "young");

const oldYoungPerson = (array, oldYoung) => {
  let minMax = array[0].birthDay;
  let age;
  for (let i = 1; i < array.length; i += 1) {
    if (operationAge(minMax, array[i].birthDay) === oldYoung) {
      minMax = array[i].birthDay;
      age = array[i];
    }
  }
  return age;
};

const youngPerson = oldYoungPerson(profiles, "young");
const oldPerson = oldYoungPerson(profiles, "old");

const objKeysValuesOutput = (object, title = "здесь мог бы быть заголовок") => {
  const a = Object.keys(object);
  const b = Object.values(object);
  console.log(title);
  for (let i = 0; i < a.length; i += 1) {
    console.log(`${a[i]} = ${b[i]}`);
  }
};

objKeysValuesOutput(youngPerson, "Самый молодой человек:");
objKeysValuesOutput(oldPerson, "Самый старый человек:");

// console.log(youngPerson, oldPerson);

console.log("+++++++++++++++++++++++++++++++++++++++++++");

// 4. Средний возраст.

let sum = 0;
for (let i = 0; i < profiles.length; i += 1) {
  const age = 2020 - profiles[i].birthDay.getFullYear();
  sum += age;
}
console.log(`Средний возраст = ${Math.round(sum / profiles.length)}`);
