const fs = require('fs');
const inquirer = require('inquirer');
const { generateSVG } = require('./logoGenerator');

const promptUser = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal number):',
    },
  ]);

  return userInput;
};

const main = async () => {
  const userInput = await promptUser();
  const svgContent = generateSVG(userInput);

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
};

main();
