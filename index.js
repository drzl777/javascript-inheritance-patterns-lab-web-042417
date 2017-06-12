function Point (x,y) {
  this.x = x
  this.y = y
}
//
Point.prototype.toString = function () {return `()${this.x},${this.y})`}

function Shape () {}

Shape.prototype.addToPlane = function (x,y) {
  this.position = new Point(x,y)
}



Shape.prototype.move = function (x,y) {
  this.position = new Point(x,y)
}

function Circle (radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.constructor = Circle

Circle.prototype.diameter = function () {return this.radius * 2}
Circle.prototype.circumference = function () {return Math.PI * this.radius * 2}
Circle.prototype.area = function () {return Math.PI * Math.pow(this.radius,2)}

function Side (length) {
  this.length = length
}

function Polygon (sides) {
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function () {
  return this.sides.reduce(function (acc, side) {
    return acc + side.length}, 0)
}

Polygon.prototype.numberOfSides = function () {
  return this.sides.length
}

function Quadrilateral (side1, side2, side3, side4) {
  var sides = [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]
  Polygon.call(this,sides)
}

Quadrilateral.prototype = Object.create(Polygon.prototype)



function Rectangle (width, height) {
  this.width = width
  this.height = height
  Quadrilateral.call(this, width, height, width, height)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function () {
  return this.width * this.height
}

function Square (length) {
  this.length = length
  Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function () {
  let properties = []
  for (const prop in this) {
    if (this.hasOwnProperty(prop)) {
      properties.push(prop)
    }
  }
  return properties.join()
}

function Triangle (side1, side2, side3) {
  var sides = [new Side(side1), new Side(side2), new Side(side3)]
  Polygon.call(this,sides)
}

Triangle.prototype = Object.create(Polygon.prototype)
