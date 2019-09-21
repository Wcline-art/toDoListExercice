"use strict";

// GLOBALS VARIABLES//

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
let li;

// FUNCTIONS//

function InputValue() {
  return input.value.length;
}

function getInputValueClick() {
    if (InputValue() > 0) {
        addItemInTodoList();
      }
}
function getInputValueEnter(key) {
    if (InputValue() > 0 && key.keyCode === 13) {
        addItemInTodoList();
}

function createElementLi() {
  li = document.createElement("li");
}

function addInputValueInLi() {
  li.append(document.createTextNode(getFirstCapitalize()));
}

function insertNewLiInDom() {
  ul.insertAdjacentElement("beforeend", li);
}

function addItemInTodoList() {
  createElementLi();
  addInputValueInLi();
  insertNewLiInDom();
  deleteInputField();
}
