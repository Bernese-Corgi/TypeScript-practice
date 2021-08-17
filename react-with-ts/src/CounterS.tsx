import React, { useState } from 'react';

const CounterS = () => {
  // generics를 사용하여 상태가 어떤 타입을 가질지 지정
  // const [count, setCount] = useState<number>(0);
  // generics를 사용하지 않아도 타입을 유추할 수는 있다.
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
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

export default CounterS;
