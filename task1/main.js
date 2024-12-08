
let users = [];

let fieldText = document.getElementById("fieldText");
let addButton = document.getElementById("addButton");
let deleteButton = document.getElementById("deleteButton");
let labelField = document.getElementById("labelField");
let sortNameButton = document.getElementById("sortNameButton");
let sortValueButton = document.getElementById("sortValueButton");

const regex = /^[a-zA-Z0-9]+ ?= ?[a-zA-Z0-9]+$/; 

addButton.onclick = function () {
  const inputValue = fieldText.value.trim();
  if (inputValue && regex.test(inputValue)) {
    users.push(inputValue);
    fieldText.value = '';
    updateList();
  } else {
    alert("Use format 'name = value'");
  }
};

deleteButton.onclick = function () {
  const cursorPoint = labelField.selectionStart;
  const userDeleteIndex = labelField.value.substring(0, cursorPoint).split("\n").length - 1;

  if (userDeleteIndex >= 0 && userDeleteIndex < users.length) {
    users.splice(userDeleteIndex, 1);
    updateList();
  }
};

sortNameButton.onclick = function () {
  users.sort((a, b) => a.split(" = ")[0].localeCompare(b.split(" = ")[0]));
  updateList();
};

sortValueButton.onclick = function () {
  users.sort((a, b) => a.split(" = ")[1].localeCompare(b.split(" = ")[1]));
  updateList();
};

function updateList() {
  labelField.value = users.join("\n");
}
