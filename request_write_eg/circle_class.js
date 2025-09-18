class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Export the class
module.exports = Circle;