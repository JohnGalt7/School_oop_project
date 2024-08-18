"use strict";

import Person from "./Person.js";

class manipulateDom {
  // input manipulation for Person Class

  static displayPersonInputs() {
    // creating new person instance - TODO refactor - ain't nobody got time for that

    const container = document.createElement("div");
    container.className = "inputField";
    const infoText = document.createElement("p");
    infoText.className = "inputField";
    infoText.textContent = `Create a new person`;
    const textInput = document.createElement("input");
    textInput.className = "inputField";
    textInput.setAttribute("placeholder", "First Name");
    textInput.id = "firstName";
    const textInput2 = document.createElement("input");
    textInput2.className = "inputField";
    textInput2.setAttribute("placeholder", "Last Name");
    textInput2.id = "lastName";
    const ageInput = document.createElement("input");
    ageInput.className = "inputField";
    ageInput.setAttribute("placeholder", "Year of birth");
    ageInput.id = "dateOfBirth";
    const applyButton = document.createElement("button");
    applyButton.id = "newPeople";
    applyButton.textContent = "OK";

    // display in the DOM

    container.appendChild(infoText);
    container.appendChild(textInput);
    container.appendChild(textInput2);
    container.appendChild(ageInput);
    container.appendChild(applyButton);
    document.body.appendChild(container);
  }

  // displaying information regarding the Person class

  static displayPerson(person) {
    const header = document.createElement("div");
    header.id = "a-people";
    header.className = "person";

    // creating text for id
    const personId = document.createElement("p");
    personId.className = "personText";
    personId.innerText = `Id.: ${person.personId}`;

    // creating text for name

    const nameText = document.createElement("p");
    nameText.className = "personText";
    nameText.innerText = `Name: ${person.fullName}`;

    // creating text for age

    const ageText = document.createElement("p");
    ageText.className = "personText";
    ageText.innerText = `Age: ${person.calculateAge()}`;

    // creating text for phone number if available

    const phoneNumberText = document.createElement("p");
    phoneNumberText.className = "personText";
    if (person.phoneNumber) {
      phoneNumberText.innerText = `Phone number: ${person.phoneNumber}`;
    } else phoneNumberText.innerText = `Phone number: not available`;

    // displaying info in the dom

    header.appendChild(personId);
    header.appendChild(nameText);
    header.appendChild(ageText);
    header.appendChild(phoneNumberText);
    document.body.appendChild(header);

    // createing input fields for manipulation

    for (let i = 1; i <= 4; i++) {
      let tempInput = document.createElement("input");
      tempInput.className = "personInput";
      tempInput.id = `person${person.personId}-${i}`;
      switch (i) {
        case 1:
          tempInput.setAttribute("placeholder", "Change First Name");
          header.appendChild(tempInput);
          break;
        case 2:
          tempInput.setAttribute("placeholder", "Change Last Name");
          header.appendChild(tempInput);
          break;
        case 3:
          tempInput.setAttribute("placeholder", "Change Birth Year");
          header.appendChild(tempInput);
          break;
        case 4:
          tempInput.setAttribute("placeholder", "Add Telephone number");
          tempInput.setAttribute("type", "number");
          header.appendChild(tempInput);
          break;
        default:
          break;
      }
    }

    // creating the apply button
    const applyButton = document.createElement("button");
    applyButton.textContent = "OK";
    applyButton.className = "personApplyChange";
    applyButton.id = `apply-${person.personId}`;
    header.appendChild(applyButton);
  }

  //QUESTION is this good in here? Feels not, maybe it belongs to the Person class but than again, would it be good in there?
  //Maybe it should remain in main.js...
  static createNewPerson() {
    // gathering data
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = parseInt(document.getElementById("dateOfBirth").value);

    //creating new instance
    let human = new Person(firstName, lastName, age);

    //refreshing the dom
    this.refreshPersonList(human);

    //clearing input fields
    document.getElementById("firstName").value =
      document.getElementById("lastName").value =
      document.getElementById("dateOfBirth").value =
        "";
  }

  //refreshing person column after a change and adding event listener to buttons
  static refreshPersonList(person) {
    const persons = document.querySelectorAll(".person");
    persons.forEach((person) => {
      person.remove();
    });
    for (let i = 0; i < person.showList().length; i++) {
      this.displayPerson(person.showList()[i]);
    }
    this.applyAllPersonEventListener();
  }

  //   static generateNumFromId(button) {
  //     return parseInt(button.id.slice(button.id.indexOf("-") + 1));
  //   }

  static applyAllPersonEventListener() {
    for (let i = 0; i < Person.readRegistryList().length; i++) {
      document.getElementById(`apply-${i}`).addEventListener("click", () => {
        let changeFirstName = document.getElementById(`person${i}-1`).value;
        let changeLastName = document.getElementById(`person${i}-2`).value;
        let changeBirthYear = document.getElementById(`person${i}-3`).value;
        let changeTelNumber = document.getElementById(`person${i}-4`).value;
        if (changeFirstName) {
          Person.readRegistryList()[i].firstName = changeFirstName;
          document.getElementById(`person${i}-1`).value = "";
        }
        if (changeLastName) {
          Person.readRegistryList()[i].lastName = changeLastName;
          document.getElementById(`person${i}-2`).value = "";
        }
        if (changeBirthYear) {
          Person.readRegistryList()[i].birthYear = parseInt(changeBirthYear);
          document.getElementById(`person${i}-3`).value = "";
        }
        if (changeTelNumber) {
          Person.readRegistryList()[i].phoneNumber = changeTelNumber;
          document.getElementById(`person${i}-4`).value = "";
        }
        this.refreshPersonList(Person.readRegistryList()[0]);
      });
    }
  }

  static gatherDataforPersonChange() {}
}

export default manipulateDom;
