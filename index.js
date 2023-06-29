//const shapesChoice = require('./lib/Shape');
//const shapesTest = require('./lib/shapes.test');
const inquirer = require('inquirer');
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/Shape');

const questions = [
{
    message: "What shape would you like the logo to be?",
    type: "list",
    choices: ['Circle', 'Triangle', 'Square'],
    name: 'shape'
},
{
    message: "What color would you like the shape to be?",
    type: "input",
    name: 'shapeColor'
},
{
    message: "What three letters should be in the logo?",
    type: "maxlength-input",
    maxLength: 3,
    name: 'text'
},
{
    message: "What color would you like the text to be?",
    type: "input",
    name: 'textColor'
}];

inquirer.registerPrompt('maxlength-input', maxLengthInputPrompt);

inquirer.prompt(questions).then(answer => {
        if (answer.shape == "Circle") {
            const newShape = new Circle(answer.shapeColor);
            const element = newShape.render();
            const svg = 
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${element}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answer.textColor}">${answer.text}</text>
                </svg>`
            fs.writeFileSync('logo.svg', svg)
        } 
        else if (answer.shape == "Triangle") {
            const newShape = new Triangle(answer.shapeColor);
            const element = newShape.render();
            const svg = 
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${element}
                <text x="150" y="140" font-size="60" text-anchor="middle" fill="${answer.textColor}">${answer.text}</text>
                </svg>`
            fs.writeFileSync('logo.svg', svg);
        }
        else {
            const newShape = new Square(answer.shapeColor);
            const element = newShape.render();
            const svg = 
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${element}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answer.textColor}">${answer.text}</text>
                </svg>`
            fs.writeFileSync('logo.svg', svg);
        }
    }
);