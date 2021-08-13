let numVal;
let strVal;
let boolVal;
let undefinedVal;
let nullVal;
let objVal;
let symbolVal;
let anyVal;
numVal = 3.3;
strVal = 'hello';
strVal = `
hello
${1 + 1}
hi
`;
boolVal = true;
undefinedVal = undefined;
undefinedVal = null;
numVal = undefined;
numVal = null;
anyVal = 1;
anyVal = null;
anyVal = 'hi';
anyVal = {};
objVal = {};
objVal = { name: 'jin' };
objVal = new String('hello');
symbolVal = Symbol();
{
    symbolVal: 'hello';
}
let nameList;
nameList = ['1', '4'];
nameList.push('6');
let user1;
user1 = {
    name: 'jin',
    score: 30,
};
let user2;
let tuple1;
tuple1 = [1, '2'];
let tuple2;
tuple2 = [1, 2, 3];
//# sourceMappingURL=basicType.js.map