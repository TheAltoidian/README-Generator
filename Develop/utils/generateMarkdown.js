// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![Mit License](https://img.shields.io/badge/MIT-2.0-blue)`;
  } else if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "Eclipse") {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  } else if (license === "GNU") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

${data.description}

## Table of Contents:
-[Installation](#Installation)
-[Usage](#Usage)
-[License](#License)
-[Contributing](#Contributing)
-[Tests](#Tests)
-[Questions](#Questions)

## Installation 

${data.installation}

## Usage 

${data.usage}

## License 

${renderLicenseBadge(data.license)}

### Contributing

${data.contribute}

## Tests 

${data.tests} 

## Questions

[Github.com/${data.username}](https://github.com/${data.username})

email: ${data.email}

`;
}

module.exports = generateMarkdown;
