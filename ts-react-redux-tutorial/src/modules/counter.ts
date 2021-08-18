// 액션 타입 선언
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션 생성함수
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

// 모든 액체 객체들에 대한 타입 선언
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 이 리덕스 모듈에서 관리할 상태의 타입을 선언
type CounterState = {
  count: number;
};

// 초기상태 선언
const initialState: CounterState = {
  count: 0,
};

// 리듀서 함수
function counter(
  // state의 초기값은 initialState이고, 타입은 CouterState이다.
  state: CounterState = initialState,
  action: CounterAction
): CounterState /* state와 함수의 반환값의 타입이 일치하도록 작성 */ {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
