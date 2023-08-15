import inquirer from 'inquirer';
import fs from 'fs/promises'



let {title, description, table_of_contents, installation, usage, license, contributing, tests, questions} = await inquirer
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
            name: 'table_of_contents',
            message: "Add table of contents",
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
            choices: ['Apache 2.0 License'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Contributing",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Tests",
        },
        {
            type: 'input',
            name: 'questions',
            message: "Questions",
        },
    ])


// README structure
let readMe = `# ${title}

## Description
${description}

${generateLicense(license)}
`

fs.writeFile('README.md', readMe)

function generateLicense() {
    if (license === 'Apache 2.0 License') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
}




// console.log(response.title)