interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);

const shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
  console.log(shape.getArea()); // 78.53981633974483 10
});

/* -------------------------------------------------------------------------- */

interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: 'Jin',
  age: 20,
};

const expert: Developer = {
  name: 'Dev',
  skills: ['javascript', 'react', 'typescript'],
};

// type alias : 별칭

type People = Person[];
const people: People = [person, expert];
console.log(people);
/*
[
  { name: 'Jin', age: 20 },
  { name: 'Dev', skills: [ 'javascript', 'react', 'typescript' ] }
]
*/
