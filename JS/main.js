"use strict";

import Person from "./Person.js";
import manipulateDom from "./dom.js";
import Registry from "./registry.js";

// TESTING

const p0 = new Person("Patient", "Zero", 1901);

const p1 = new Person("Jenny", "Holt", 1970);

p1.firstName = "Jessica";
p1.phoneNumber = "06704561234";

// Display input for person creation

manipulateDom.displayPersonInputs();

// Display persons already in list

manipulateDom.refreshPersonList(p0);

//Creating a new person based on input and listing all the instances

document.getElementById("newPeople").addEventListener("click", () => {
  manipulateDom.createNewPerson();
});
