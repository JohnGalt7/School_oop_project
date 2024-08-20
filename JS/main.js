"use strict";

import Person from "./Person.js";
import ManipulateDom from "./Dom.js";
import Registry from "./Registry.js";

// TESTING

const p0 = new Person("Patient", "Zero", 1901);

const p1 = new Person("Jenny", "Holt", 1970);

p1.firstName = "Jessica";
p1.phoneNumber = "06704561234";

// Display input for person creation

ManipulateDom.displayPersonInputs();

// Display persons already in list

ManipulateDom.refreshPersonList(p0);

//Creating a new person based on input and listing all the instances

document.getElementById("newPeople").addEventListener("click", () => {
  ManipulateDom.createNewPerson();
});

// let buttonTry = document.createElement("button");
// buttonTry.textContent = "Try";
// let buttonDel = document.createElement("button");
// buttonDel.textContent = "Del";
// document.body.appendChild(buttonTry);
// document.body.appendChild(buttonDel);
// buttonTry.addEventListener("click", () => {
//   ManipulateDom.displayErrorMessage("This is an Error Message");
// });
// buttonDel.addEventListener("click", () => {
//   ManipulateDom.removeErrorMessage();
// });
