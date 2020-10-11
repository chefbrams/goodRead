// array of questions for user
// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the project title?",
            name: "title",
        }

    ])
    .then(function (response) {
        const mdFile = `# ${response.title}
        `;
        writeFile("README.md", mdFile)
            .then(() => console.log("sucess!"))
            .catch((err) => console.log(err));


    });