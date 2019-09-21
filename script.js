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
function getFirstCapitalize() {
    return (
      input.value[0].toUpperCase() +
      input.value.slice(1, InputValue()).toLowerCase()
    );
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

function deleteInputField() {
    input.value = "";
  }

function addItemInTodoList() {
  createElementLi();
  addInputValueInLi();
  insertNewLiInDom();
  deleteInputField();
}

button.addEventListener("click", getInputValueClick);
input.addEventListener("keypress", getInputValueEnter);
