function sum(x: number, y: number): number {
  return x + y;
}

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total); // 15

function returnNothing(): void {
  console.log('nothing');
  // return true; // error
}

returnNothing(); // nothing
