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

// union
function printId(id: number | string) {
  console.log('Your ID is:' + id);
}

printId(101); // Your ID is:101
printId('202');
// printId({ myId: 1234 }); // Error - ts(2345)

function unionError(member: number | string) {
  // console.log(member.toUpperCase()); // 'string | number' 형식에 'toUpperCase' 속성이 없습니다. 'number' 형식에 'toUpperCase' 속성이 없습니다.ts(2339)
}

// Intersection
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

// Colorful와 Circle을 교차하여 Colorful와 Circle의 모든 구성원이 있는 새로운 타입을 생성
type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// OK
draw({ color: 'blue', radius: 42 });

// 에러
// draw({ color: "red", raidus: 42 }); // '{ color: string; raidus: number; }' 형식의 인수는 'Colorful & Circle' 형식의 매개 변수에 할당될 수 없습니다.
// 객체 리터럴은 알려진 속성만 지정할 수 있지만 'Colorful & Circle' 형식에 'raidus'이(가) 없습니다. 'radius'을(를) 쓰려고 했습니까?ts(2345)

// Type Infernce
let hellworld = 'Hello World';
// hellworld = 0; // 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
