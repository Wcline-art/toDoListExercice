"use strict";

// GLOBALS VARIABLES//

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
let li;

// FUNCTIONS//

// function for the lenght value of the field input
function InputValue() {
  return input.value.length;
}

// function to get the value in the field when the user click to the button add
function getInputValueClick() {
  if (InputValue() > 0) {
    addItemInTodoList();
  }
}
// function to get the value in the field when the user press  the button enter
function getInputValueEnter(key) {
  if (InputValue() > 0 && key.keyCode === 13) {
    addItemInTodoList();
  }
}

// function to change the first character of the string to uppercase and the other to lowercase
function getFirstCapitalize() {
  return (
    input.value[0].toUpperCase() +
    input.value.slice(1, InputValue()).toLowerCase()
  );
}
//   function to create new element 'li' in the the list
function createElementLi() {
  li = document.createElement("li");
}
// function add value in the field
function addInputValueInLi() {
  li.append(document.createTextNode(getFirstCapitalize()));
}
// function insert new element'li' in DOM
function insertNewLiInDom() {
  ul.insertAdjacentElement("beforeend", li);
}

// function delete value into the field after add in the list
function deleteInputField() {
  input.value = "";
}

// function to add item in the list ( it's THE global function)
function addItemInTodoList() {
  createElementLi();
  addInputValueInLi();
  insertNewLiInDom();
  deleteInputField();
}

// lol
button.addEventListener("click", getInputValueClick);
input.addEventListener("keypress", getInputValueEnter);
