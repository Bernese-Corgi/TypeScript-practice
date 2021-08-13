interface TV {
  // 실질적인 구현체(바디)를 정의하지 않는다. 메서드 이름과, 메서드가 반환할 값의 타입만 정의한다.
  turnOn(): void; // 아무것도 반환하지 않음
  turnOff(): boolean; // 불리언 타입을 반환함
}

/* 변수에 인터페이스 타입 할당 */
// myTV 변수에는 TV타입의 값만 할당
// const myTV: TV = {}; // 빈 객체를 할당하는 경우 TV 인터페이스의 조건을 충족하지 못하므로 에러
const myTV: TV = {
  turnOn() {
    // 아무것도 반환하지 않는다.
  },
  turnOff() {
    return true;
  },
};

/* 클라이언트: 인터페이스를 사용하는 주체 */
// 인터페이스를 사용하여 함수 파라미터의 타입을 선언할 수 있다.
// 이때 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수를 전달하여야 한다.
// 함수에 객체를 전달할 때 복잡한 매개변수 체크가 필요없어서 매우 유용하다.
function tryTurnOn(tv: TV /* 매개변수의 타입으로 TV 인터페이스 타입 선언 */) {
  tv.turnOn();
}

tryTurnOn(myTV /* TV인터페이스를 선언했던 myTV변수를 인수로 전달 */);

/* 타입스크립트에서 많이 사용하는 인터페이스 정의 방식 */
// 위의 방식은 전통적인 객체지향 프로그래밍에서 자주 사용하던 방식이고,
// 타입스크립트에서는 행위를 작성하지 않고 인터페이스가 가져야 할 속성만 기술하는 방식을 많이 사용한다.

// Cell 인터페이스는 행위를 정의하지 않고, 인터페이스가 가져야하는 데이터들의 속성만 정의한다.
// 데이터 타입으로서 인터페이스를 정의한 것이다.
interface Cell {
  // 좌표값은 number타입으로 선언
  row: number;
  col: number;
  // 셀 위에 올라갈 말의 타입을 Piece로 선언
  piece?: Piece; // piece는 비어있는 경우가 있을 수 있기 때문에, ?: 로 타입을 선언해서 인터페이스가 선택적으로 가지게 한다.
}

// 행위를 지정하는 인터페이스
interface Piece {
  move(from: Cell, to: Cell): boolean; // 잘 옮겨졌는지 여부를 boolean 타입으로 반환한다.
}

// 하나의 보드를 만드는 함수
function createBoard() {
  const cells: Cell[] = []; // 보드가 가지고 있어야 할 셀들에 대해서 배열로 가진다. 빈 배열로 초기화함.
  // row의 개수만큼 반복.
  for (let row = 0; row < 4 /* 개수도 매개변수로 받는 것이 좋다 */; row++) {
    // col의 개수만큼 반복.
    for (let col = 0; col < 3; col++) {
      // row와 col의 개수만큼 반복 => 총 12번 반복
      // cells 배열에 row와 col을 추가.
      cells.push({
        // row와 col은 인터페이스를 실제로 구현한 값이 들어가게 된다.
        row: row,
        col: col,
        // 단축 표현으로 { row, col }로 표현할 수도 있다.
      });
    }
  }
  return cells;
}

const board = createBoard();
// board[0] => { row: 0, col: 0 }
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  },
};
console.log(board);
/*
[
  { row: 0, col: 0, piece: { move: [Function: move] } },
  { row: 0, col: 1 },
  { row: 0, col: 2 },
  { row: 1, col: 0 },
  { row: 1, col: 1 },
  { row: 1, col: 2 },
  { row: 2, col: 0 },
  { row: 2, col: 1 },
  { row: 2, col: 2 },
  { row: 3, col: 0 },
  { row: 3, col: 1 },
  { row: 3, col: 2 }
]
*/
