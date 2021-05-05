const fs = require("fs");
const chalk = require("chalk");

// add new note to file
const addNote = function (title, body) {
  const data = loadData();

  const checkedTitles = data.filter(function (note) {
    return note.title === title;
  });

  if (checkedTitles.length === 0) {
    data.push({
      title: title,
      body: body,
    });
    saveData(data);
    console.log(chalk.green.inverse.bold(title + " Note Added successfully"));
  } else {
    console.log(chalk.red.inverse.bold(title + " Title is Taken!"));
  }
};

//remove Note
const removeNote = function (title) {
  let data = loadData();
  let isexists = false;
  data.map((note) => {
    if (note.title === title) {
      let index = data.indexOf(note);
      data.splice(index, 1);
      saveData(data);
      console.log(chalk.green.inverse.bold(title + " Removed successfully"));
      isexists = true;
    }
  });
  if (isexists == false) {
    console.log(chalk.red.inverse.bold(title + " Title deosn't exists!"));
  }
};

// read data and convert it from json string to object
const loadData = function () {
  try {
    const dataBuffer = fs.readFileSync("data.json");
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
  } catch (error) {
    return [];
  }
};

// write data into file after convertting it from object to json string
const saveData = function (data) {
  const stringData = JSON.stringify(data);
  fs.writeFileSync("data.json", stringData);
};

module.exports = {
  addNote,
  removeNote,
};
