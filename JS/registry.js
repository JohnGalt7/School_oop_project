"use strict";

import Person from "./Person.js";

class Registry {
  #name;
  #list = [];

  constructor(name) {
    this.name = name;
  }

  // function to add elements to a list

  addToList(element) {
    if (element instanceof Person) {
      this.#list.push(element);
    }
  }

  // function to delete element from a list

  deleteFromList(element) {
    if (element instanceof Person) {
      const index = this.#list.indexOf(element);
      if (element > -1) {
        this.#list.splice(index, 1);
      }
    }
  }

  // function to read contents of a list

  readList() {
    return this.#list;
  }
}

export default Registry;
