import React, { ChangeEvent, FormEvent, useState } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
  // useState 사용
  const [value, setValue] = useState('');

  // onChange 함수
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // input의 값(e.target.value)이 바뀌면 value 상태 변경
    setValue(e.target.value);
  };

  // onSubmit 함수
  const onSubmit = (e: FormEvent) => {
    // form의 기본 동작 막음
    e.preventDefault();
    // props로 가져온 onInsert에 현재 상태를 인수로 전달
    onInsert(value);
    // 현재 value값을 초기화
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
