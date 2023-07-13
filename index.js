const inquirer = require('inquirer');
const fs = require('fs');
const {licenseBadge, licenseLink} = require ('./utils/generateMarkdown.js')

function createReadMe(name, description, installation, usage, contribute, tests, github, email, license) {
    const renderLicenseBadge = licenseBadge(license);
    const renderLicenseLink = licenseLink(license);

    return `
# ${name}

${renderLicenseBadge}
    

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribute}

## Tests
${tests}

## Questions
If you have any questions my github is: ${github}. You can also reach me via email at: ${email}

## License
${license} ${renderLicenseLink}
`;
}

function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project/app?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description.'
      },
      {
        type: 'imput',
        name: 'installation',
        message: 'Please provide installation instructions.'
      },
      {
        type: 'imput',
        name: 'usage',
        message: 'Please provide app/project usage.'
      },
      {
        type: 'imput',
        name: 'tests',
        message: 'Provide any tests for your application.'
      },
      {
        type: 'imput',
        name: 'github',
        message: 'Please provide your github for user questions'
      },
      {
        type: 'imput',
        name: 'email',
        message: 'Please provide your email for user questions'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ['MIT', 'Apache', 'GNU General', 'BSD', 'GNU Lesser', 'None'],
      },
    ]).then((answers) => {
        const { name, description, installation, usage, contribute, tests, github, email, license } = answers;
        const readMeContent = createReadMe(name, description, installation, usage, contribute, tests, github, email, license);
      
        fs.writeFile('README.md', readMeContent, (err) => {
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log('README.MD created successfully.');
          }
        });
    });
}

init();