import React from 'react';
import CounterR from './CounterR';
// import CounterS from './CounterS';
// import Greetings from './Greetings';
// import MyForm from './MyForm';

const App: React.FC = () => {
  // onClick 함수 정의 : 콘솔에 name props를 출력하는 행위 정의
  // const onClick = (name: string) => {
  //   console.log(name);
  // };

  // MyForm onSubmit
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };

  return (
    <div>
      {/* Greetings 컴포넌트에 onClick 함수 전달 */}
      {/* <Greetings name="React" onClick={onClick} /> */}
      {/* <CounterS /> */}
      {/* <MyForm onSubmit={onSubmit} /> */}
      <CounterR />
    </div>
  );
};

export default App;
