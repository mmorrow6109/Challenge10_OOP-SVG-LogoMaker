class Circle {
  constructor(userInput) {
    this.userInput = userInput;
  }

  generateSVG() {
    return `<svg height="210" width="500">
              <circle cx="100" cy="100" r="80" 
              style="fill:${this.userInput.shapeColor};" />
              <text x="53" y="110" fill="${this.userInput.textColor}" font-size="45">${this.userInput.text}</text>
            </svg>`;
  }
}

class Triangle {
  constructor(userInput) {
    this.userInput = userInput;
  }

  generateSVG() {
    return `<svg height="210" width="500">
              <polygon points="100,50 50,150 150,150"
              style="fill:${this.userInput.shapeColor};" />
              <text x="79" y="115" fill="${this.userInput.textColor}" font-size="20">${this.userInput.text}</text>
            </svg>`;
  }
}

class Square {
  constructor(userInput) {
    this.userInput = userInput;
  }

  generateSVG() {
    return `<svg height="210" width="500">
              <rect width="150" height="150" 
              style="fill:${this.userInput.shapeColor};" />
              <text x="27" y="90" fill="${this.userInput.textColor}" font-size="45">${this.userInput.text}</text>
            </svg>`;
  }
}

function generateSVG(userInput) {
  let shape;

  // Determine which shape class to instantiate based on userInput.shape
  switch (userInput.shape) {
    case 'triangle':
      shape = new Triangle(userInput);
      break;

    case 'circle':
      shape = new Circle(userInput);
      break;

    case 'square':
      shape = new Square(userInput);
      break;

    default:
      console.error(`Unknown shape: ${userInput.shape}. Using default shape 'circle'.`);
      shape = new Circle({ shapeColor: 'blue', textColor: 'white', text: 'Default' });
      break;
  }

  return shape.generateSVG();
}

module.exports = { generateSVG };
