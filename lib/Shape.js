class Shape {
    constructor(color){
        this.color = color
    }
}

class Circle extends Shape{ 
    // constructor(color){
    //     super(color)
    // }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }

}




let circle = new Circle("blue")
console.log(circle.color)

module.exports = {Circle, Triangle, }

