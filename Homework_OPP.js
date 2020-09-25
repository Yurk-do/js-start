/* eslint-disable no-console */

const Roles = {
  User: "user",
  Admin: "admin",
  Manager: "manager",
};

function Person(firstName, lastName, birthDate = new Date(1990, 5, 15)) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDate = birthDate;

  this.calculateAge = function () {
    const today = new Date();
    return today.getMonth() < this.birthDate.getMonth() ||
      (today.getMonth() === this.birthDate.getMonth() &&
        today.getDate() < this.birthDate.getDate())
      ? today.getFullYear() - this.birthDate.getFullYear() - 1
      : today.getFullYear() - this.birthDate.getFullYear();
  };

  this.calculateYearsUntilRetirement = function (ageOfRetirement = 65) {
    return this.calculateAge() < ageOfRetirement
      ? ageOfRetirement - this.calculateAge()
      : 0;
  };

  this.print = function () {
    console.log(`First Name: ${this.firstName}`);
    console.log(`Last Name: ${this.lastName}`);
    console.log(`Date of Birth: ${this.birthDate}`);
    console.log(`Age: ${this.calculateAge()}`);
  };
}

function Employee(person, role) {
  this.person = person;
  this.role = role;

  this.printRole = function () {
    switch (this.role) {
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
  };

  this.print = function () {
    this.person.print();
    this.printRole();
  };
}

const addressBook = [
  new Employee(new Person("John", "Doe", new Date(1970, 7, 8)), Roles.User),
  new Employee(new Person("Jane", "Doe", new Date(2001, 6, 19)), Roles.User),
  new Employee(
    new Person("Neo", "Anderson", new Date(1980, 3, 17)),
    Roles.Admin
  ),
  new Employee(new Person("Trinity", "Anderson"), Roles.Manager),
];

addressBook.forEach((employee) => employee.print());

console.log(addressBook[0]);
console.log(typeof addressBook[0]);
