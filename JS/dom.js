"use strict";

import Person from "./Person.js";

class ManipulateDom {
  // input manipulation for Person Class

  static displayPersonInputs() {
    // dom elements for creating new person instance - TODO refactor - ain't nobody got time for that

    const container = document.createElement("form");
    container.className = "inputField";
    const infoText = document.createElement("p");
    infoText.className = "inputField";
    infoText.textContent = `Create a new person`;
    const textInput = document.createElement("input");
    textInput.className = "inputField";
    textInput.setAttribute("placeholder", "First Name");
    textInput.id = "firstName";
    textInput.required = true;
    const textInput2 = document.createElement("input");
    textInput2.className = "inputField";
    textInput2.setAttribute("placeholder", "Last Name");
    textInput2.id = "lastName";
    textInput2.required = true;
    const ageInput = document.createElement("input");
    ageInput.className = "inputField";
    ageInput.setAttribute("placeholder", "Year of birth");
    ageInput.id = "dateOfBirth";
    ageInput.required = true;
    ageInput.type = "number";
    const applyButton = document.createElement("button");
    applyButton.id = "newPeople";
    applyButton.type = "submit";
    applyButton.textContent = "Create";

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

  // creating new Person instance

  static createNewPerson() {
    // gathering data
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age;
    if (document.getElementById("dateOfBirth").value !== "")
      age = parseInt(document.getElementById("dateOfBirth").value);

    // creating array of datas to validate
    let input = [];
    input.push(firstName, lastName, age);

    //creating new instance if all the inputs are correct
    let human;
    if (this.valideateInput(input)) {
      human = new Person(firstName, lastName, age);
      //refreshing the dom
      this.refreshPersonList(human);
    } else this.displayErrorMessage("At least one input was invalid or missing, fill all the input fields.");

    //clearing input fields
    document.getElementById("firstName").value =
      document.getElementById("lastName").value =
      document.getElementById("dateOfBirth").value =
        "";
  }

  // validating inputs of new person creation

  static valideateInput(inputArr) {
    let counter = 0;
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i]) {
        counter++;
      }
    }
    if (counter === inputArr.length) {
      return true;
    } else return false;
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

  // adding event listener to all submit buttons in person instances

  static applyAllPersonEventListener() {
    for (let i = 0; i < Person.readRegistryList().length; i++) {
      document.getElementById(`apply-${i}`).addEventListener("click", () => {
        let changeFirstName = document.getElementById(`person${i}-1`).value;
        let changeLastName = document.getElementById(`person${i}-2`).value;
        let changeBirthYear = document.getElementById(`person${i}-3`).value;
        let changeTelNumber = document.getElementById(`person${i}-4`).value;

        // reading presented value if available
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

        // refreshing the listed person instances in the DOM
        this.refreshPersonList(Person.readRegistryList()[0]);
      });
    }
  }

  static displayErrorMessage(message) {
    const errorField = document.createElement("div");
    const errorLine = document.createElement("p");

    //if error message is not created in DOM, create it
    if (!document.getElementById("errorField")) {
      errorField.className = "error";
      errorField.id = "errorField";
      errorLine.id = "errorLine";
      document.body.appendChild(errorField);
      errorField.appendChild(errorLine);
    }
    //append current message

    document.getElementById("errorLine").textContent = message;

    //create OK button if not present yet
    if (!document.getElementById("clearError")) {
      const clearError = document.createElement("button");
      clearError.className = "button";
      clearError.id = "clearError";
      clearError.innerText = "OK";
      document.getElementById("errorField").appendChild(clearError);
      clearError.addEventListener("click", () => {
        clearError.innerText = "";
        this.removeErrorMessage();
      });
    }
  }
  static removeErrorMessage() {
    let errorField = document.querySelector(".error");
    errorField.remove();
  }
}

export default ManipulateDom;
