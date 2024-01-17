function generateSVG(userInput) {
  let svgContent = '';

  // a switch statement is used to perform different actions based on different conditions
  switch (userInput.shape) {
    case 'triangle':
      svgContent = `<svg height="210" width="500">
                      <polygon points="100,50 50,150 150,150"
                      style="fill:${userInput.shapeColor};" />
                      <text x="79" y="115" fill="${userInput.textColor}" font-size="20">${userInput.text}</text>
                    </svg>`;
      break; //stops the execution of more code and case testing inside the block. If break is omitted, the next code block in the switch statement is executed.

    case 'circle':
      svgContent = `<svg height="210" width="500">
                      <circle cx="100" cy="100" r="80" 
                      style="fill:${userInput.shapeColor};" />
                      <text x="53" y="110" fill="${userInput.textColor}" font-size="45">${userInput.text}</text>
                    </svg>`;
      break;

    case 'square':
      svgContent = `<svg height="210" width="500">
                      <rect width="150" height="150" 
                      style="fill:${userInput.shapeColor};" />
                      <text x="27" y="90" fill="${userInput.textColor}" font-size="45">${userInput.text}</text>
                    </svg>`;
      break;


// although the input is selected in the CLI, it is best practice to have a default case in the switch statement
      default:
        console.error(`Unknown shape: ${userInput.shape}. Using default shape 'circle'.`);
         svgContent = `<svg height="210" width="500">
                  <circle cx="100" cy="100" r="50" 
                  style="fill:blue;" />
                </svg>`;
      break;

  }

  return svgContent;
}

module.exports = { generateSVG };
