/* eslint-disable no-console */

const Roles = {
  User: "user",
  Admin: "admin",
  Manager: "manager",
};

function createPerson(firstName, lastName, birthDate = new Date(1990, 5, 15)) {
  return {
    firstName,
    lastName,
    birthDate,
  };
}

function createEmployee(person, role) {
  return {
    person,
    role,
  };
}

function calculateAge(person) {
  const today = new Date();
  if (today.getMonth() <= person.birthDate.getMonth()) {
    if (today.getDate() < person.birthDate.getDate()) {
      return today.getFullYear() - person.birthDate.getFullYear() - 1;
    }
  }
  return today.getFullYear() - person.birthDate.getFullYear();
}

function calculateYearsUntilRetirement(person, ageOfRetirement = 65) {
  return calculateAge(person) < ageOfRetirement
    ? ageOfRetirement - calculateAge(person)
    : 0;
}

function printPerson(person) {
  console.log(`First Name: ${person.firstName}`);
  console.log(`Last Name: ${person.lastName}`);
  console.log(`Date of Birth: ${person.birthDate}`);
  console.log(`Age: ${calculateAge(person)}`);
}

function printRole(role) {
  switch (role) {
    case Roles.User:
      console.log(`* General User *`);
      break;

    case Roles.Admin:
      console.log(`# Administrator #`);
      break;

    case Roles.Manager:
      console.log(`<* Line Manager *>`);
      break;

    default:
      console.log(`-= Unknown Role =-`);
      break;
  }
}

function printEmployee(employee) {
  printPerson(employee.person);
  printRole(employee.role);
}

const addressBook = [
  createEmployee(createPerson("John", "Doe", new Date(1970, 7, 8)), Roles.User),
  createEmployee(
    createPerson("Jane", "Doe", new Date(2001, 6, 19)),
    Roles.User
  ),
  createEmployee(
    createPerson("Neo", "Anderson", new Date(1980, 3, 17)),
    Roles.Admin
  ),
  createEmployee(createPerson("Trinity", "Anderson"), Roles.Manager),
];

addressBook
  .filter((employee) => employee.role === Roles.User)
  .forEach((employee) => printEmployee(employee));

console.log(`==============================================================`);

addressBook
  .filter((employee) => calculateYearsUntilRetirement(employee.person, 30) > 0)
  .forEach((employee) => printEmployee(employee));

console.log(`==============================================================`);

addressBook
  .filter((employee) => calculateYearsUntilRetirement(employee.person) > 0)
  .forEach((employee) => printPerson(employee.person));
