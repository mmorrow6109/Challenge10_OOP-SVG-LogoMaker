// Import the generateSVG function
import { generateSVG } from './logoGenerator.js';

// Generate the SVG
let userInput = {
    shape: process.argv[2],  // The shape to generate
    shapeColor: process.argv[3],  // The color of the shape
    textColor: process.argv[4],  // The color of the text
    text: process.argv[5]  // The text to display
  };
let svgContent = generateSVG(userInput);

// Insert the SVG into the HTML
let svgContainer = document.getElementById('svgContainer');
svgContainer.innerHTML = svgContent;