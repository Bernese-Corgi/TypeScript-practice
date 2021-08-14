import React from 'react';

type GreetingsProps /* 컴포넌트 이름 + Props */ = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 아무것도 리턴하지 않는 함수
};

// React.FC를 사용한 함수 컴포넌트 정의
/*
const Greetings: React.FC<GreetingsProps> = ({
  name,
  mark,
  children // => props 에 기본적으로 children 이 들어가있다.
}) => {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
};
 */

function Greetings(
  {
    name,
    mark,
    optional,
    onClick /* 매개변수로 콜백 함수 전달 */,
  }: GreetingsProps /* 어떤 props를 넣어야 하는지 만들어둔 type alias로 지정 */
) {
  const handleClick = () => onClick(name);

  return (
    <div>
      Hello, {name} {mark}
      {/* optional props가 존재하면 p태그 내에 props를 표시한다. */}
      {optional && <p>{optional}</p>}
      <button onClick={handleClick /* 전달된 콜백함수를 화살표 함수로 호출 */}>
        Click me!
      </button>
    </div>
  );
}

Greetings.defaultProps = {
  // mark props가 선택적으로 전달되어야 하는 것이 아니어도,
  // 기본값을 지정하면 상위 컴포넌트에서 지정하지 않아도 기본값이 설정된다.
  mark: '!',
};

export default Greetings;
