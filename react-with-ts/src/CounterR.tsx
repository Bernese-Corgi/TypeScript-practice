import React, { useReducer } from 'react';

// 액션 타입
type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

// 리듀서 함수
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;

    default:
      throw new Error('Unhandled action');
  }
}

// 컴포넌트
const CounterR = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  console.log(reducer);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default CounterR;
