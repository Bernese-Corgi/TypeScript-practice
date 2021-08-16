import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

const MyForm = ({ onSubmit }: MyFormProps) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // 기존 form 내용을 넣고, name의 값을 덮어씌운다.
    setForm({
      ...form, // 기존 form 내용을 넣는다.
      [name]: value, // value : 이벤트 객체에서 가져온 value 값 = 사용자가 바꾸려고 하는 값
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form); // onSubmit에 form을 넣어서 호출
    setForm({
      name: '',
      description: '',
    }); // 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default MyForm;
