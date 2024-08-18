"use strict";

class Person {
  #firstName;
  #lastName;
  #birthYear;
  #age;
  #phoneNumber;
  #email;
  static #list = [];

  constructor(firstName, lastName, birthYear) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#birthYear = birthYear;
    this.#age = this.calculateAge();
    this.addToList();
  }

  // add instance to Person.#list

  addToList() {
    Person.#list.push(this);
    return `List entry completed.`;
  }

  // read index of instance in Person.#list

  numberInList() {
    return Person.#list.indexOf(this);
  }

  // generate full name

  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  // manipulate names

  set firstName(newFirstName) {
    this.#firstName = newFirstName;
  }

  set lastName(newLastName) {
    this.#lastName = newLastName;
  }

  // manipulate phone number

  validatePhoneNumber(phoneNumber) {
    const regex = /^06\d{9}$/;
    return regex.test(phoneNumber);
  }

  set PhoneNumber(newPhoneNumber) {
    if (this.validatePhoneNumber(newPhoneNumber)) {
      this.#phoneNumber = newPhoneNumber;
      return `Phone number set to ${newPhoneNumber}`;
    } else return `Error: ${newPhoneNumber} is not valid. Should contain 11 numbers and should start with '06'`;
  }

  get PhoneNumber() {
    return this.#phoneNumber;
  }

  // calculate the age of the person

  calculateAge() {
    let thisYear = new Date().getFullYear();
    console.log(thisYear - this.#birthYear);
    return thisYear - this.#birthYear;
  }

  introduceSelf() {
    // QUESTION which is better to use: the already set #age prop or to run calculateAge() method again? I guess the #age.
    return `Hello! I'm ${this.fullName} and I'm ${this.#age} years old.`;
  }
}

export default Person;
