/* eslint-disable no-console */

// 1. Создание анкет.

// Мужские ФИО

const baseFirstNameMale = [
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
const baseMiddleNameMale = [
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
const baseLastNameMale = [
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

// Женские ФИО

const baseFirstNameFemale = [
  "Светлана",
  "Снежана",
  "Ольга",
  "Диана",
  "Екатерина",
  "Елизавета",
  "Татьяна",
  "Александра",
  "Анна",
  "Наталья",
  "Ирина",
  "Маргарита",
];
const baseMiddleNameFemale = [
  "Степановна",
  "Максимовна",
  "Геннадьевна",
  "Владимировна",
  "Викторовна",
  "Валерьевна",
  "Семеновна",
  "Юрьевна",
  "Сергеевна",
  "Дмитриеван",
  "Владиславовна",
  "Арсеньевна",
];
const baseLastNameFemale = [
  "Жукова",
  "Диброва",
  "Слепакова",
  "Дмитриева",
  "Барсукова",
  "Полякова",
  "Суховеева",
  "Грецкая",
  "Тихановская",
  "Колесникова",
  "Гордеева",
  "Суслова",
];

const createTemplate = (fn, mn, ln, g, bD) => ({
  firstName: fn,
  middleName: mn,
  lastName: ln,
  gender: g,
  birthDay: bD,
});

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateProfiles = (quantity, bFn, bMn, bLn, gender) => {
  const profile = [];
  for (let i = 0; i < quantity; i += 1) {
    profile.push(
      createTemplate(
        bFn[getRandom(1, bFn.length)],
        bMn[getRandom(1, bMn.length)],
        bLn[getRandom(1, bLn.length)],
        gender,
        new Date(getRandom(1980, 2002), getRandom(0, 11), getRandom(1, 30))
      )
    );
  }
  return profile;
};

const profiles = generateProfiles(
  5,
  baseFirstNameMale,
  baseMiddleNameMale,
  baseLastNameMale,
  "male"
).concat(
  generateProfiles(
    5,
    baseFirstNameFemale,
    baseMiddleNameFemale,
    baseLastNameFemale,
    "female"
  )
);
console.log(profiles);

console.log("+++++++++++++++++++++++++++++++++++++++++++");

// 2. Сортировка по ФИО.

const sortOperation = (a, b) => {
  if (a.firstName === b.firstName) {
    if (a.middleName === b.middleName) {
      return a.lastName >= b.lastName ? "ask" : "desk";
    }
    return a.middleName >= b.middleName ? "ask" : "desk";
  }
  return a.firstName >= b.firstName ? "ask" : "desk";
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

console.log(sort(profiles, sortOperation));

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

console.log("+++++++++++++++++++++++++++++++++++++++++++");

// 4. Средний возраст.

let sum = 0;
const todayYear = 2020;
for (let i = 0; i < profiles.length; i += 1) {
  const age = todayYear - profiles[i].birthDay.getFullYear();
  sum += age;
}
console.log(`Средний возраст = ${Math.round(sum / profiles.length)}`);
