// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Project name is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of what the project does: (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Project description is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'descriptionDetails',
        message: ('Provide a detailed explanation of the project: (Optional) (Motivation/reason for project, problems it solves, what you learned, etc)'),
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions to install and use the project: (Optional)',
    },
    {
        type: 'input',
        name: 'credits',
        message: "Provide the project's collaborators, third-party assets, tutorials, etc: (Optional)",
    },
    {
        type: 'input',
        name: 'license',
        message: 'Provide the license for the project: (Optional)',
    },
    {
        type: 'input',
        name: 'features',
        message: "Provide a list of the project's features: (Optional)",
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide information on how to contribute to the project: (Optional)',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
