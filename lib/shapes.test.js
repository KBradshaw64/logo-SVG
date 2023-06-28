const {Circle} = require('./Shape')

let circle = new Circle("blue")


expect(circle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');