import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

// props 타입 선언
type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  // todos 배열에 아무것도 없으면 경고문구 렌더링
  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          /* todos 배열을 순회하면서 todo props에 배열의 요소를 순차적으로 넣는다. */
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      ))}
    </ul>
  );
}

export default TodoList;
