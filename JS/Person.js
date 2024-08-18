"use strict";

import Registry from "./registry.js";

class Person {
  #firstName;
  #lastName;
  #birthYear;
  #age;
  #phoneNumber;
  #email;
  #id;

  // automatically creating a new Registry instance to be able to track the list of persons
  // static, bc no need to inherit for instances, can access or modify via methods

  static #registry = new Registry("personregistry");
  static readRegistryList() {
    return this.#registry.readList();
  }
  constructor(firstName, lastName, birthYear) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#birthYear = birthYear;
    this.#age = this.calculateAge();
    Person.#registry.addToList(this);
    this.#id = this.numberInList();
  }

  // read index of instance in Person.#list for person #id

  numberInList() {
    return Person.#registry.readList().indexOf(this);
  }

  // access the list that contains this instance

  showList() {
    return Person.#registry.readList();
  }

  get list() {
    return Person.#registry;
  }

  // read #id

  get personId() {
    return this.#id;
  }

  // generate full name

  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  // manipulate name

  set firstName(newFirstName) {
    this.#firstName = newFirstName;
  }

  set lastName(newLastName) {
    this.#lastName = newLastName;
  }

  // manipulate age
  set birthYear(year) {
    this.#birthYear = year;
    this.#age = this.calculateAge();
  }

  // maniupulate email

  set email(newEmail) {
    this.#email = newEmail;
  }

  get email() {
    return this.#email;
  }

  // manipulate phone number

  validatePhoneNumber(phoneNumber) {
    const regex = /^06\d{9}$/;
    return regex.test(phoneNumber);
  }

  //manipulate telephone number

  set phoneNumber(newPhoneNumber) {
    if (this.validatePhoneNumber(newPhoneNumber)) {
      this.#phoneNumber = newPhoneNumber;
    } else console.log(`Error: ${newPhoneNumber} is not valid. Should contain 11 numbers and should start with '06'`);
  }

  get phoneNumber() {
    return this.#phoneNumber;
  }

  // calculate the age of the person

  calculateAge() {
    let thisYear = new Date().getFullYear();
    return thisYear - this.#birthYear;
  }

  introduceSelf() {
    // QUESTION which is better to use: the already set #age prop or to run calculateAge() method again? I guess the #age.
    return `Hello! I'm ${this.fullName} and I'm ${this.#age} years old.`;
  }
}

export default Person;
