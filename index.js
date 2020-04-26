const inquirer = require("inquirer")
const fs = require("fs")


function generateMarkdown(data) {
    return `
# Title
${data.title}
## Description
${data.description}
## Table of Contents
${data.tableOfContants ? '## Table of Contents' : ''}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests} 
## Questions
${data.email}
  `;
}

inquirer.prompt([

    {
        type: "input",
        message: "What is the project title?",
        name: "title"

    },
    {
        type: "input",
        message: "What is the description?",
        name: "description"
    },  
    {
        type: "confirm",
        message: "Do you want to include a Table of Contents",
        name: "tableOfContents"
    },   
    {
        type: "input",
        message: "How to install the project?",
        name: "installation"
        
    },
    {
        type: "input",
        message: "How to use the application?",
        name: "usage",
        default: 'node index.js'

    },
    {
        type: "list",
        message: "what license do you use?",
        choices: ['MIT', 'Creative Commons', 'Apache', 'GNUv2'],
        default: 0,
        name: "license"

    },
    {
        type: "input",
        message: "Who can contribute to your project?",
        name: "contributing"

    },
    {
        type: "input",
        message: "How to test this project?",
        name: "tests"

    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"

    },


]).then((data) => {

    console.log(JSON.stringify(data, '', 4))

    userInput = generateMarkdown(data)
    
    fs.writeFile("README.md", userInput, err => {
        if (err) {
            return console.log(err)
        }

        console.log("Success!")
    })
});