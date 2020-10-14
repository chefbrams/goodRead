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
const Choices = require("inquirer/lib/objects/choices");
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
            message: "What is the installation process?",
            name: "installation",

        },
        {
            type: "input",
            message: "Describe the usage of the application?",
            name: "usage",

        },
        {
            type: "list",
            message: "What license are you using?",
            name: "license",
            choices: [
                "MIT",
                "ISC",

                "gpl"
            ]

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
            message: "What is your github username?",
            name: "questionOne",
        },
        {

            type: "input",
            message: "What is your email address?",
            name: "questionTwo",

        },

    ])

    .then(function (response) {
        let badge;
        if (response.license === "MIT") {
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        }
        if (response.license === "ISC") {
            badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
        }
        if (response.license === "gpl") {
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        }
        const gitHub = ("https://github.com/" + response.questionOne);
        const mdFile = `# ${response.title} ${badge}
        \n## Discription \n${response.description}
        \n## Table of Contents \n* [Installation](#Installation)
        \n* [Installation](#Installation)
        \n* [Usage](#Usage)
        \n* [License](#License)
        \n* [Contributing](#Contributing)
        \n* [Tests](#Tests)
        \n* [Questions](#Questions)
        \n## Installation \n${response.installation}
        \n## Usage \n${response.usage}
        \n## License \n${response.license}
        \n## Contributing \n${response.contribute}
        \n## Tests \n${response.tests}
        \n## Questions \n[${response.questionOne}](${gitHub})
         \nContact me by email with any further questions.
        \n${response.questionTwo}  

        `;
        writeFile("README.md", mdFile)
            .then(() => console.log("Sucess!"))
            .catch((err) => console.log(err));


    });