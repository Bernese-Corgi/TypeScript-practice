"use strict";
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(2, 5);
var shapes = [circle, rectangle];
shapes.forEach(function (shape) {
    console.log(shape.getArea()); // 78.53981633974483 10
});
var person = {
    name: 'Jin',
    age: 20,
};
var expert = {
    name: 'Dev',
    skills: ['javascript', 'react', 'typescript'],
};
var people = [person, expert];
console.log(people);
