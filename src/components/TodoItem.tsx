import React from 'react';
import { ITodo } from '../App';
import { Button } from './Button';
// Definiera interface för todo-props
interface ITodoItem {
  todo: ITodo;
  taskComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}
const TodoItem: React.FC<ITodoItem> = ({ todo, taskComplete, deleteTodo }) => {
  return (
    <div>
      <li
        style={{
          textDecorationLine: todo.completed ? 'line-through' : 'none',
          listStyleType: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'lightblue',
            padding: '10px',
            marginBottom: '5px',
            borderRadius: '5px',
            justifyContent: 'space-between',
          }}
        >
          <div> {todo.task}</div>
          <div>
            <Button
              onClick={() => taskComplete(todo.id)}
              backgroundColor={todo.completed ? 'yellow' : 'green'}
              text={todo.completed ? 'Ångra' : 'Klar'}
            />
            <Button
              onClick={() => deleteTodo(todo.id)}
              backgroundColor={'red'}
              text='Ta bort'
            />
          </div>
        </div>
      </li>
    </div>
  );
};
export default TodoItem;
