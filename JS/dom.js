"use strict";

class manipulateDom {
  // input manipulation for Person Class

  static manipulatePerson() {
    // creating input fields

    const container = document.createElement("div");
    container.className = "inputField";

    const textInput = document.createElement("input");
    textInput.className = "inputField";
  }

  // displaying information regarding the Person class

  static setupPerson(person) {
    const header = document.createElement("div");
    header.className = "person";

    // creating text for id
    const personId = document.createElement("p");
    personId.className = "person";
    personId.innerText = `Id.: ${person.numberInList()}`;

    // creating text for name

    const nameText = document.createElement("p");
    nameText.className = "person";
    nameText.innerText = `Name: ${person.fullName}`;

    // creating text for age

    const ageText = document.createElement("p");
    ageText.className = "person";
    ageText.innerText = `Age: ${person.calculateAge()}`;

    // displaying in the dom

    header.appendChild(personId);
    header.appendChild(nameText);
    header.appendChild(ageText);
    document.body.appendChild(header);
  }
}

export default manipulateDom;
