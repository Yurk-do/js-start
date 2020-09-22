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
  age() {
    const today = new Date();
    return today.getFullYear() - this.birthDay.getFullYear();
  },
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

const sortPeopleName = profiles.sort((a, b) => {
  if (a.firstName > b.firstName) return 1;
  if (a.firstName < b.firstName) return -1;
  if (a.firstName === b.firstName) {
    if (a.middleName > b.middleName) return 1;
    if (a.middleName < b.middleName) return -1;
    if (a.middleName === b.middleName) {
      if (a.lastName > b.lastName) return 1;
      if (a.lastName < b.lastName) return -1;
      return 0;
    }
  }
});
console.log(sortPeopleName);
console.log("+++++++++++++++++++++++++++++++++++++++++++");

// 3. Самый молодой и самый старый.

//  Вариант 1.

const sortPeopleAge = profiles.sort((a, b) => {
  if (a.birthDay > b.birthDay) return 1;
  if (a.birthDay < b.birthDay) return -1;
  return 0;
});
const old = sortPeopleAge[0];
const young = sortPeopleAge[sortPeopleAge.length - 1];

// Вариант 2. Самый старый мужчина.

const tooOldMale = profiles
  .filter((man) => man.gender === "male")
  .reduce(
    (acc, man) => (acc.age() > man.age() ? acc : man),
    profiles.find((man) => man.gender === "male")
  );

// Функция для приятного вывода.

const objKeysValuesOutput = (object, title = "здесь мог бы быть заголовок") => {
  const a = Object.keys(object);
  const b = Object.values(object);
  console.log(title);
  for (let i = 0; i < a.length; i += 1) {
    console.log(`${a[i]} = ${b[i]}`);
  }
};

objKeysValuesOutput(old, "Самый молодой человек:");
objKeysValuesOutput(young, "Самый старый человек:");
objKeysValuesOutput(tooOldMale, "Самый старый мужчина:");

console.log("+++++++++++++++++++++++++++++++++++++++++++");

// 4. Средний возраст.

const averAge =
  profiles.reduce((acc, jopa) => acc + jopa.age(), 0) / profiles.length;
console.log(`Средний возраст = ${Math.round(averAge)}`);
