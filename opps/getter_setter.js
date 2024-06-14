class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.log('Radius must be positive');
        }
    }

    get area() {
        return Math.PI * this._radius * this._radius;
    }
}

const circle = new Circle(5);
console.log(circle.area); // Output: 78.53981633974483
circle.radius = 10;
console.log(circle.area); // Output: 314.1592653589793
