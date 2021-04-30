const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

const notes = getNotes();

// console.log(notes);
// console.log(validator.isEmail("m@lzf.eg"));
// console.log(chalk.red("Error"));
// console.log(chalk.bgGreen.bold.red("Success"));
// console.log(yargs.argv);

yargs.version("1.1.0");

// Adding note
yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title : " + argv.title);
    console.log("Body : " + argv.body);
  },
});

// Remove Note
yargs.command({
  command: "remove",
  describe: "Remote a note",
  handler: function () {
    console.log("Removing");
  },
});

//List Notes
yargs.command({
  command: "list",
  describe: "Listting All Notes",
  handler: function () {
    console.log("Listting");
  },
});

//Read a Note
yargs.command({
  command: "read",
  describe: "Read a Note",
  handler: function () {
    console.log("Reading a Note");
  },
});

yargs.parse();
