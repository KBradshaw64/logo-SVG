//const shapesChoice = require('./lib/Shape');
//const shapesTest = require('./lib/shapes.test');
const inquirer = require('inquirer');
const fs = require('fs')
const {Circle, Triangle} = require('./lib/Shape')


inquirer.prompt([
    {
        message: "what the shape?",
        type: "list",
        choices: ['Circle', 'Triangle'],
        name: 'shape'

    },
    {
        message: "what the color of the shape",
        type: "input",

        name: 'shapeColor'

    },
    {
        message: "what the color of the text",
        type: "input",

        name: 'textColor'

    },
    {
        message: "what the text",
        type: "input",

        name: 'text'

    },


]).then(

    answer => {


        if (answer.shape == "Circle") {

            const newShape = new Circle(answer.shapeColor);
            const element = newShape.render();
            const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${element}

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answer.textColor}">${answer.text}</text>

        </svg>`

            fs.writeFileSync('logo.svg', svg)

        } else if (answer.shape == "Triangle") {
            return
        }
    }
)