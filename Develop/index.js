// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown"); 
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
        name: 'usage',
        message: ('Describe how to use the project, what it does: (Optional)'),
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions to install and use the project: (Optional)',
    },
    // {
    //     type: 'input',
    //     name: 'credits',
    //     message: "Provide the project's collaborators, third-party assets, tutorials, etc: (Optional)",
    // },
    {
        type: 'list',
        name: 'license',
        message: 'Provide the license for the project:',
        choices: ["MIT", "Apache", "GNU", "None"]
    },
    // {
    //     type: 'input',
    //     name: 'features',
    //     message: "Provide a list of the project's features: (Optional)",
    // },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide information on how to contribute to the project: (Optional)',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write the command to run test cases for your project (ex: npm run test): (Optional)',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Provide your Github username: (Optional)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address: (Optional)',
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log('README created');
    });
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then(answers =>{
        console.log(answers); 
        //convert into a readme format 
       const convertedString =  generateMarkdown(answers); 
       
       writeToFile('./README.md', convertedString); 

    })
};

// Function call to initialize app
init()
//    .then(writeToFile);