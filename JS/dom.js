"use strict";

class manipulateDom {
  // input manipulation for Person Class

  static displayPersonInputs() {
    // creating new person instance
    // const container = document.createElement("div");
    // container.className = "inputField";
    // const infoText = document.createElement("p");
    // infoText.className = "inputField";
    // infoText.textContent = `Change something in existing person`;
    // // const textInput = document.createElement("input");
    // // textInput.className = "inputField";
    // // textInput.setAttribute("placeholder", "Id of person");
    // // const applyButton = document.createElement("button");
    // // applyButton.textContent = "OK";
    // container.appendChild(infoText);
    // container.appendChild(textInput);
    // container.appendChild(applyButton);
    // document.body.appendChild(container);
  }

  // displaying information regarding the Person class

  static displayPerson(person) {
    const header = document.createElement("div");
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

    // displaying info in the dom

    header.appendChild(personId);
    header.appendChild(nameText);
    header.appendChild(ageText);
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
          header.appendChild(tempInput);
          break;
        default:
          break;
      }
    }

    // creating the apply button
    const applyButton = document.createElement("button");
    applyButton.textContent = "OK";
    applyButton.id = `apply-${person.personId}`;
    header.appendChild(applyButton);
  }
}

export default manipulateDom;
