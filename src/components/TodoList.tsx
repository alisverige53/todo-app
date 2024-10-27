// src/components/TodoList.tsx
import React from 'react';
import TodoItem from './TodoItem';
interface TodoListProps {
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[];
  taskComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  todos,
  taskComplete,
  deleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          taskComplete={taskComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
export default TodoList;
