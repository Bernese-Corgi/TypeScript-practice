import React, { CSSProperties } from 'react';
import { Todo } from '../modules/todos';

// props 타입 선언
type TodoItemProps = {
  todo: Todo; // modules/todo.ts 파일에서 만든 데이터 타입 불러와서 사용
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  // style 객체 생성
  const textStyle: CSSProperties /* style 객체의 타입 */ = {
    textDecoration: todo.done ? 'line-through' : 'none',
  };
  const removeStyle: CSSProperties /* style 객체의 타입 */ = {
    marginLeft: 8,
    color: 'red',
  };

  // 이벤트 함수
  // onToggle 함수에 현재 todo의 id를 넣어서 호출
  const handleToggle = () => onToggle(todo.id);
  // onRemove 함수에 현재 todo의 id를 넣어서 호출
  const handleRemove = () => onRemove(todo.id);

  return (
    <li>
      <span onClick={handleToggle} style={textStyle /* style 객체 지정 */}>
        {todo.text}
      </span>
      <span onClick={handleRemove} style={removeStyle /* style 객체 지정 */}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
