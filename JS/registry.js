"use strict";

import Person from "./Person.js";

// we can create an instance automatically in Person, Student, Teacher, Course, etc.
// methods provide way to interact with the list

class Registry {
  #name;
  #list = [];

  constructor(name) {
    this.name = name;
  }

  // function to add elements to a list

  addToList(element) {
    this.#list.push(element);
  }

  // function to delete element from a list

  deleteFromList(element) {
    const index = this.#list.indexOf(element);
    if (element > -1) {
      this.#list.splice(index, 1);
    }
  }

  // function to read contents of a list

  readList() {
    return this.#list;
  }
}

export default Registry;
