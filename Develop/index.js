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
        },
        {
            type: "input",
            message: "What is the description of your project?",
            name: "description",

        },
        {
            type: "input",
            message: "List the table of contents?",
            name: "contents",

        },
        {
            type: "input",
            message: "What is the installation process?",
            name: "installation",

        },
        {
            type: "input",
            message: "Describe the usage of the application?",
            name: "usage",

        },
        {
            type: "input",
            message: "What license are you using?",
            name: "license",

        },
        {
            type: "input",
            message: "List the contributors?",
            name: "contribute",

        },
        {
            type: "input",
            message: "What Tests did you run on the product?",
            name: "tests",

        },
        {
            type: "input",
            message: "Any questions for the user?",
            name: "questions",

        }

    ])
    .then(function (response) {
        const mdFile = `# ${response.title}
        \n## Discription \n${response.description}
        \n## Table of Contents \n* ${response.contents}
        \n## Installation \n${response.installation}
        \n## Usage \n${response.usage}
        \n## License \n${response.license}
        \n## Contributing \n${response.contribute}
        \n## Tests \n${response.tests}
        \n## Questions \n${response.questions}

        `;
        writeFile("README.md", mdFile)
            .then(() => console.log("Sucess!"))
            .catch((err) => console.log(err));


    });