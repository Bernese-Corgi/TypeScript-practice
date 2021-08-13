// Typescript 변수 선언
var score1 = 0;
let score2 = 200;
const defaultScore = 0;
function outer() {
    if (true) {
        const score = 100;
        // score = 30; //
    }
    // console.log(score); // error
    // for (let i = 0; i < 3; i++) {
    //   setTimeout(() => {
    //     console.log(i);
    //   }, 100);
    // }
}
outer();
//# sourceMappingURL=variables.js.map