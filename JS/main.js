"use strict";

import Person from "./Person.js";
import manipulateDom from "./dom.js";

// TESTING

const p0 = new Person("Zero", "Patient", 1900);

const p1 = new Person("Jenny", "Holt", 1970);
console.log(p1);
console.log(p1.fullName);

console.log(`---\nChanging first name to Jessica \n---`);
p1.firstName = "Jessica";
console.log(p1.introduceSelf());
p1.writePhoneNumber = "06704561234";
console.log(p1);
console.log(p1.readPhoneNumber);

manipulateDom.setupPerson(p0);
manipulateDom.setupPerson(p1);
console.log(p1.numberInList());
