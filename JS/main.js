"use strict";

import Person from "./Person.js";
import manipulateDom from "./dom.js";
import Registry from "./registry.js";

// TESTING

const p0 = new Person("Patient", "Zero", 1901);

const p1 = new Person("Jenny", "Holt", 1970);

p1.firstName = "Jessica";

p1.phoneNumber = "06704561234";

manipulateDom.displayPersonInputs();

document.getElementById("newPeople").addEventListener("click", () => {
  manipulateDom.refreshPeopleList();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = parseInt(document.getElementById("dateOfBirth").value);
  let a = new Person(firstName, lastName, age);
  console.log(a.showList());

  for (let i = 0; i < a.showList().length; i++) {
    manipulateDom.displayPerson(a.showList()[i]);
  }
});
