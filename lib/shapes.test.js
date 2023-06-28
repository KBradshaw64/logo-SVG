const {Circle, Triangle, Square} = require('./Shape')

let triangle = new Triangle("blue")
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

let circle = new Circle("blue")
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');

let square = new Square("blue")
    expect(square.render()).toEqual('<rect x="75" y="30" width="150" height="150" fill="blue"/>');