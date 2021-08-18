import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { toggleTodo, removeTodo, addTodo } from '../modules/todos';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

function TodoApp() {
  // state에 있는 todos를 useSelector로 선택
  const todos = useSelector((state: RootState) => state.todos);
  // dispatch 불러오기
  const dispatch = useDispatch();

  // 이벤트 함수 : dispatch에 액션 생성 함수를 전달해서 호출
  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default TodoApp;
