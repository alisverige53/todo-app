import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { Button } from './components/Button';
export interface ITodo {
  id: number;
  task: string;
  completed: boolean;
}
const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]); // List av todos
  const [newTask, setNewTask] = useState<string>(''); // value för inputFält
  const [showError, setShowError] = useState<boolean>(false); // value för inputFält

  //Läsa från localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    const parseSavedToDoes = savedTodos && JSON.parse(savedTodos);
    parseSavedToDoes.length && setTodos(parseSavedToDoes);
  }, []);

  // Uppdatera localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Lägga till en ny todo
  const addTodo = (newTask: string) => {
    if (newTask.trim() === '') return;

    const newTodo: ITodo = {
      id: Date.now(),
      task: newTask,
      completed: false,
    }; //filter om vi ska skriva samma todo
    if (todos.filter((todo) => todo.task === newTask).length > 0) {
      setShowError(true);
    } else {
      setTodos([...todos, newTodo]);
      setNewTask('');
    }
  };

  // markera todo som klar eller ångra
  const taskComplete = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };
  // ta bort todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo App</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type='text'
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
            setShowError(false);
          }}
          placeholder='Lägg till en uppgift'
        />
        <Button
          onClick={() => {
            addTodo(newTask);
          }}
          text='Lägg till'
        />
      </div>
      {showError && (
        <div style={{ color: 'red' }}>Du har redan lagt till den här task</div>
      )}
      <TodoList
        todos={todos}
        taskComplete={taskComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};
export default App;
