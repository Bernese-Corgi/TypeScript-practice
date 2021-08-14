import React from 'react';
import Greetings from './Greetings';

const App: React.FC = () => {
  // onClick 함수 정의 : 콘솔에 name props를 출력하는 행위 정의
  const onClick = (name: string) => {
    console.log(name);
  };

  return (
    <div>
      {/* Greetings 컴포넌트에 onClick 함수 전달 */}
      <Greetings name="React" onClick={onClick} />
    </div>
  );
};

export default App;
