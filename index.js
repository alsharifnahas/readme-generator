//  Importing the packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


//   array of questions objects for user input
const questions = [
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'userName',
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project?",
        name: "description"
    },
    {
        type: "list",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
        message: "What kind of license should project have?",
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install the dependencies?",
        name: "dependency"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
    },


];

// Funciton that will write the generated readme to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        return (err ? console.log(err) : console.log("README successfully created"));
    })
}

//  Creating a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    writeToFile("./generated-readme/generated-readme.md", answers);
}

// Function call to initialize app
init();
