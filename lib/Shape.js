class Shape {
    constructor(color){
        this.color = color
    }
};

class Circle extends Shape{ 
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
};

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="10" y="10" width="60" height="60" fill="${this.color}"/>`
    }
}

let circle = new Circle("blue")
console.log(circle.color)

module.exports = {Circle, Triangle, Square}

