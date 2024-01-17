const { generateSVG } = require('./logoGenerator');

test('generateSVG returns valid SVG content', () => {
  const userInput = {
    text: 'ABC',
    textColor: 'red',
    shape: 'circle',
    shapeColor: 'blue',
  };

  const result = generateSVG(userInput);

  // Implement your assertions based on the expected SVG content
  // For simplicity, let's just check if it contains the user's input text
  expect(result).toContain(userInput.text);
});

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
