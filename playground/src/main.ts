// Types Basic
function add(a: number, b: number) {
  return a + b;
}

const sum: number = add(1, 2);
console.log(sum); // 3

// const error: string = add(1, 2);
// console.log(error); // 코드 작성 시점에서 에러

// Enum : 숫자
enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Week.Mon); // 1
console.log(Week.Tue); // 2
console.log(Week);
console.log(Week.Sun); // 0
console.log(Week['Sun']); // 0
console.log(Week[0]); // 'Sun'

// Enum : 문자열
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}
console.log(Color.Red); // red
console.log(Color['Green']); // green
