import inquirer from 'inquirer';
import fs from 'fs/promises'


// questions for the user
let {title, description, installation, usage, license, contributing, tests, userName, userEmail} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Give your project a title",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a Description",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Installation",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Usage",
        },
        {
            type: 'list',
            name: 'license',
            message: "What License do you want",
            choices: [
                'Apache 2.0 License - Permissive free software license',
                'IBM Public License Version 1.0 - Free open-source software license',
                'MIT License - Permissive free software license',
                'Mozilla Public License 2.0 - Free and open-source copyleft license'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: "How to Contribute",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Tests",
        },
        {
            type: 'input',
            name: 'userName',
            message: "What is your GitHub User Name",
        },
        {
            type: 'input',
            name: 'userEmail',
            message: "What is your GitHub email",
        },
    ])


// README structure
let readMe = `# ${title}


## Description

${description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [How to Contribute](#How_to_Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${installation}

## Usage

${usage}

## License

${license}

${generateLicense(license)}

## How to Contribute

${contributing}

## Tests

${tests}

## Questions

[My GitHub Profile](https://github.com/${userName})

Contact me at: ${userEmail}
`


// makes the readme file
fs.writeFile('README.md', readMe)


// adds license badge based on user choice
function generateLicense() {
    if (license === 'Apache 2.0 License - Permissive free software license') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'IBM Public License Version 1.0 - Free open-source software license') {
        return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    } else if (license === 'MIT License - Permissive free software license') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'Mozilla Public License 2.0 - Free and open-source copyleft license') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
}
