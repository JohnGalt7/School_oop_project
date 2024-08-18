"use strict";

import Person from "./Person.js";
import manipulateDom from "./dom.js";
import Registry from "./registry.js";

// TESTING

const personRegistry = new Registry("personregistry");

const p0 = new Person("Zero", "Patient", 1900);

const p1 = new Person("Jenny", "Holt", 1970);

p1.firstName = "Jessica";

p1.phoneNumber = "06704561234";

// manipulateDom.displayPerson(Person.list.forEach((el) => el.numberInList));
console.log(p1);
console.log(p0);
console.log(p1.numberInList());
console.log(p0.numberInList());
