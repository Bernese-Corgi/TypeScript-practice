let numVal;
let strVal;
let boolVal;
let undefinedVal;
let nullVal;
let objVal;
let symbolVal;
let anyVal;
/* number */
numVal = 3.3;
/* string */
strVal = 'hello';
// strVal = 1; // error
strVal = `
hello
${1 + 1}
hi
`;
// strVal = '
// hello
// hi
// '; // error : 작은따옴표는 개행 불가
/* boolean */
boolVal = true;
/* undefined */
undefinedVal = undefined;
undefinedVal = null; // ok
// undefined와 null은 모든 타입의 하위 타입이므로 다른 타입에도 할당 가능하다.
numVal = undefined; // ok
numVal = null; // ok
/* any */
// any는 모든 타입의 상위 타입이다.
anyVal = 1;
anyVal = null;
anyVal = 'hi';
anyVal = {};
/* object */
objVal = {};
objVal = { name: 'jin' };
objVal = new String('hello'); // string 래퍼 타입의 value, 원시값이 아니다.
// objVal = String('hello'); // 원시값이 반환되므로 객체 타입에 할당 불가
/* symbol */
symbolVal = Symbol();
// 객체의 프로퍼티로 쓰인다.
{
    symbolVal: 'hello';
}
/* 배열 */
let nameList; // 배열에 담길 각각의 요소들에 대한 타입을 정의
// nameList = [ 1, 4 ]; // type error
nameList = ['1', '4'];
nameList.push('6'); // 배열 메서드 사용
/* 배열: 인라인으로 타입 정의 */
let user1; // 변수 선언과 동시에 인라인으로 타입 정의
user1 = {
    name: 'jin',
    score: 30,
};
let user2; // user1과 중복되는 패턴의 배열이므로, 이 것은 interface로 정의하면 편리하다.
/* 튜플 */
// 배열 타입을 정의할 때 안에 들어가야 되는 요소들의 개수와 타입을 미리 정의
let tuple1;
tuple1 = [1, '2'];
let tuple2;
tuple2 = [1, 2, 3];
//# sourceMappingURL=basicType.js.map