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

// Any
let any: any = 123;
any = 'Hello world';
console.log(any); // Hello world

any = {};
console.log(any); // {}

any = null;
console.log(any); // null

const list: any[] = [1, true, 'Anything!'];
console.log(list); // [ 1, true, 'Anything!' ]

let anyObj: any = { x: 0 };
anyObj.bar = 100;
console.log(anyObj); // { x: 0, bar: 100 }
anyObj = 'hello';
console.log(anyObj); // 'hello'

const n: number = anyObj;
console.log(n, typeof n); // 'hello' string

// unknown
let any_: any = 123;
let unknown: unknown = 123;

let boolVal: boolean = any_; // any는 모든 타입에 할당할 수 있다.
// let numberVal1: number = unknown; // unknown 형식은 number 형식에 할당할 수 없다
let anyVal: any = unknown; // unknown 형식은 any 형식에 할당할 수 있다.
// 타입 단언
let numberVal2: number = unknown as number; // 타입을 단언하면 unknown 형식도 any 외의 값에 할당할 수 있다.
