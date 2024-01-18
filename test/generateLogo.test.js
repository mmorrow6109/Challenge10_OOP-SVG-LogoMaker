const fs = require('fs');
const inquirer = require('inquirer');
const generateSVG = require('./logoGenerator.js');
const promptUser = require('./index.js');
jest.mock('fs');
jest.mock('inquirer', () => ({
  prompt: jest.fn(),
}));

describe('generateSVG function', () => {
  it('should generate SVG for a circle', () => {
    const userInput = {
      text: 'ABC',
      textColor: 'black',
      shape: 'circle',
      shapeColor: 'red',
    };

    const svgContent = generateSVG(userInput);

    expect(svgContent).toContain('<circle');
    expect(svgContent).toContain('style="fill:red;"');
    expect(svgContent).toContain(`fill="${userInput.textColor}"`);
    expect(svgContent).toContain(`font-size="45">${userInput.text}</text>`);
  });

  it('should handle unknown shape and use default circle', () => {
    const userInput = {
      text: 'Default',
      textColor: 'white',
      shape: 'unknownShape',
      shapeColor: 'blue',
    };

    const svgContent = generateSVG(userInput);

    expect(svgContent).toContain('<circle');
    expect(svgContent).toContain('style="fill:blue;"');
    expect(svgContent).toContain('fill="white"');
    expect(svgContent).toContain('font-size="45">Default</text>');
  });

});

describe('promptUser function', () => {
  it('should prompt the user and return user input', async () => {
    // Mock inquirer's prompt function to return a specific user input
    inquirer.prompt = jest.fn().mockResolvedValue({
      text: 'XYZ',
      textColor: 'green',
      shape: 'square',
      shapeColor: 'yellow',
    });

    const userInput = await promptUser();

    expect(userInput).toEqual({
      text: 'XYZ',
      textColor: 'green',
      shape: 'square',
      shapeColor: 'yellow',
    });
  });
});